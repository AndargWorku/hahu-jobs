<template>
    <div 
        class="fixed inset-0  bg-opacity-70 bg-black/50 -mt-2 flex items-start justify-center p-4 sm:pt-10"
         :class="{ 'z-40': true }" 
        @click.self="handleClose"
    >
        <div class="bg-white rounded-md w-full max-w-11/12 h-auto max-h-[90vh] 
        overflow-y-auto transform transition-all duration-300 scale-100">
            <div class="px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 font-sans">
                
                <header class="flex justify-between items-center
                  top-[-1rem] sm:top-[-2rem] bg-white z-10  sm:py-4 -mx-4 md:-mx-4 lg:-mx-8 px-2
                  md:px-6 lg:px-8 mb-6"> <!-- ADDED: mb-6 (margin-bottom: 1.5rem/24px) -->
                    <div class="flex items-center space-x-4">
                        <button aria-label="Close" class="text-gray-400 hover:bg-[#E6F5F3]  rounded-sm" @click="handleClose">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h1 class="text-lg font-semibold text-gray-800">Jobs by sector</h1>
                    </div>
                    
                    <NuxtLink to="/view-all" class="flex items-center space-x-2 bg-white
                     text-teal-500 border border-[#009688] px-1 py-2 
                     rounded-md font-medium  hover:bg-[#009688]  hover:text-white ">
                        <span>View All</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </NuxtLink>
                </header>
                
                
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-2">
                    
                    
                    <NuxtLink 
                        v-for="sector in cardsToShow" 
                        :key="sector.id" 
                        :to="`/jobs/${sector.id}`"
                        :class="[
                            'group rounded-md p-5 border cursor-pointer bg-[#F1F1F1] border-gray-100 hover:bg-[#E6F5F3]  transition-all duration-200 block text-decoration-none relative',
                           
                        ]"
                    >
                        
                        <div class="flex items-center justify-between "> 
                             
                                <div 
                                    :class="[
                                        'flex-shrink-0 w-8 h-8 flex items-center  rounded-lg',
                                        'bg-[#E6F5F3] text-teal-600'
                                    ]"
                                >
                                <img
                                  :src="sector.imageUrl"
                                  alt="placeholder"
                                   class="sector-image object-contain w-5 h-5"
            />
                                  
                                </div>
                            
                            
                            <div class="flex items-start space-x-2 min-w-0 flex-grow">
                                
                               
                                
                               
                                <div class="min-w-0">
                                    <div class="flex items-baseline space-x-2"> 
                                      
                                        <h3 class="text-base font-semibold text-gray-800 flex-shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">
                                            {{ sector.name }}
                                        </h3>
                                        
                                        
                                        <div 
                                            class="text-xs font-bold rounded-full px-2 py-0.5 flex-shrink-0"
                                            :class="sector.count > 0 ? 'bg-teal-200 text-teal-800' : 'bg-gray-200 text-gray-600'" 
                                        >
                                            {{ sector.count }}
                                        </div>
                                    </div>
                                    
                                    
                                    <p class="mt-1 text-sm text-gray-500 line-clamp-2">
                                        {{ sector.description }}
                                    </p>
                                </div>
                            </div>

                            
                            <div class="flex-shrink-0">
                                <div 
                                    class="text-teal-500 transition-opacity transform duration-200 flex items-center justify-center"
                                    :class="{
                                        'opacity-0 group-hover:opacity-100 group-hover:translate-x-1': !sector.arrow, 
                                        'opacity-100 translate-x-1': sector.arrow 
                                    }"
                                    aria-hidden="true"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        

                    </NuxtLink>
                   
                    <div 
                        class="relative min-h-[250px] col-span-full xl:col-span-1" 
                        :class="{
                            'xl:row-span-2': cardsToShow.length > 11,
                            'hidden xl:block': cardsToShow.length > 11
                        }"
                        style="grid-column: 4; grid-row: 3 / 5;"
                    >
                        <div class="absolute bottom-0 right-0 w-full h-full flex flex-col items-end justify-end p-4">
                            <div class="w-full h-full flex items-center justify-center text-gray-500 text-center relative">
                                <div class="w-full h-full bg-contain bg-no-repeat bg-center" style="background-image: url('/path/to/your/robot-mascot.png');">
                                </div>
                                <div class="absolute inset-0 flex items-center justify-center text-xs text-gray-300">
                                    <img src="/assets/images/mascot-half.svg" alt="">
                                </div>
                            </div>
                            <p class="text-xs text-gray-400 mt-2">Powered by <span class="font-semibold text-teal-600">Hahu Jobs</span></p>
                        </div>
                    </div>

                     <!-- Mobile/Small Screen Robot Placeholder -->
                     <div class="col-span-full relative min-h-[250px] xl:hidden">
                        <div class="absolute bottom-0 right-0 w-full h-full flex flex-col items-center justify-end">
                            <div class="w-full h-full flex items-center justify-center text-gray-500 text-center relative">
                               
                                <div class="w-full h-full bg-contain bg-no-repeat bg-center" style="background-image: url('/path/to/your/robot-mascot.png');">
                                </div>
                                <div class="absolute inset-0 flex items-center justify-center text-xs text-gray-300">
                               <img src="/assets/images/mascot-half.svg" alt="">
                                </div>
                            </div>
                            <p class="text-xs text-gray-400 mt-2">Powered by <span class="font-semibold text-teal-600">Hahu Jobs</span></p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineEmits, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['close']); // Emits the close event
