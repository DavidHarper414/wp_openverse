<script setup lang="ts">
import { computed } from "vue"

import type { SupportedMediaType } from "#shared/constants/media"
import type { CollectionParams } from "#shared/types/search"
import { useMediaStore } from "~/stores/media"
import { useProviderStore } from "~/stores/provider"
import { useSearchStore } from "~/stores/search"
import { useAnalytics } from "~/composables/use-analytics"
import { useI18nResultsCount } from "~/composables/use-i18n-utilities"

import VIcon from "~/components/VIcon/VIcon.vue"
import VButton from "~/components/VButton.vue"
import VScrollableLine from "~/components/VScrollableLine.vue"

const icons = {
  tag: "tag",
  source: "institution",
  creator: "person",
}

/**
 * Renders the header of a tag/creator/source collection page.
 */
const props = defineProps<{
  mediaType: SupportedMediaType
  collectionParams: CollectionParams
  creatorUrl?: string
}>()

const mediaStore = useMediaStore()
const providerStore = useProviderStore()
const searchStore = useSearchStore()

const iconName = computed(() => icons[props.collectionParams.collection])
const collection = computed(() => props.collectionParams.collection)

const source = computed(() => {
  if (props.collectionParams.collection === "tag") {
    return {
      name: "",
      link: "",
    }
  }
  return {
    name: providerStore.getProviderName(
      props.collectionParams.source,
      props.mediaType
    ),
    link: providerStore.getSourceUrl(
      props.collectionParams.source,
      props.mediaType
    ),
  }
})

const title = computed(() => {
  if (props.collectionParams.collection === "tag") {
    return props.collectionParams.tag
  } else if (props.collectionParams.collection === "creator") {
    return props.collectionParams.creator
  }
  return source.value.name
})

const url = computed(() => {
  if (props.collectionParams.collection === "tag") {
    return undefined
  } else if (props.collectionParams.collection === "creator") {
    return props.creatorUrl
  }
  return source.value.link
})

const sourceCollectionLink = computed(() => {
  if (props.collectionParams.collection !== "creator") {
    return ""
  }
  return searchStore.getCollectionPath({
    type: props.mediaType,
    collectionParams: {
      collection: "source",
      source: props.collectionParams.source,
    },
  })
})

const showCollectionExternalLink = computed(() => {
  return Boolean(props.collectionParams.collection !== "tag" && url.value)
})

const showLoading = computed(() => mediaStore.showLoading)
const { getI18nCollectionResultCountLabel } = useI18nResultsCount(showLoading)

const resultsLabel = computed(() => {
  return getI18nCollectionResultCountLabel(
    mediaStore.results[props.mediaType].count,
    props.mediaType,
    props.collectionParams.collection
  )
})

const { sendCustomEvent } = useAnalytics()

const sendAnalyticsEvent = () => {
  if (props.collectionParams.collection === "tag") {
    return
  }

  const eventName =
    props.collectionParams.collection === "creator"
      ? "VISIT_CREATOR_LINK"
      : "VISIT_SOURCE_LINK"
  sendCustomEvent(eventName, {
    url: url.value,
    source: props.collectionParams.source,
  })
}
</script>

<template>
  <div
    class="collection-header grid gap-2 sm:grid-cols-[1fr,auto]"
    :class="{ 'no-link': !showCollectionExternalLink }"
  >
    <h1 class="title flex flex-col gap-2 sm:flex-row">
      <VIcon
        :name="iconName"
        :title="collection"
        :size="10"
        class="icon hidden sm:flex"
      />
      <span class="label-regular flex text-secondary sm:hidden">{{
        $t(`collection.heading.${collection}`)
      }}</span>
      <span class="text-3xl font-semibold leading-snug sm:text-6xl">{{
        title
      }}</span>
    </h1>
    <VButton
      v-if="showCollectionExternalLink"
      as="VLink"
      variant="filled-dark"
      size="medium"
      class="link label-bold mt-1 !w-full"
      has-icon-end
      show-external-icon
      :external-icon-size="6"
      :href="url"
      @click="sendAnalyticsEvent"
      >{{ $t(`collection.link.${collection}`) }}</VButton
    >
    <div
      class="results mt-6 flex w-full min-w-0 flex-col items-start gap-1 sm:mt-0 sm:flex-row sm:items-center"
    >
      <p
        class="label-regular w-max text-secondary sm:whitespace-nowrap"
        :class="{ 'pb-2 sm:pb-0': collection !== 'creator' }"
      >
        {{ resultsLabel }}
      </p>
      <VScrollableLine
        v-if="collection === 'creator'"
        class="-ms-2 -mt-1.5px h-8 w-[calc(100%+theme(space.4))] sm:ms-0"
      >
        <VButton
          as="VLink"
          size="disabled"
          variant="transparent-gray"
          class="label-bold m-1.5px h-8 w-max gap-x-1 whitespace-nowrap p-1"
          :href="sourceCollectionLink"
          has-icon-start
          ><VIcon
            name="institution"
            :title="$t('collection.link.source')"
          /><span class="w-max whitespace-nowrap">{{
            source.name
          }}</span></VButton
        >
      </VScrollableLine>
    </div>
  </div>
</template>

<style scoped>
.collection-header {
  grid-template-areas: "title" "link" "results";
}
.no-link {
  grid-template-areas: "title" "results";
}

@screen sm {
  .collection-header {
    grid-template-rows: minmax(3.75rem, auto) minmax(2rem, auto);
    grid-template-areas: "title link" "results results";
  }
  .no-link {
    grid-template-rows: minmax(3.625rem, auto) minmax(2rem, auto);
    grid-template-columns: auto;
    grid-template-areas: "title" "results";
  }
}
.title {
  grid-area: title;
}
.link {
  grid-area: link;
}
.results {
  grid-area: results;
}
</style>
