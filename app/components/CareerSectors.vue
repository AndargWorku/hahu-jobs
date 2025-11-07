<template>
  <div class="bg-gray-100 min-h-screen p-8 dark:bg-[#02201D] dark:text-white">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-extrabold text-gray-800 text-center mb-4 dark:text-white">
        Career sectors
      </h1>
      <p class="text-gray-600 text-center font-semibold mb-12 dark:text-white">
        Based on the local labor market trend in Ethiopia we categorize our
        vacancies into fourteen sectors
      </p>

    
      <div class="flex flex-wrap justify-center gap-6">
        <div
          v-for="sector in careerSectors"
          :key="sector.name"
          class="bg-white rounded-lg shadow-md p-3 flex dark:bg-[#1B2637] flex-col items-center justify-center 
          text-center transition-transform transform hover:scale-105 h-full
          hover:shadow-xl hover:shadow-slate-400/50 
          w-[150px] sm:w-[160px] md:w-[180px] lg:w-[180px]"
        >
          <div class="mb-1 flex-grow flex items-center justify-center">
            <img
              :src="sector.imageUrl"
              :alt="sector.name"
              class="sector-image object-contain w-16 h-16"
            />
          </div>
          <h2 class="text-sm font-bold text-[#009379] mb-0.5">
            {{ sector.name }}
          </h2>
          <p class="text-gray-500 dark:text-white text-sm leading-tight">
            {{ sector.openPositions }} Open positions
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const careerSectors = ref([
  {
    name: "Natural Science",
    openPositions: 22,
    imageUrl: "/assets/images/natural-science.svg",
  },
  {
    name: "Business",
    openPositions: 304,
    imageUrl: "/assets/images/business.svg",
  },
  {
    name: "Creative Arts",
    openPositions: 14,
    imageUrl: "/assets/images/creative-art.svg",
  },
  {
    name: "Education",
    openPositions: 38,
    imageUrl: "/assets/images/education.svg",
  },
  {
    name: "Hospitality",
    openPositions: 17,
    imageUrl: "/assets/images/hospitality.svg",
  },
  {
    name: "Low and Medium Skilled Worker",
    openPositions: 100,
    imageUrl: "/assets/images/low-and-medium-skilled-work.svg",
  },
  {
    name: "Transportation & Logistics",
    openPositions: 37,
    imageUrl: "/assets/images/transport-and-logistics.svg",
  },
  {
    name: "Engineering",
    openPositions: 164,
    imageUrl: "/assets/images/engineering.svg",
  },
  {
    name: "Finance",
    openPositions: 152,
    imageUrl: "/assets/images/finance.svg",
  },
  {
    name: "Legal Services",
    openPositions: 7,
    imageUrl: "/assets/images/legal-service.svg",
  },
  {
    name: "ICT",
    openPositions: 38,
    imageUrl: "/assets/images/ict.svg",
  },
  {
    name: "Health Care",
    openPositions: 51,
    imageUrl: "/assets/images/health-care.svg",
  },
  {
    name: "Manufacturing",
    openPositions: 0,
    imageUrl: "/assets/images/manufacturing.svg",
  },
  {
    name: "Social Science",
    openPositions: 24,
    imageUrl: "/assets/images/social-science.svg",
  },
]);
</script>
