<!-- components/SidebarFilters.vue -->
<template>
  <div class="space-y-6">
    <!-- Additional Filters Header (Collapsible) -->
    <UCard :ui="{ body: { padding: 'p-4 sm:p-4' } }">
      <template #header>
        <UButton 
          variant="link" 
          color="gray" 
          label="Additional Filters" 
          icon="i-heroicons-adjustments-horizontal"
          :trailing-icon="isFiltersOpen ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
          @click="isFiltersOpen = !isFiltersOpen"
          class="p-0 text-base font-semibold"
        />
      </template>

      <div v-show="isFiltersOpen" class="space-y-6">
        
        <div class="mb-6">
          <p class="text-base font-medium mb-4">0 - 3 years of experience</p>
          <div class="flex items-center space-x-2">
            <input 
              type="range" 
              min="0" 
              max="10" 
              step="1" 
              value="3" 
              class="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg [&::-webkit-slider-thumb]:bg-teal-600 [&::-moz-range-thumb]:bg-teal-600"
              style="--tw-range-thumb-width: 1rem; --tw-range-thumb-height: 1rem;"
            >
            <span class="text-sm font-medium">3</span>
            <UCheckbox label="> 10" name="experience_10_plus" class="ml-4" />
          </div>
        </div>

        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-3">Type</h3>
          <div class="flex flex-wrap gap-2">
            <UPill v-for="type in jobTypes" :key="type.label" :label="type.label" 
                   :color="type.selected ? 'primary' : 'gray'" 
                   :variant="type.selected ? 'solid' : 'outline'" 
                   class="cursor-pointer"
            >
              <span v-if="type.label !== 'Bid'">+</span>
            </UPill>
          </div>
        </div>
        
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-3 flex items-center">
            Regions
            <UIcon name="i-heroicons-information-circle" class="ml-1 w-4 h-4 text-gray-400" />
          </h3>
          <!-- Placeholder for Ethiopian Map SVG/Interactive Component -->
          <div class="bg-teal-100 rounded-lg p-2 border-2 border-teal-500 overflow-hidden">
            <!-- <img src="/ethiopia-map-placeholder.svg" alt="Ethiopia Map" class="w-full h-auto opacity-70" /> -->
            <div class="flex justify-center mt-2">
                <UButton size="xs" color="primary" variant="solid" label="All" />
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-gray-200">
          <h3 class="text-lg font-semibold mb-3">Discover more</h3>
          <div class="space-y-3">
            <UButton v-for="item in keywords" :key="item.label" variant="ghost" color="gray" 
                     icon="i-heroicons-arrow-path-rounded-square" 
                     :label="item.label" 
                     class="w-full justify-start !text-left text-sm"
            />
          </div>
        </div>

      </div>
    </UCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isFiltersOpen = ref(true)

const jobTypes = ref([
  { label: 'Bid', selected: true },
  { label: 'Contract', selected: false },
  { label: 'Full Time', selected: true },
  { label: 'Internship', selected: false },
  { label: 'Part Time', selected: false },
])

const keywords = ref([
  { label: 'Minab' },
  { label: 'Agricultural job listings' },
  { label: 'communications' },
  { label: 'Employment consulting' },
])
</script>

<style>
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: var(--tw-range-thumb-width);
  height: var(--tw-range-thumb-height);
  border-radius: 9999px;
  background-color: var(--tw-bg-teal-600);
  cursor: pointer;
  margin-top: calc(-1 * var(--tw-range-thumb-height) / 4);
  border: 4px solid white;
}
input[type="range"]::-moz-range-thumb {
  width: var(--tw-range-thumb-width);
  height: var(--tw-range-thumb-height);
  border-radius: 9999px;
  background-color: var(--tw-bg-teal-600);
  cursor: pointer;
  border: 4px solid white;
}
</style>