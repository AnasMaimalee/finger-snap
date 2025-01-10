<template>
  <div>
    <!-- Navbar -->
    <header class="fixed z-50 w-full mt-5">
      <div class="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
        <img
          :preview="false"
          style="width: 150px; height: 35px"
          src="/public/assets/logo.png"
          :alt="appName" />
        <nav>
          <button
            class="block text-gray-800 sm:hidden"
            @click="toggleMenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul
            class="list-none space-x-4 sm:flex items-center"
            :class="{ hidden: !menuOpen, block: menuOpen, 'absolute left-0 top-16 w-full bg-gray-200': menuOpen }">
            <li class="py-2 sm:static sm:py-0">
              <nuxt-link
                href="#services"
                class="block font-bold"
                >About Us</nuxt-link
              >
            </li>
            <li class="py-2 sm:static sm:py-0">
              <nuxt-link
                href="#why-us"
                class="block font-bold "
                >Our Service</nuxt-link
              >
            </li>
            <li class="py-2 sm:static sm:py-0">
              <nuxt-link
                href="#contact"
                class="block font-bold"
                >PartnerShip</nuxt-link
              >
            </li>


            <li class="py-2 sm:static sm:py-0">
              <nuxt-link
                href="#contact"
                class="block font-bold"
                >Partner with us</nuxt-link
              >
            </li>
            <li class="sm:grid md:flex py-2 sm:static sm:py-0 space-x-5 ">
              <nuxt-link
                href="/"
                class="bg-brand border border-primary rounded-md px-4 py-2 font-bold text-primary shadow-sm transition ">
                Log In
              </nuxt-link>
              <nuxt-link
                href="/"
                class="bg-primary rounded-md px-4 py-2 font-bold text-white  shadow-sm transition ">
                Sign Up
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

   

    <!-- Why Us Section -->
    <section
      id="why-us"
      class="bg-white py-20">
      <div class="container mx-auto text-center">
        <h3 class="mb-8 text-3xl font-bold">Why Choose Us</h3>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div
            v-for="(about, index) in aboutUs"
            :key="index"
            class="flex items-center space-x-4">
            <div>
              <img
                :src="about.icon"
                alt="reason-icon"
                class="h-12 w-12" />
            </div>
            <div>
              <h4 class="text-xl font-bold">{{ about.title }}</h4>
              <p class="text-gray-600">{{ about.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 px-4 py-6 text-white sm:px-6">
      <div class="container mx-auto text-center">
        <p>&copy; {{ new Date().getFullYear() }} {{ appName }}. All rights reserved.</p>
        <div class="mt-4 flex justify-center gap-4">
          <nuxt-link
            href="/register"
            class="hover:underline"
            >Register</nuxt-link
          >
          <nuxt-link
            href="/login"
            class="hover:underline"
            >Login</nuxt-link
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRuntimeConfig } from '#app';

const menuOpen = ref(false);
const toggleMenu = () => (menuOpen.value = !menuOpen.value);

const config = useRuntimeConfig().public;
const appName = computed(() => config.APP_NAME);
const appDesc = computed(() => config.APP_DESC);
const brandPrimaryColor = computed(() => config.BRAND_PRIMARY_COLOR);


const services = [
  {
    name: 'Data',
    icon: 'https://static.thenounproject.com/png/1639307-200.png',
    description: 'Buy affordable mobile data plans.',
  },
  {
    name: 'Airtime',
    icon: 'https://static.thenounproject.com/png/42525-200.png',
    description: 'Recharge your mobile instantly.',
  },
  {
    name: 'Cable Subscriptions',
    icon: 'https://static.thenounproject.com/png/3764360-200.png',
    description: 'Pay for your cable TV services.',
  },
  {
    name: 'Electricity Units',
    icon: 'https://static.thenounproject.com/png/2460224-200.png',
    description: 'Purchase electricity tokens effortlessly.',
  },
  {
    name: 'WAEC Pin',
    icon: 'https://static.thenounproject.com/png/3669378-200.png',
    description: 'Get your WAEC scratch cards.',
  },
  {
    name: 'NECO Pin',
    icon: 'https://static.thenounproject.com/png/1946415-200.png',
    description: 'Buy NECO scratch cards.',
  },
  {
    name: 'NIN Verifications',
    icon: 'https://static.thenounproject.com/png/1609967-200.png',
    description: 'Verify your NIN with ease.',
  },
  {
    name: 'BVN Verifications',
    icon: 'https://static.thenounproject.com/png/1654505-200.png',
    description: 'Secure BVN verification services.',
  },
  {
    name: "JAMB O'Level Upload",
    icon: 'https://static.thenounproject.com/png/1812879-200.png',
    description: "Easily upload your O'Level results.",
  },
  {
    name: 'JAMB Admission Letters',
    icon: 'https://static.thenounproject.com/png/2834262-200.png',
    description: 'Get your JAMB admission letters.',
  },
  {
    name: 'NIN Verifications',
    icon: 'https://static.thenounproject.com/png/2834264-200.png',
    description: 'Verify your NIN with ease.',
  },
  {
    name: 'BVN Verifications',
    icon: 'https://static.thenounproject.com/png/2834266-200.png',
    description: 'Secure BVN verification services.',
  },
  {
    name: 'Newspaper Change of Name',
    icon: 'https://static.thenounproject.com/png/2834268-200.png',
    description: 'Easily process newspaper name changes.',
  },
];

const aboutUs = [
  
  {
    icon: 'https://static.thenounproject.com/png/3377066-200.png',
    title: 'Affordable Prices',
    description: 'We offer the best rates in the market.',
  },
];
</script>

<style scoped>
html,
body {
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
  max-width: 1200px; /* Limits the width of content */
  margin: 0 auto; /* Centers the content */
  padding: 0 16px; /* Adds padding to avoid content touching edges */
}

img {
  max-width: 100%; /* Prevents images from overflowing */
  height: auto; /* Maintains aspect ratio */
}

.hero h1 {
  word-wrap: break-word; /* Ensures long text wraps properly */
}
</style>
