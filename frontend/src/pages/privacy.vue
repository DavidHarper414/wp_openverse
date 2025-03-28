<script setup lang="ts">
import { definePageMeta, useHead, useNuxtApp } from "#imports"
import { computed } from "vue"

import { ON, OFF } from "#shared/constants/feature-flag"
import { useFeatureFlagStore } from "~/stores/feature-flag"

import VLink from "~/components/VLink.vue"
import VCheckbox from "~/components/VCheckbox/VCheckbox.vue"
import VContentPage from "~/components/VContentPage.vue"

defineOptions({
  name: "PrivacyPage",
})

definePageMeta({
  layout: "content-layout",
})

const {
  $i18n: { t },
} = useNuxtApp()

useHead({
  title: `${t("privacy.title", { openverse: "Openverse" })} | Openverse`,
})
const featureFlagStore = useFeatureFlagStore()

const isChecked = computed(() => featureFlagStore.isOn("analytics"))

const handleChange = ({ checked }: { checked?: boolean }) => {
  featureFlagStore.toggleFeature("analytics", checked ? ON : OFF)
}
</script>

<template>
  <VContentPage>
    <h1>
      {{ $t("privacy.title", { openverse: "Openverse" }) }}
    </h1>
    <i18n-t scope="global" keypath="privacy.intro.content" tag="p">
      <template #link>
        <VLink href="https://wordpress.org/about/privacy/">{{
          $t("privacy.intro.link")
        }}</VLink>
      </template>
    </i18n-t>

    <h2>
      {{ $t("privacy.cookies.title") }}
    </h2>
    <p>
      {{ $t("privacy.cookies.content.a", { openverse: "Openverse" }) }}
      {{ $t("privacy.cookies.content.b", { openverse: "Openverse" }) }}
    </p>

    <h2>
      {{ $t("privacy.contact.title") }}
    </h2>

    <i18n-t scope="global" keypath="privacy.contact.content" tag="p">
      <template #email>
        <VLink href="mailto:openverse@wordpress.org"
          >openverse@wordpress.org</VLink
        >
      </template>
      <template #issue>
        <VLink href="https://github.com/WordPress/openverse/issues/new/choose">
          {{ $t("privacy.contact.issue") }}</VLink
        >
      </template>
      <template #chat>
        <VLink href="https://make.wordpress.org/chat/">
          {{ $t("privacy.contact.chat") }}</VLink
        >
      </template>
    </i18n-t>

    <h2>{{ $t("prefPage.groups.analytics.title") }}</h2>

    <p>
      {{ $t("prefPage.groups.analytics.desc", { openverse: "Openverse" }) }}
    </p>

    <VCheckbox
      id="analytics"
      class="flex-row items-center"
      :checked="isChecked"
      is-switch
      @change="handleChange"
    >
      <div>
        {{ $t("prefPage.features.analytics") }}
      </div>
    </VCheckbox>
  </VContentPage>
</template>
