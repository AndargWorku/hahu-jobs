<!-- app.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <header class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div class="flex items-center space-x-3">
          <UIcon name="i-heroicons-adjustments-horizontal" class="w-6 h-6 text-gray-500" />
          <UInput icon="i-heroicons-magnifying-glass" placeholder="Search" class="flex-1" />
          <USelectMenu placeholder="Select Position" :options="['Lecture', 'Environmentalist', 'Librarian']" class="min-w-[150px]" />
          <USelectMenu model-value="Natural Science" :options="['Natural Science']" class="min-w-[150px]" />
          <USelectMenu placeholder="Select City" :options="['Addis Ababa', 'Mekelle', 'Gondar']" class="min-w-[150px]" />
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pb-12">
      <div class="grid grid-cols-12 gap-8">
        
        <aside class="col-span-12 lg:col-span-3">
          <SidebarFilters />
        </aside>

        <section class="col-span-12 lg:col-span-9">
          <div class="mb-6">
            <div class="flex items-center space-x-3 mb-2">
              <UIcon name="i-heroicons-flask" class="w-7 h-7 text-primary-500" />
              <div>
                <h1 class="text-xl font-semibold text-gray-900">Natural Science jobs</h1>
                <p class="text-sm text-gray-500">Natural science concerned with the description, prediction, and understanding of natural phenomena, based on empirical evidence...</p>
              </div>
            </div>
            <!-- <p class="text-sm font-medium mt-4">Showing {{ jobs.length }} of {{ jobs.length }} posts</p> -->
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <JobCard/>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import JobCard from './JobCard.vue'
import SidebarFilters from './SidebarFilters.vue'

// const jobs = ref([
//   { id: 1, title: 'Lecture', company: 'New Generation University...', sector: 'Physics', experience: '2 years', logoBg: 'bg-teal-700', isMaster: false, views: 10 },
//   { id: 2, title: 'Library', company: 'New Generation University...', sector: 'Library Science', experience: '2 years', logoBg: 'bg-teal-700', isMaster: false, views: 10 },
//   { id: 3, title: 'Environmentalist', company: 'Prominent Engineering...', sector: 'Environmental Science', experience: '4 years - 6 years', logoBg: 'bg-white border border-gray-200', isMaster: true, views: 90 },
//     ...Array.from({ length: 9 }).flatMap((_, i) => [
//     { id: 4 + i * 3, title: 'Geologist', company: `GeoSurvey Corp ${i+1}`, sector: 'Geology', experience: '1-3 years', logoBg: 'bg-indigo-700', isMaster: false, views: 25 + i },
//     { id: 5 + i * 3, title: 'Chemist', company: `EthioLab Services ${i+1}`, sector: 'Chemistry', experience: '3-5 years', logoBg: 'bg-red-700', isMaster: true, views: 40 + i },
//     { id: 6 + i * 3, title: 'Biologist', company: `Green Life NGO ${i+1}`, sector: 'Biology', experience: '0-2 years', logoBg: 'bg-green-700', isMaster: false, views: 15 + i },
//   ]),
//   { id: 31, title: 'Data Scientist', company: `TechInnovate PLC`, sector: 'Statistics', experience: '6+ years', logoBg: 'bg-blue-700', isMaster: true, views: 105 },
// ])
</script>