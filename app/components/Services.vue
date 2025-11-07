<template>
  <div
    class="font-sans antialiased text-gray-800 bg-gray-100 dark:bg-[#02201D] min-h-screen"
  >
    <!-- Main container uses px-6 for mobile horizontal padding (1.5rem). You can reduce this to px-4 if you want the card closer to the screen edges. -->
    <main class="container mx-auto px-6 md:px-8 lg:px-12 py-12">
      <section class="text-center mb-12">
        <h1 class="text-xl md:text-4xl font-extrabold text-gray-900 mb-4 dark:text-white">
          Services
        </h1>
        <p class=" text-gray-600 max-w-3xl mx-auto leading-relaxed font-semibold dark:text-white">
          HaHuJobs offers digital career profiling, job application and
          subscription based relevant vacancy announcement notifications to job
          seekers that sign up on its primary service deployment.
        </p>
      </section>

      <section>
        <!-- Desktop/Tablet View (unchanged) -->
        <div
          class="hidden md:flex md:justify-center md:space-x-6 lg:space-x-12 h-auto"
        >
          <div
            v-for="(service, index) in services"
            :key="index"
            class="bg-white dark:text-white dark:bg-[#1B2637] rounded-xl shadow-lg transition-shadow duration-300
             p-6 flex flex-col  items-center border-2 border-white text-center hover:border-2 hover:border-[#04a29f] w-72 "
          >
            <div class="mb-6 w-48 h-48 flex items-center justify-center">
              <img
                :src="service.image"
                :alt="service.title"
                class="max-w-full h-auto"
              />
            </div>
            <h3 class="text-lg font-bold text-[#009379] mb-3 dark:text-white">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed text-sm  dark:text-white">
              {{ service.description }}
            </p>
          </div>
        </div>

        <!-- Mobile View - MODIFICATION IS HERE -->
        <div class="md:hidden">
          <div
            class="mobile-service-card bg-white  dark:bg-[#02201D] dark:text-white rounded-xl shadow-lg transition-shadow duration-300 
            p-6 <!-- REDUCED FROM p-8 TO p-6 for tighter mobile fit -->
            flex flex-col items-center text-center hover:border-2 hover:border-[#04a29f] w-full"
          >
            <div class="mb-6 w-40 h-40 flex items-center justify-center">
              <img
                :src="services[currentMobileCardIndex].image"
                :alt="services[currentMobileCardIndex].title"
                class="max-w-full h-auto"
              />
            </div>
            <h3 class="text-lg font-bold text-[#009379] mb-3 dark:text-white">
              {{ services[currentMobileCardIndex].title }}
            </h3>
            <p class="text-gray-600 leading-relaxed text-sm font-light dark:text-white">
              {{ services[currentMobileCardIndex].description }}
            </p>
          </div>
        </div>
      </section>

      <div id="mobile-pagination" class="flex justify-center mt-2">
        <div class="flex space-x-2">
          <span
            v-for="(service, index) in services"
            :key="index"
            class="pagination-line w-3 h-0.5 cursor-pointer"
            :class="{
              'bg-[#009379]': index === currentMobileCardIndex,
              'bg-gray-300': index !== currentMobileCardIndex,
            }"
            @click="currentMobileCardIndex = index"
          ></span>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const services = ref([
  {
    title: "Build Career Profile",
    description:
      "Compose your career profile with context standards and identifiers to showcase your assessed competencies in the sector of your expertise. HaHuJobs offers you a simple, clear and...",
    image: "/assets/images/build_career_profile.svg",
  },
  {
    title: "Job Application",
    description:
      "Apply for jobs with just a few clicks, and track the progress of your applications through notifications on multiple platforms. Revolutionize your job applications with pre-prepared application materials and an optio...",
    image: "/assets/images/job_application.svg",
  },
  {
    title: "Vacancy Notification",
    description:
      "Take advantage of every job opportunity using our multi-platform vacancy notification services for jobseekers. Subscribe to a sector of your choice with various specific notification specifications to receive...",
    image: "/assets/images/vacancy_notification.svg",
  },
]);

const currentMobileCardIndex = ref(0);
</script>