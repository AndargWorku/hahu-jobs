<template>
  <NuxtLink
    to="#"
    class="block min-w-36 h-40 bg-white
     p-6 items-center rounded-2xl dark:bg-gray-900 dark:text-white shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center"
  >
    <div class="flex items-center justify-center h-10 mb-4">
      <component :is="sector.iconComponent" class="h-16 w-16" />
    </div>
    <h3 class="text-sm font-bold text-[#009688]">{{ sector.name }}</h3>
    <p class="mt-1 text-sm text-muted-text">
      {{ sector.positions }} Open positions
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Component } from "vue"; 


interface Sector {
  name: string;
  positions: number;
  iconComponent: Component; 
}


defineProps<{
  sector: Sector; 
}>();
</script>
