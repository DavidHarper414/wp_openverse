import { useRuntimeConfig } from "#imports"

import { joinURL } from "ufo"
import { defineEventHandler, proxyRequest } from "h3"
import { createConsola } from "consola"
import { Mutex, MutexInterface } from "async-mutex"

const openverseUserAgent =
  "Openverse/0.1 (https://openverse.org; openverse@wordpress.org)"

const proxyLogger = createConsola({
  level: 3,
  reporters: [
    {
      log(logObj) {
        console.log(
          JSON.stringify({
            date: logObj.date,
            message: logObj.args.join(", "),
            level: logObj.type,
          })
        )
      },
    },
  ],
})

/* Process level state */

export interface Process {
  tokenData: {
    accessToken: string
    accessTokenExpiry: number
  }

  tokenFetching: Promise<void>

  fetchingMutex: Mutex
}

export declare let process: NodeJS.Process & Process

/**
 * Store the plugin's "state" on the `process` to prevent it being
 * thrown out in dev mode when the plugin's module
 * is mysteriously reloaded (cache-busted) for each request.
 */
process.tokenData = process.tokenData || {
  accessToken: "", // '' denotes non-existent key
  accessTokenExpiry: 0, // 0 denotes non-existent key
}

process.tokenFetching = process.tokenFetching || Promise.resolve()

/* Token refresh logic */

interface TokenResponse {
  access_token: string
  expires_in: number
}

/**
 * Get the timestamp as the number of seconds from the UNIX epoch.
 * @returns the UNIX timestamp with a resolution of one second
 */
const currTimestamp = (): number => Math.floor(Date.now() / 1e3)

export const expiryThreshold = 5 // seconds
/**
 * Check whether an access token does not yet exist or if the existing
 * access token is set to expire soon.
 * @returns whether the stored access token is about to expire
 */
const isNewTokenNeeded = (): boolean => {
  if (!process.tokenData.accessToken) {
    return true
  }
  // Check if the token is about to expire
  return (
    process.tokenData.accessTokenExpiry - expiryThreshold <= currTimestamp()
  )
}

/**
 * Update `tokenData` with  the new access token given the client ID and secret.
 * @param clientId - the client ID of the application issued by the API
 * @param clientSecret - the client secret of the application issued by the API
 */
const refreshApiAccessToken = async (
  clientId: string,
  clientSecret: string
) => {
  const formData = new URLSearchParams()
  formData.append("client_id", clientId)
  formData.append("client_secret", clientSecret)
  formData.append("grant_type", "client_credentials")

  const config = useRuntimeConfig()
  const baseUrl = config.public.apiUrl + "v1"
  try {
    const url = `${baseUrl}/auth_tokens/token/`
    const res = await $fetch<TokenResponse>(url, {
      method: "POST",
      body: formData,
    })
    const tokenExpiry = currTimestamp() + res.expires_in

    proxyLogger.info(
      `Openverse API token refreshed, expires in ${
        res.expires_in
      } seconds, on ${new Date(tokenExpiry * 1000)}`
    )
    process.tokenData.accessToken = res.access_token
    process.tokenData.accessTokenExpiry = currTimestamp() + res.expires_in
  } catch (e) {
    /**
     * If an error occurs, serve the current request (and any pending)
     * anonymously and hope it works. By setting the expiry to 0 we queue
     * up another token fetch attempt for the next request.
     */
    proxyLogger.error(
      "Unable to retrieve API token, clearing existing token",
      e
    )
    process.tokenData.accessToken = ""
    process.tokenData.accessTokenExpiry = 0
    // TODO: Add nitro sentry error handling
  }
}

process.fetchingMutex = new Mutex()

/**
 * Get an async function that always returns a valid, automatically-refreshed
 * API access token.
 *
 * The `fetchingMutex` allows all requests on the same process to understand
 * whether it's necessary for them to request a token refresh or if another
 * request has already queued the work. If so, they can just await the process-global
 * promise that will resolve when the api token data refresh request has resolved.

 */
const getApiAccessToken = async ({
  apiClientId,
  apiClientSecret,
}: { apiClientId?: string; apiClientSecret?: string } = {}): Promise<
  string | undefined
> => {
  if (!apiClientId || !apiClientSecret) {
    return undefined
  }

  let release: MutexInterface.Releaser | undefined = undefined

  // Only request a new token if one is needed _and_ there is
  // not already another request making the request (represented
  // by the locked mutex).
  if (isNewTokenNeeded() && !process.fetchingMutex.isLocked()) {
    proxyLogger.debug("acquiring mutex lock")
    release = await process.fetchingMutex.acquire()
    proxyLogger.debug("mutex lock acquired, preparing token refresh request")
    process.tokenFetching = refreshApiAccessToken(apiClientId, apiClientSecret)
  }

  try {
    proxyLogger.debug("awaiting the fetching of the api token to resolve")
    await process.tokenFetching
    proxyLogger.debug("done waiting for the token, moving on now...")
  } finally {
    /**
     * Releasing must be in a `finally` block otherwise if the
     * tokenFetching promise raises then the mutex will never
     * release and subsequent requests will never retry the
     * refresh.
     */
    if (release) {
      proxyLogger.debug("releasing mutex")
      release()
      proxyLogger.debug("mutex released")
    }
  }

  return process.tokenData.accessToken
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const proxyUrl = config.public.apiUrl + "v1/"
  const { apiClientId, apiClientSecret } = config

  const openverseApiToken = await getApiAccessToken({
    apiClientId,
    apiClientSecret,
  })

  const path = event.path.replace(/^\/api\//, "")
  const target = joinURL(proxyUrl, path)

  const response = await proxyRequest(event, target, {
    headers: {
      Authorization: `Bearer ${openverseApiToken}`,
      "User-Agent": openverseUserAgent,
      "Content-Type": "application/json",
    },
  })

  proxyLogger.info({
    message: `Proxied API request to ${target}, status: ${response.statusCode}`,
  })
  return response.data
})
