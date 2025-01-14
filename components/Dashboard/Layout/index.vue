<template>
  <div>
    <!-- Navbar -->
    <header class="z-50 w-full mt-5">
      <div class="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
        <!-- Logo on the left -->
        <img
          :preview="false"
          style="width: 150px; height: 35px"
          src="/public/assets/logo.png"
          :alt="appName" />

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex justify-center flex-1">
          <ul class="flex list-none space-x-6 items-center">
            <li><nuxt-link href="#services" class="font-bold">About Us</nuxt-link></li>
            <li><nuxt-link href="#why-us" class="font-bold">Our Service</nuxt-link></li>
            <li><nuxt-link href="#contact" class="font-bold">PartnerShip</nuxt-link></li>
          </ul>
        </nav>

        <!-- Right side buttons (Log in / Sign Up) -->
        <div class="hidden lg:flex space-x-4">
          <ul class="flex list-none space-x-6 items-center">
            <li><nuxt-link href="#contact" class="font-bold">Partner with us</nuxt-link></li>
            <li><nuxt-link href="/" class="bg-brand border border-primary rounded-md px-4 py-2 font-bold text-primary shadow-sm transition">
            Log In
          </nuxt-link></li>
          <li><nuxt-link href="/" class="bg-primary rounded-md px-4 py-2 font-bold text-white shadow-sm transition">
            Sign Up
          </nuxt-link></li>
          </ul>
        </div>

        <!-- Mobile Hamburger Icon -->
        <button class="lg:hidden text-gray-800" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
      </div>
    </header>

    <!-- Mobile Navigation (Initially Hidden) -->
    <div :class="{'block': menuOpen, 'hidden': !menuOpen}" class="lg:hidden bg-white shadow-lg">
      <ul class="flex flex-col items-end space-y-6 py-4 me-4">
        <li><nuxt-link href="#services" class="font-bold">About Us</nuxt-link></li>
        <li><nuxt-link href="#why-us" class="font-bold">Our Service</nuxt-link></li>
        <li><nuxt-link href="#contact" class="font-bold">PartnerShip</nuxt-link></li>
        <li><nuxt-link href="#contact" class="font-bold">Partner with us</nuxt-link></li>
        <li>
          <nuxt-link href="/" class="bg-brand border border-primary rounded-md px-4 py-2 font-bold text-primary shadow-sm transition">
            Log In
          </nuxt-link>
        </li>
        <li>
          <nuxt-link href="/" class="bg-primary rounded-md px-4 py-2 font-bold text-white shadow-sm transition">
            Sign Up
          </nuxt-link>
        </li>
      </ul>
    </div>
    <!-- main -->
    <div class="container">
         <div class="flex justify-center items-center">
            <div>
                <div class="bg-[url('/public/assets/bg-three.png')] bg-no-repeat bg-bottom bg-cover text-primary text-[10px] font-bold pasted-service">
                   The Most Pasted Delivery Service
                </div>

                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sequi architecto commodi reiciendis porro neque eius molestiae praesentium dolor ab!
                </div>

                <div class="spaxe-x-3 mt-10">
                    <NuxtLink to="/signup" class="bg-white-600 text-primary border-primary px-10 py-2 border border-primary rounded-md" >Login </NuxtLink>
                    <NuxtLink to="/signup" class="bg-white-600 bg-white text-primary border-primary px-10 py-2 border border-primary rounded-md me-4">Login </NuxtLink>
                    <NuxtLink to="/login" class="bg-primary px-10 py-2 rounded-md  text-white font-bold ">Partner with us</NuxtLink>
                </div>

            </div>
            <div>
                <img src="/public/assets/large-image.png" class="w-[720px]" alt="">
            </div>
         </div>
      </div>
    <!-- About Section -->
    <div class="container">
      <div class="flex justify-center mx-auto text-primary font-bold text-2xl mt-10">About Us</div>
      <div class="flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-10 mt-10">
        <!-- Mission Section -->
        <div class="flex flex-col items-center justify-center shadow-lg p-4">
          <div><img src="/public/assets/mission.png" class="w-12" alt="Mission Icon"></div>
          <div class="font-semibold mt-4">Our Mission</div>
          <div class="text-center mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ipsam, quisquam sequi ipsum ex vero officiis quis.</div>
        </div>

        <!-- Vision Section -->
        <div class="flex flex-col items-center justify-center shadow-lg p-4">
          <div><img src="/public/assets/vision.png" class="w-12" alt="Vision Icon"></div>
          <div class="font-semibold mt-4">Our Vision</div>
          <div class="text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus alias voluptates, corporis reiciendis dolor, voluptate enim.</div>
        </div>

        <!-- Why Us Section -->
        <div class="flex flex-col items-center justify-center shadow-lg p-4">
          <div><img src="/public/assets/why-us.png" class="w-12" alt="Why Choose Us Icon"></div>
          <div class="font-semibold mt-4">Why Choose Us</div>
          <div class="text-center mt-2">Real-Time Tracking: Stay updated on your deliveries from start to finish. Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
      </div>
    </div>

    <!-- Partner Section -->
    <div class="container justify-center items-center text-center py-10">
      <div class="text-primary font-bold text-2xl mb-4 mt-24">Partner With Us</div>
      <div class="max-w-7xl mx-auto px-4 text-center"> <!-- Apply text-justify here -->
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis deserunt officia tempora dignissimos cum accusantium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae veniam a qui? Esse iusto eum praesentium perspiciatis obcaecati mollitia illum omnis doloremque, laborum fugit officia ullam in aut quasi tenetur! Dolore, eum fugiat perferendis, id consequatur ipsam praesentium animi quidem impedit magnam molestiae placeat?
      </div>
      <div class="text-lg mt-4">
        <div class="text-gray-600 font-bold">Contact Us Today to explore partnership opportunities:</div>
        <div>Email: info@fingersnap.ng</div>
        <div>Phone: 08060414454</div>
      </div>
    </div>


   <!-- Stay Tuned Section -->
   <div class="container  justify-center items-center text-center py-10">
      <div class="text-primary font-bold text-2xl mb-4 mt-24">Stay Tuned</div>
      <div class="max-w-2xl mx-auto text-center px-4 mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, iure hic, nobis laborum, voluptates beatae corporis eius ipsum explicabo quis labore?
      </div>
      <div>Follow us on [social media links] to stay updated.</div>
   </div> 

    <!-- Footer -->
    <div class="container bg-primary p-16 border rounded-[25px] mt-10 z-50">
      <div>
        <img src="/public/assets/footer-logo.png" alt="Footer Logo" />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRuntimeConfig } from '#app';

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const config = useRuntimeConfig().public;
const appName = computed(() => config.APP_NAME);
const appDesc = computed(() => config.APP_DESC);
const brandPrimaryColor = computed(() => config.BRAND_PRIMARY_COLOR);

const aboutUs = [
  {
    icon: 'https://static.thenounproject.com/png/3377066-200.png',
    title: 'Affordable Prices',
    description: 'We offer the best rates in the market.',
  },
];
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit; /* Ensures all elements respect box-sizing */
}

.container {
  max-width: 1400px; /* Limits the width of content */
  margin: 0 auto; /* Centers the content */
  padding: 0 16px; /* Adds padding to avoid content touching edges */
}

.c-conatiner {
  max-width: 1400px; /* Limits the width of content */
  text-align: justify;
}

img {
  max-width: 100%; /* Prevents images from overflowing */
  height: auto; /* Maintains aspect ratio */
}

.hero h1 {
  word-wrap: break-word; /* Ensures long text wraps properly */
}

.text-justify {
  text-align: justify;
  line-height: 1.6; /* Optional: For better line spacing */
}

/* For mobile navigation transitions */
@media (max-width: 640px) {
  .sm\\:hidden {
    display: block;
  }

  .sm\\:flex {
    display: none;
  }

  .sm\\:space-x-6 {
    display: none;
  }
}
</style>
