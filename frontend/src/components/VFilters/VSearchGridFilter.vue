<script setup lang="ts">
import { useI18n, useNuxtApp } from "#imports"
import { computed } from "vue"

import { storeToRefs } from "pinia"

import type { FilterCategory } from "#shared/constants/filters"
import { useSearchStore } from "~/stores/search"

import VFilterChecklist from "~/components/VFilters/VFilterChecklist.vue"
import VButton from "~/components/VButton.vue"

withDefaults(
  defineProps<{
    /**
     * Whether to show the header with the title and the clear button.
     */
    showFilterHeader?: boolean
    /**
     * When the filters are in the sidebar, we change the keyboard tabbing order:
     * the focus moves from the Filters button to the filter,
     * and from the last tabbable element to the main content on Tab,
     * and from the filters to the filters button on Shift Tab.
     */
    changeTabOrder?: boolean
  }>(),
  {
    showFilterHeader: true,
    changeTabOrder: true,
  }
)

const searchStore = useSearchStore()

const { t } = useI18n({ useScope: "global" })

const { $sendCustomEvent } = useNuxtApp()

const {
  isAnyFilterApplied,
  searchTerm,
  searchType,
  searchFilters: filters,
} = storeToRefs(searchStore)

const filterTypes = computed(
  () => Object.keys(filters.value) as FilterCategory[]
)
const filterTypeTitle = (filterType: FilterCategory) => {
  return t(`filters.${filterType}.title`)
}

const toggleFilter = ({
  filterType,
  code,
}: {
  filterType: FilterCategory
  code: string
}) => {
  const checked = searchStore.toggleFilter({ filterType, code })
  $sendCustomEvent("APPLY_FILTER", {
    category: filterType,
    key: code,
    checked,
    searchType: searchType.value,
    query: searchTerm.value,
  })
}

const clearFilters = () => searchStore.clearFilters()
</script>

<template>
  <section id="filters" aria-labelledby="filters-heading" class="filters">
    <header
      v-if="showFilterHeader"
      class="relative mb-6 flex items-center justify-between"
    >
      <h4 id="filters-heading" class="caption-bold uppercase">
        {{ $t("filterList.filterBy") }}
      </h4>
      <VButton
        v-show="isAnyFilterApplied"
        id="clear-filter-button"
        variant="transparent-gray"
        size="small"
        class="label-bold absolute end-0 !text-link"
        @click="clearFilters"
      >
        {{ $t("filterList.clear") }}
      </VButton>
    </header>
    <form class="filters-form">
      <VFilterChecklist
        v-for="filterType in filterTypes"
        :key="filterType"
        :options="filters[filterType]"
        :title="filterTypeTitle(filterType)"
        :filter-type="filterType"
        @toggle-filter="toggleFilter"
      />
    </form>
  </section>
</template>
