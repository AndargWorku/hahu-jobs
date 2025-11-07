<template>
  <div
    class=" bg-white min-h-screen py-10 px-4 md:px-20 cursor-pointer dark:bg-[#1B2637]"
  >
   
    <div class="mx-auto max-w-7xl lg:px-32 xl:px-48">
      <h2
        class="text-3xl font-bold text-gray-800 mb-8 text-center dark:text-white"
      >
        News & Events
      </h2>

      
      <div
        ref="cardsContainer"
        class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-6 pb-4 md:mx-0 md:px-0"
        style="-ms-overflow-style: none; scrollbar-width: none"
        :class="[
          
          'pl-[5vw] pr-[5vw] -mx-4',
          '[&::-webkit-scrollbar]:hidden',
        ]"
        @scroll="handleScroll"
      >
    
        <div
          v-for="(card, index) in allCards"
          :key="card.id"
          class="flex-shrink-0 snap-center rounded-lg shadow-md overflow-hidden border-2 border-white hover:border-2 hover:border-[#009379] bg-white dark:bg-[#1B2637] dark:text-white dark:border"
          :class="[
            
            'w-[95vw]', 

            
            'md:w-[calc((100%-3*1.5rem)/3.25)]',
          ]"
        >
          <img
            :src="card.image"
            :alt="card.title + ' thumbnail'"
            class="w-full h-auto object-cover"
          />
          <div class="p-6 dark:text-white">
            <span
              :class="[
                'inline-block text-xs bg-teal-400 px-3 py-1 rounded-full mb-3',
              ]"
              >{{ card.tag }}</span
            >
            <p class="text-gray-500 text-xs font-bold mb-2">{{ card.date }}</p>
            <h3 class="font-bold text-sm text-gray-800 mb-2 dark:text-white">
              {{ card.title }}
            </h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-4 dark:text-white">
              {{ card.description }}
            </p>
            <div class="flex justify-center">
              <button
                href="#"
                class="inline-flex items-center mx hover:text-black justify-center text-white h-10 w-28 rounded-lg bg-teal-700 hover:bg-teal-200 font-semibold text-sm"
              >
                Read Post
                <svg
                  class="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <div
        v-if="paginationPoints.length > 1"
        class="flex justify-center mt-8 space-x-2"
      >
        <button
          v-for="pos in paginationPoints"
          :key="pos"
          @click="goToCard(pos)"
          :class="[
            'w-2 h-0.5 transition-colors',
            currentScrollIndex === pos ? 'bg-teal-700' : 'bg-gray-400',
          ]"
        ></button>
      </div>

    
      <div class="mt-8 flex justify-center">
        <button
          href="https://www.hahujobs.io/blogs/#all"
          target="_blank"
          class="reactiveButton mx-auto flex items-center bg-teal-700 hover:text-black text-white font-semibold py-2 px-5 rounded-lg shadow hover:bg-teal-200 transition-colors"
        >
          More blogs
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            class="ml-2 w-4 h-4 md:w-5 md:h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";


const allCards = ref([
  {
    id: 1,
    tag: "HahuJobs News",
    date: "Oct 2025",
    title:
      "Where Ethiopia Works: A Look at the Nation's Top Employing Sectors and Published Job Positions",
    description:
      "Understanding a country's job market requires a clear and accurate classification or categorization scheme. Globally, the standard is often set by skill-based frameworks...",
    image: "/assets/images/n1.jpeg",
  },
  {
    id: 2,
    tag: "Events & Lectures",
    date: "26 Sep 2025",
    title: "AI Workshop Hackathon: Learn Build Connect - Session 4",
    description:
      "ALX's Lefela Capstone Hub was already buzzing by mid-morning on 22 September when professionals, university students and a handful of high-schoolers settled in...",
    image: "/assets/images/n2.jpeg",
  },
  {
    id: 3,
    tag: "STEEP News",
    date: "5 Sep 2025",
    title: "STEEP-Summer Program Conclusion",
    description:
      "The 2025 Summer School Program, which was being conducted by the STEEP project in collaboration with 10 government high schools, has been officially concluded...",
    image: "/assets/images/n3.jpeg",
  },
  {
    id: 4,
    tag: "HahuJobs News",
    date: "Sept 2025",
    title: "Entry-Level Internship",
    description:
      "Entry-level internships offers a crucial stepping stone for individuals eager to gain practical experience and kickstart their careers.",
    image: "/assets/images/n4.png",
  },
  {
    id: 5,
    tag: "Community",
    date: "Aug 2025",
    title: "Volunteering for a Cause",
    description:
      "Joining a volunteering initiative is a fantastic way to give back to the community and develop new skills.",
    image: "/assets/images/n5.jpeg",
  },
  {
    id: 6,
    tag: "Extra",
    date: "July 2025",
    title: "Sixth Card for Carousel Test",
    description: "This is an extra card to ensure the carousel functionality works correctly with more items.",
    image: "/assets/images/n5.jpeg",
  },
  {
    id: 7,
    tag: "Extra",
    date: "June 2025",
    title: "Seventh Card Test",
    description: "This is another extra card for more robust testing of the scroll points.",
    image: "/assets/images/n4.png",
  },
]);


const cardsContainer = ref(null);
const currentScrollIndex = ref(0); 
const isMobile = ref(false); 


const handleResize = () => {
 
  isMobile.value = window.innerWidth < 768;

  
  const maxIndex = paginationPoints.value.length - 1;
  if (currentScrollIndex.value > maxIndex) {
    currentScrollIndex.value = maxIndex >= 0 ? maxIndex : 0;
  }
};


const paginationPoints = computed(() => {
  const totalCards = allCards.value.length;
  

  const cardsVisibleForLimit = isMobile.value ? 1 : 3;

  const points = [];
  
 
  const limit = totalCards - cardsVisibleForLimit + 1;

  for (let i = 0; i < limit; i++) {
    points.push(i);
  }

  
  if (totalCards > 0 && points.length === 0) {
    points.push(0);
  }

  return points;
});


const goToCard = (index) => {
  const container = cardsContainer.value;
  if (!container || index >= allCards.value.length) return;

  const cardElements = Array.from(container.children);
  const targetCard = cardElements[index];

  if (targetCard) {
    
    container.scrollTo({
      left: targetCard.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });
    currentScrollIndex.value = index;
  }
};


const handleScroll = () => {
  if (!cardsContainer.value) return;

  const scrollLeft = cardsContainer.value.scrollLeft;
  const cardElements = Array.from(cardsContainer.value.children);

  
  const containerCenter = scrollLeft + cardsContainer.value.clientWidth / 2;

  for (let i = 0; i < cardElements.length; i++) {
    const cardCenter = cardElements[i].offsetLeft + cardElements[i].offsetWidth / 2;
    
    
    if (Math.abs(cardCenter - containerCenter) < cardElements[i].offsetWidth / 2) {
     
      if (paginationPoints.value.includes(i)) {
        currentScrollIndex.value = i;
      }
      break;
    }
  }
};


onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>