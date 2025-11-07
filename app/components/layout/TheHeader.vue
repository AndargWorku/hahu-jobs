<template>
  <header
    class="fixed top-0 z-50 w-full bg-white/60 backdrop-blur-lg dark:bg-[#02201D] dark:bg-transparent px-7
     dark: text-white dark:hover:hover:text-[#009379] dark:backdrop-blur-xl"
  >
    <nav
      class="flex items-center py-4"
    >
      <div class="flex shrink-0">
        <NuxtLink to="/" aria-label="Home">
          <IconsIconLogo />
          <div class="ml-0.5 mt-0.5 text-xs text-gray-800 dark:text-white">
            Primary
          </div>
        </NuxtLink>
      </div>

      
      <div class="ml-auto hidden items-center justify-end space-x-4 md:flex">
        
        <NuxtLink
          to="/"
          class="text-sm text-gray-800 hover:opacity-80 hover:text-[#009379]
           dark:text-white dark:hover:text-[#009379]"
          :class="{ 'text-[#009379] dark:text-[#009379]': $route.path === '/' }"
        >
          Home
        </NuxtLink>
        
        <NuxtLink
          to="/about"
          class="text-sm text-gray-800 hover:text-[#009379] dark:text-white dark:hover:text-[#009379]"
          :class="{
            'text-[#009379] dark:text-[#009379]': $route.path === '/about',
          }"
        >
          About
        </NuxtLink>
       
        
        <button
          type="button"
          @click="openJobModal"
          class="text-sm text-gray-800 cursor-pointer hover:text-[#009379] dark:text-white dark:hover:text-[#009379]"
          :class="{
            'text-[#009379] dark:text-[#009379]': $route.path === '/jobs',
          }"
        >
          Jobs
        </button>
        
        <NuxtLink
          to="/post-vacancy"
          class="text-sm text-gray-800 hover:text-[#009379] dark:text-white dark:hover:text-[#009379]"
          :class="{
            'text-[#009379] dark:text-[#009379]': $route.path === '/post-vacancy',
          }"
        >
          Post Vacancy
        </NuxtLink>
        
        <NuxtLink
          to="/contact"
          class="text-sm text-gray-800 hover:text-[#009379] dark:text-white dark:hover:text-[#009379]"
          :class="{
            'text-[#009379] dark:text-[#009379]': $route.path === '/contact',
          }"
        >
          Contact
        </NuxtLink>

       
        <button
          aria-label="Toggle dark mode"
          class="p-1 focus:outline-none text-gray-800 hover:text-[#009379] dark:text-white dark:hover:text-[#009379]"
          @click="toggleColorMode"
        >
        
          <Icon
            v-if="colorMode.preference === 'dark'"
            name="iconamoon:mode-light-thin"
            class="h-4 w-4"
          />
          
          <Icon
            v-else
            name="si:moon-line"
            class="h-4 w-4"
          />
        </button>

       
        <NuxtLink
          to="/login"
          class=" rounded-md border border-transparent bg-[#009379] px-2 py-1 text-xs
           text-white transition-colors duration-200 hover:bg-teal-200
            hover:text-black"
        >
          Login
        </NuxtLink>
        <span class="hidden text-sm text-gray-500 dark:text-gray-400 sm:inline"
          >Or</span
        >
        <NuxtLink
          to="/signup"
          class="rounded-md bg-[#009379] px-2 py-1 text-xs text-white transition-colors duration-200 hover:bg-teal-200 hover:text-black"
        >
          Sign up
        </NuxtLink>
      </div>

     
      <div class="ml-auto flex items-center md:hidden">
       
        <button
          aria-label="Toggle dark mode"
          class="mr-2 p-1 focus:outline-none text-gray-800 hover:text-[#009379] dark:text-white dark:hover:text-[#009379]"
          @click="toggleColorMode"
        >
          <Icon
            v-if="colorMode.preference === 'dark'"
            name="iconamoon:mode-light-thin"
            class="h-4 w-4"
          />
          <Icon v-else name="si:moon-line" class="h-4 w-4" />
        </button>

       
        <button
          @click="toggleMobileMenu"
          class="text-gray-800 focus:outline-none dark:text-white"
        >
          <Icon
            v-if="!isMobileMenuOpen"
            name="heroicons-outline:menu"
            class="h-6 w-6 text-gray-500"
          />
          <Icon
            v-else
            name="heroicons-outline:x"
            class="h-6 w-6 text-gray-500"
          />
        </button>
      </div>
    </nav>

    
    <div
      v-if="isMobileMenuOpen"
      class="flex w-full flex-col items-start space-y-3 px-4 pb-4 md:hidden"
      :class="{
        'bg-white/60 backdrop-blur-lg dark:bg-gray-900/90 dark:backdrop-blur-xl':
          isMobileMenuOpen,
      }"
      aria-orientation="vertical"
    >
     
      <NuxtLink
        to="/"
        class="w-full py-1 text-base text-gray-800 hover:opacity-80 hover:text-[#009379] dark:text-white dark:hover:text-[#009379]"
        :class="{ 'text-[#009379] dark:text-[#009379]': $route.path === '/' }"
        @click="closeMobileMenu"
      >
        Home
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="w-full py-1 text-base text-gray-800 hover:text-[#009379] dark:text-white dark:hover:text-[#009379]"
        :class="{
          'text-[#009379] dark:text-[#009379]': $route.path === '/about',
        }"
        @click="closeMobileMenu"
      >
        About
      </NuxtLink>
      
      <button
        type="button"
        @click="openJobModal(); closeMobileMenu()"
        class="w-full text-left py-1 text-base text-gray-800 hover:text-[#009379] dark:text-white dark:hover:text-[#009379]"
        :class="{
          'text-[#009379] dark:text-[#009379]': $route.path === '/jobs',
        }"
      >
        Jobs
      </button>
      <NuxtLink
        to="/post-vacancy"
        class="w-full py-1 text-base text-gray-800 hover:text-[#009379] dark:text-white dark:hover:text-[#009379]"
        :class="{
          'text-[#009379] dark:text-[#009379]': $route.path === '/post-vacancy',
        }"
        @click="closeMobileMenu"
      >
        Post Vacancy
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="w-full py-1 text-base text-gray-800 hover:text-[#009379] dark:text-white dark:hover:text-[#009379]"
        :class="{
          'text-[#009379] dark:text-[#009379]': $route.path === '/contact',
        }"
        @click="closeMobileMenu"
      >
        Contact
      </NuxtLink>

      <NuxtLink
        to="/login"
        class="w-full py-1 text-base text-gray-800 hover:text-[#009379] dark:text-white dark:hover:text-[#009379]"
        :class="{
          'text-[#009379] dark:text-[#009379]': $route.path === '/login',
        }"
        @click="closeMobileMenu"
      >
        Login
      </NuxtLink>
      <NuxtLink
        to="/signup"
        class="w-full py-1 text-base text-gray-800 hover:text-[#009379] dark:text-white dark:hover:text-[#009379]"
        :class="{
          'text-[#009379] dark:text-[#009379]': $route.path === '/signup',
        }"
        @click="closeMobileMenu"
      >
        Sign up
      </NuxtLink>
    </div>
  </header>

  <!-- REMOVED: Teleport block for JobSectorModal -->
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
// REMOVED: import JobSectorModal from '~/components/JobSectorModal.vue'; 

const emit = defineEmits(['update:modal-open']); // ADDED: Emit for parent state control

const isMobileMenuOpen = ref(false);
const isJobModalOpen = ref(false); // Used only for internal navigation logic

const colorMode = useColorMode(); 

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};


const openJobModal = () => {
  isJobModalOpen.value = true;
  emit('update:modal-open', true); // EMIT to open modal and blur background
};

const closeJobModal = () => {
  isJobModalOpen.value = false;
  emit('update:modal-open', false); // EMIT to close modal and remove blur
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const route = useRoute();
watch(route, () => {
  if (isMobileMenuOpen.value) {
    closeMobileMenu();
  }
 
  if (isJobModalOpen.value) {
    closeJobModal(); // Closes the modal and emits the close state
  }
});

// REMOVED: The watch for isJobModalOpen that managed document.body.style.overflow
</script>