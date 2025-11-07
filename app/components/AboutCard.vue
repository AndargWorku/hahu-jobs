<template>
  <div class="bg-gray-100 dark:bg-[#02201D] min-h-screen">
    <!-- MODIFICATION: Reduced padding for mobile (px-4/py-12), scaling up for larger screens -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16">
      
      <!-- Grid structure is already mobile-friendly (stacks columns by default) -->
      <section class="grid md:grid-cols-2 gap-12 items-center mb-24 group">
        <div>
          <h2 class="text-4xl font-extrabold text-gray-900 mb-6 dark:text-white">
            What makes us <br />
            standout from the rest
          </h2>
          <p class="text-gray-700  font-semibold leading-relaxed mb-4 dark:text-white">
            HaHuJobs Primary services are deployments targeting the needs of the
            Ethiopian jobseeker, with both citizens and non-nationals the
            platform is a tool intended to ease the process of looking for a job
            at all levels of employment. It facilitates vacancy aggregation and
            posting from various sources as well as enterprises, public career
            profiles, apply for jobs, and subscribe to customized jobs by email,
            text, or channel of their choice. HaHuJobs primarily also offers
            standardized classification of all vacancies both sourced from
            HaHuJobs enterprise services and other manual and digital vacancy
            platforms.
          </p>
          <p class="text-gray-700 font-semibold leading-relaxed mb-8 dark:text-white">
            Our vacancy classification follows a combination of ISCO 08, ISIC
            and the Ethiopian occupation classification with modifications as
            the Ethiopian labor market. Each vacancy will be given a four-digit
            occupation taxonomy identification code as it determines its overall
            content requirements in terms of skills, knowledge, ability, and
            expected activities.
          </p>

          <p class="text-gray-800 font-semibold mb-4">Get Social with us!</p>
          <button
            class="bg-[#009379] text-white py-2 px-5 rounded-lg shadow-md hover:bg-teal-400 hover:text-gray-500 transition duration-300 ease-in-out mb-6"
          >
            Explorer more
            <span class="ml-2 inline-block">→</span>
          </button>
          <div class="flex space-x-4">
            <div
              class="w-4 h-4 bg-[#009379] text-white rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
            >
              <Icon name="ei:sc-telegram" class="w-3 h-3" />
            </div>
            <div
              class="w-4 h-4 bg-[#009379] rounded-full flex items-center justify-center text-white transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
            >
              <Icon name="mdi:facebook" class="w-3 h-3" />
            </div>
            <div
              class="w-4 h-4 bg-[#009379] rounded-full flex items-center justify-center text-white transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
            >
              <Icon name="arcticons:x-twitter" class="w-3 h-3" />
            </div>
            <div
              class="w-4 h-4 bg-[#009379] rounded-full flex items-center justify-center text-white transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
            >
              <Icon name="mdi:linkedin" class="w-3 h-3" />
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center order-first md:order-none">
          <!-- Image classes (w-3/4 max-w-sm) are relative and will fit the mobile width container -->
          <img
            src="/assets/images/hahu_robot.svg"
            alt="Robot on a podium representing achievement"
            class="w-3/4 max-w-sm h-auto object-contain transition duration-300 ease-in-out group-hover:scale-125"
          />
        </div>
      </section>

     
      <section class="grid md:grid-cols-2 gap-12 items-start pt-16 group">
        <div class="flex justify-center items-center p-8">
          <!-- Image classes (w-5/6 max-w-xs) are relative and will fit the mobile width container -->
          <img
            src="/assets/images/keyboard.svg"
            alt="Stylized keyboard representing digital services"
            class=" w-5/6 max-w-xs h-auto object-contain transition duration-300 ease-in-out group-hover:scale-x-125"
          />
        </div>

        <div>
          <h2 class="text-4xl font-extrabold text-gray-900 mb-8 dark:text-white">
            Why choose us
          </h2>

          <div class="mb-8">
            <h3 class="text-2xl font-bold text-[#009379] mb-2">Convenience</h3>
            <p class="text-[#009379] font-bold  mb-2 dark:text-white">
              You no longer look for jobs, jobs look for you
            </p>
            <p class=" font-semibold leading-relaxed dark:text-white">
              We offer aggregated, standardized and quality assured vacancy and
              career-related information from various digital as well as manual
              sources to sort them into one searchable database.
            </p>
          </div>

          <div class="mb-8">
            <h3 class="text-2xl font-bold text-[#009379] mb-2">Accessibility</h3>
            <p class="text-[#009379] font-bold mb-2 dark:text-white">
              Reachable across multiple channels and platforms
            </p>
            <p class=" font-semibold leading-relaxed dark:text-white">
              Use your mobile, tablet, or desktop to access our website, mobile
              app, Telegram, or Facebook bots and also get personalized job
              alerts via your designated medium.
            </p>
          </div>

          <div class="mb-8">
            <h3 class="text-2xl font-bold text-[#009379] mb-2">Ease of Use</h3>
            <p class="text-[#009379] font-bold  mb-2 dark:text-white">
              Both online and offline service options.
            </p>
            <p class=" font-semibold leading-relaxed dark:text-white">
              HaHuJobs offers both in-person as well as virtual modalities for
              all its career-related service components through its employment
              offices across the nation and in Addis Ababa.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.bg-teal-500 {
  background-color: #00b1af;
}
.text-teal-600 {
  color: #00b1af;
}
.bg-teal-200 {
  background-color: #d4f4f4;
}
.text-teal-700 {
  color: #008c8a;
}

body {
  margin: 0;
  padding: 0;
}
</style>