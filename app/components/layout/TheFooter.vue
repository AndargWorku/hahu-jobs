<template>
  <footer class=" bg-white text-muted-text dark:bg-[#1B2637] dark:text-white">
   
    <div class=" px-4 md:px-20  mx-auto  items-start justify-around">
      
      <div class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-5 lg:gap-x-2 mt-10">
        
        
        <div class="flex justify-around w-full md:contents">
            
           
            <div class=" mt-10  mb-0 ml-3 md:mt-0">
                <h3
                  class="  text-sm font-bold border-b-2 border-black pb-1 inline-block dark:text-white dark:border-white"
                >
                  Get Started
                </h3>
                <ul class="mt-3 space-y-2  text-sm">
                  <li>
                    <NuxtLink to="/signup" class="hover:text-[#04a29f] hover:text-base dark:text-white"
                      >Sign up</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/login" class="hover:text-[#04a29f] hover:text-base dark:text-white"
                      >Login</NuxtLink
                    >
                  </li>
                </ul>
            </div>
    
          
            <div class=" mt-10 md:mb-0 md:mt-0 ml-3">
                <h3
                  class="text-sm font-bold border-b-2 border-black pb-1 inline-block dark:border-white "
                >
                  Quick links
                </h3>
                <ul class="mt-3 space-y-2  text-sm">
                  <li>
                    <NuxtLink to="/hahu-jobs-io" class="hover:text-[#04a29f] hover:text-base"
                      >HahuJobs IO</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/minab-tech" class="hover:text-[#04a29f] hover:text-base"
                      >Minab Tech</NuxtLink
                    >
                  </li>
                </ul>
            </div>
            
        </div>
       
        <div class="mt-10 md:mt-0 md:mb-0 lg:col-span-2">
          
          <mlogo class="ml-16"/>
         
          <p class="text-sm leading-relaxed mt-3 w-full">
            HaHuJobs is a cloud based product owned and managed by a technology
            consulting firm called Minab IT solutions PLC. Minab was founded in
            2014 and has an extensive experience in software development for the
            past nine years.
          </p>
        </div>

     
        <div class="text-center mt-10">
          <p class="text-sm">Powered by</p>
          <IconsIconLogo class="my-2 mx-auto" />

          <p class="text-[#04a29f] font-semibold text-lg">ለሀገር ልጅ በሀገር ልጅ!</p>
        </div>
      </div>

      <hr class="mt-10 border-gray-400" />

      <div
        class="mt-8 flex flex-col-reverse sm:flex-row items-center muted-text justify-between"
      >
       
        <div
          class="text-xs mt-4 bottom-0 left-0 text-neutral-400 whitespace-nowrap"
        >
          <NuxtLink
            to="/privacy-policy"
            class="hover:text-[#04a29f] transition-colors mr-1 sm:mr-6"
            >Privacy policy</NuxtLink
          >
          <span
            >© 2020 - {{ new Date().getFullYear() }} HaHuJobs. All rights
            reserved.</span
          >
        </div>
        <div class="flex space-x-7 justify-end items-end">
            <div
              class="w-5 h-5 bg-[#009379] text-white rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
            >
              <Icon name="ei:sc-telegram" class="w-3 h-3" />
            </div>
            <div
              class="w-5 h-5 bg-[#009379] rounded-full flex items-center justify-center text-white transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
            >
              <Icon name="mdi:facebook" class="w-3 h-3" />
            </div>
            <div
              class="w-5 h-5 bg-[#009379] rounded-full flex items-center justify-center text-white transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
            >
              <Icon name="arcticons:x-twitter" class="w-3 h-3" />
            </div>
            <div
              class="w-5 h-5 bg-[#009379] rounded-full flex items-center justify-center text-white transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
            >
              <Icon name="mdi:linkedin" class="w-3 h-3" />
            </div>
          </div>
       
      </div>
    </div>
  </footer>
</template>
<script setup>
import mlogo from '../icons/mlogo.vue'

</script>