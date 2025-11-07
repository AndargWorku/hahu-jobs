<template>
  
  <section
    class="bg-[#F8FCFC] py-16  md:px-6 dark:bg-[#1B2637] dark:text-white"
  >
    
    <div
      class=" mx-auto grid grid-cols-1 md:grid-cols-2  dark:bg-[#1B2637] gap-20 items-start rounded-3xl bg-[#f8fcfc]
       w-full p-8 md:p-12 "
    >
   
      <div
        class="flex w-10/12 md:w-10/12 items-center justify-center bg-gray-100 h-full dark:bg-[#0F1620]"
       
      >
      
      <posticon/>
       
      </div>

     
      <div class="space-y-10 bg-[#F8FCFC] w-full dark:bg-[#1B2637]  dark:text-white">
        
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl font-semibold text-[#3B4D5D] text-center mb-4 dark:text-white">
            Post vacancy
          </h2>
          <p class="text-sm text-[#6E7B87] dark:text-white w-full">
            HaHuJobs offers dedicated enterprise cloud services for a full human
            resource management platform platform with an affordable price
            package. Posting vacancy is completely free, and only requires to
            follow the below listed steps.
          </p>
        </div>

        <div class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div class="flex flex-col">
              <div class="flex items-baseline space-x-2 mb-2 dark:text-[#009688]">
                <span class="text-6xl font-extrabold text-[#3B4D5D] dark:text-[#009688] ">01</span>
                <span class="font-semibold text-[#3B4D5D] dark:text-[#009688]">Receive</span>
              </div>
              <p class="text-sm text-[#6E7B87] dark:text-white">
                You contact us through one of our outlets with the details of
                your vacancy. You can click the button below to review ways to
                share your vacancy and review the required information we need
                to publish your vacancy on all our outlets.
              </p>
            </div>

            <div class="flex flex-col">
              <div class="flex items-baseline space-x-2 mb-2 dark:text-[#009688]">
                <span class="text-6xl font-extrabold text-[#3B4D5D] dark:text-[#009688]">02</span>
                <span class="font-semibold text-[#3B4D5D] dark:text-[#009688]">Validate</span>
              </div>
              <p class="text-sm text-[#6E7B87] dark:text-white">
                Our service officers will receive the details from your
                organization via the channel you communicated it in. They will
                review the details provided to validate all required information
                is available and build validate the legitimacy of the vacancy.
              </p>
            </div>
          </div>

          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-8 border-t border-gray-200"
          >
            <div class="flex flex-col">
              <div class="flex items-baseline space-x-2 mb-2 dark:text-[#009688]">
                <span class="text-6xl font-extrabold text-[#3B4D5D] dark:text-[#009688]">03</span>
                <span class="font-semibold text-[#3B4D5D] dark:text-[#009688]">Publish</span>
              </div>
              <p class="text-sm text-[#6E7B87] dark:text-white">
                All vacancy details will then go through our standardized
                categorization process for taxonomy identification and
                reorganization of information if required so it fits the
                publishing structure of our outlets, then will be approved for
                publishing.
              </p>
            </div>

            <div
              class="flex flex-col items-center md:items-end justify-end h-full mt-4 md:mt-0"
            >
              <p class="text-xs text-[#6E7B87] mb-2 dark:text-white">
                Sign up to HaHu Jobs Enterprise
              </p>
              <span class="justify-center">
                <img
                  src="/assets/images/downward-arrow.svg"
                  alt="Sign up arrow"
                  class="w-10 h-10 object-contain mb-2 mr-10"
                />
              </span>

              <button
                class="bg-[#009379] text-white py-3 px-8 rounded-lg shadow-md hover:bg-teal-400 transition duration-300 ease-in-out flex items-center hover:text-gray-500"
              >
                Post vacancy
                <span class="ml-3 text-lg font-semibold">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import posticon from "../components/icons/posticon.vue"
import { navigateTo } from "#app";
</script>

<style scoped>
</style>