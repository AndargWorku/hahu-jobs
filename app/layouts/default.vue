<template>
  <div class="flex flex-col min-h-screen bg-white/60 dark:bg-[#02201D]">
    <LayoutTheHeader @update:modal-open="isAppModalOpen = $event"/>
    
    <main 
    :class="{ 
        ' blur-3xl transition-filter duration-300 bg-black/0 dark:bg-black/0': isAppModalOpen 
      }"
    class="flex-grow pt-16">
    
      <slot />
    </main>
    <div>
       <Teleport to="body">
      <JobSectorModal v-if="isAppModalOpen" @close="isAppModalOpen = false" />
    </Teleport>
    </div>
    <LayoutTheFooter />
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'; 
import JobSectorModal from '~/components/JobSectorModal.vue'; 

const isAppModalOpen = ref(false); 

watch(isAppModalOpen, (isOpen) => {
    if (process.client) {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = ''; 
        }
    }
}, { immediate: false });
</script>