const handleClose = () => {
    emit('close');
};


const handleKeydown = (e) => {
    if (e.key === 'Escape') {
        handleClose();
    }
};

onMounted(() => {
    document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown);
});


const jobsBySector = [
 
  { id: 1, name: 'Natural Science', count: 28,
   description: 'Natural science concerned with the description, prediction, and unde...', promoted: true, 
    imageUrl: "/assets/images/natural-science.svg",
  },
  { id: 2, name: 'Hospitality', count: 30, description: 'Operations of hotels, restaurants, cruise ships, amusement parks, de...',
    imageUrl: "/assets/images/hospitality.svg",
     },
  { id: 3, name: 'Finance', count: 194, description: 'General management principles to financial resources of the enterpri...', promoted: true,
    imageUrl: "/assets/images/finance.svg",
   },
  { id: 4, name: 'Manufacturing', count: 0, description: 'Manufacturing is a production sector for all products. This sector c...', 
    imageUrl: "/assets/images/manufacturing.svg",
   },
  
 
  { id: 5, name: 'Business', count: 350, description: 'Aspects of overseeing and supervising business operations. Business ...', promoted: true,
    imageUrl: "/assets/images/business.svg",
    },
  { id: 6, name: 'Low and Medium Skilled...', count: 94, description: 'Does not require completing a college degree or specialized training...',
    imageUrl: "/assets/images/low-and-medium-skilled-work.svg",
    },
  { id: 7, name: 'Legal Services', count: 13,
   description: 'services involving legal or law related matters like issue of legal ...', promoted: true, 
    imageUrl: "/assets/images/legal-service.svg",
    },
  { id: 8, name: 'Social Science', count: 30, description: 'Social science focus on the study of society and the relationship am...',
    imageUrl: "/assets/images/social-science.svg",
   },
  
  
  { id: 9, name: 'Creative Arts', count: 24, description: 'Human creative skill and imagination, typically in a visual form suc...', 
    imageUrl: "/assets/images/creative-art.svg",
   },
  { id: 10, name: 'Transportation & Logistics', count: 40, description: 'Involves both internal and external distribution networks which incl...', 
    imageUrl: "/assets/images/transport-and-logistics.svg",
  },
  { id: 11, name: 'ICT', count: 49, description: 'ICT sector professionals conduct research, plan, design, support ana...', promoted: true, 
    imageUrl: "/assets/images/ict.svg",
  },
  
  
  { id: 12, name: 'Health Care', count: 78, description: 'Health care enhance quality of life by enhancing health promotion, d...',
    imageUrl: "/assets/images/health-care.svg",
   },
  { id: 13, name: 'Education', count: 41, description: 'Education is about teaching, learning skills and knowledge. The Educ...', 
    imageUrl: "/assets/images/education.svg",
   },
  { id: 14, name: 'Engineering', count: 169, description: 'Engineering sector is a career that brings together the technologica...', 
    imageUrl: "/assets/images/engineering.svg",
   },
];

const cardsToShow = jobsBySector;
</script>