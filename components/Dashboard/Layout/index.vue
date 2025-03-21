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
            <li><nuxt-link href="#about-us" class="font-bold">About Us</nuxt-link></li>
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
        <li><nuxt-link href="#about-us" class="font-bold">About Us</nuxt-link></li>
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
         <div class="flex justify-center lg:items-center first-section">
            <div>
                <div class="bg-[url('/public/assets/bg-three.png')] bg-no-repeat bg-bottom bg-cover text-primary text-[10px] font-bold pasted-service">
                   The Most Pasted Delivery Service
                </div>

                <div class="text-xl w-2/3 mt-3 innovative">
                  Our Innovative platform connects customers
                  to local sellers, ensuring essential goods and services are just a few clicks away
                </div>

                <div class="mt-10 down-btns">
                    <NuxtLink to="#" class="bg-white-600 text-primary border-primary px-10 py-2 border border-primary rounded-md " >Login </NuxtLink>
                    <NuxtLink to="#" class="bg-white-600 bg-white text-primary border-primary px-10 py-2 border border-primary rounded-md" style="margin-left: -5px;">Sign Up </NuxtLink>
                    <NuxtLink to="#" class="bg-primary px-10 py-2 rounded-md  text-white font-bold ms-4">Partner with us</NuxtLink>
                </div>

            </div>
            <div>
                <img src="/public/assets/large-image.png" class="w-[720px] bike-img" alt="">
            </div>
            <div>
                <img src="/public/assets/Pasted image.png" class="w-[720px] bike-sml-img" alt="">
            </div>
         </div>
    </div>
    <div class="text-xl w-2/3 mt-3 innovative-sml">
                  Our Innovative platform connects customers
                  to local sellers, ensuring essential goods and services are just a few clicks away
                </div>
    <div class="mt-10 small-btns">
                    <NuxtLink to="/signup" class="bg-white-600 text-primary border-primary px-10 py-2 border border-primary rounded-md " >Login </NuxtLink>
                    <NuxtLink to="/signup" class="bg-white-600 bg-white text-primary border-primary px-10 py-2 border border-primary rounded-md" style="margin-left: -5px;">Login </NuxtLink> <br> <br>
                    <NuxtLink to="/login" class="bg-primary px-10 py-2 rounded-md  text-white font-bold last" style="margin-top:20px;">Partner with us</NuxtLink>
                </div>
    <!-- About Section -->
    <div class="container">
      <div class="flex justify-center mx-auto text-primary font-bold text-2xl mt-10" id="about-us">About Us</div>
      <div class="flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-10 mt-10">
        <!-- Mission Section -->
        <div class="flex flex-col items-center justify-center shadow-lg p-4 why">
          <div><img src="/public/assets/mission.png" class="w-12" alt="Mission Icon"></div>
          <div class="font-semibold mt-4">Our Mission</div>
          <div class="text-center mt-2">TO eliminate inefficiencies in delivery Service. By 
            combining technology with smooth customer support, we aim to deliver unique
            speed and reliability. Whether it's food, groceries, medications, or  package delivery, our platform is tailored to meet different customer needs.          </div>
        </div>

        <!-- Vision Section -->
        <div class="flex flex-col items-center justify-center shadow-lg p-4 why">
          <div><img src="/public/assets/vision.png" class="w-12" alt="Vision Icon"></div>
          <div class="font-semibold mt-4">Our Vision</div>
          <div class="text-center mt-2">TO become the leading provider of unify delivery solutions by the end of 2025, setting a new standard for convenience in the north.</div>
        </div>

        <!-- Why Us Section -->
        <div class="flex flex-col items-center justify-center shadow-lg p-4 why">
          <div><img src="/public/assets/why-us.png" class="w-12" alt="Why Choose Us Icon"></div>
          <div class="font-semibold mt-4">Why Choose Us</div>
          <div class="text-center mt-2">Real-Time Tracking: Stay updated on your deliveries from start to finis. 
            <br>
            User-Friendly Platform: easy navigation for effortless ordering. <br>
            Diverse Offerings: From meals to packages, we have you covered.
          </div>
        </div>
      </div>
    </div>

    <!-- our services -->
    <div class="container">
      <div class="flex justify-center mx-auto text-primary font-bold text-2xl mt-10" id="our-services">Our Services</div>
      <div class="flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-10 mt-10">
        <!-- Reception Food Service -->
        <div class="flex flex-col items-center justify-center shadow-lg p-4 services why">
          <div class="font-semibold mt-4">Reception Food</div>
          <div class="text-center mt-2">We specialize in providing delicious and diverse food options for receptions. Whether it's for a small gathering or a large event, our food will make your celebration memorable.</div>
        </div>

        <!-- Wedding Food Service -->
        <div class="flex flex-col items-center justify-center shadow-lg p-4 services why">
          <div class="font-semibold mt-4">Wedding Food</div>
          <div class="text-center mt-2">Make your special day even more unforgettable with our wedding catering services. From elegant appetizers to exquisite main courses, we ensure every bite is perfect for your big day.</div>
        </div>

        <!-- Normal Food Delivery Service -->
        <div class="flex flex-col items-center justify-center shadow-lg p-4 services why">
          <div class="font-semibold mt-4">Normal Food Delivery</div>
          <div class="text-center mt-2">Get your favorite meals delivered quickly to your door. Whether you're craving a quick snack or a full meal, we offer convenient and fast delivery to satisfy your hunger anytime, anywhere.</div>
        </div>
      </div>
    </div>


  

    <!-- Partner Section -->
    <div class="container justify-center items-center text-center py-10">
      <div class="text-primary font-bold text-2xl mb-4 mt-24">Partner With Us</div>
      <div class="max-w-7xl mx-auto px-4 text-center"> <!-- Apply text-justify here -->
        We're on the lookout for passionate vendors to join us in transforming the delivery business. Collaborative with FingerSnap Delivery to expand your customer base and grow your business effortelessly. Together, we can make essential services more accessible to thousands of customers.
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
<div class="mb-24"></div>
<!-- Footer -->
<!-- Footer -->
<div class="bg-primary border rounded-[25px] mt-10 z-50 bottom-body">
  <div class="flex flex-wrap justify-between">
    <!-- First Part: Image -->
    <div class="flex flex-col  mb-6 sm:mb-0">
      <img src="/public/assets/footer-logo.png" alt="Footer Logo" class="w-60  footer-image">
    </div>
    
    <!-- Second Part: About Us -->
    <div class="flex flex-col sm:items-start items-center mb-6 sm:mb-0 sm:w-1/4 ">
      <ul class="text-white font-bold text-xl space-y-2">
        <li><a href="#">About Us</a></li>
        <li>Our Services</li>
        <li>Partners</li>
        <li>Vendors</li>

      </ul>  
    </div>

    <!-- Third Part: Our Services -->
    <div class="flex flex-col sm:items-start items-center mb-6 sm:mb-0 sm:w-1/4">
      <ul class="text-white font-bold text-xl space-y-2">
        <li>Partner With Us</li>
        <li>Become a Vendor</li>
        <li>Terms & Conditions</li>

      </ul>
    </div>

    <!-- Fourth Part: Partners & Vendors -->
    <div class="flex  flex-col sm:items-start items-center sm:w-1/4 w-full">
      <h3 class="text-white font-semibold text-lg mb-2">Maiduguri Rd. Nassarawa <br> GRA, Kano State Nigeria</h3> <br>
      <ul class="text-white text-sm space-y-2">
        <li class="flex items-center spaxe-x-2">
          <img src="/public/assets/phone.png" class="w-8" alt=""> <span class="text-xl">08060414454</span>
        </li>
        <li class="flex items-center space-x-2"> 
          <img src="/public/assets/email.png" class="w-8" alt=""> <span class="text-xl">info@fingersnap.ng</span>
        </li>
      </ul>
    </div>
  </div>
  <div class="flex justify-center ">
    <img src="/public/assets/social-logo.png" class="bottom-image" alt="">
  </div>
</div>


<!-- footer small -->
<!-- 
<div class="bg-primary py-10">
  <div class="flex flex-wrap justify-between items-center mx-auto container">
    <div class="flex items-center space-x-10"> 
      <div>
        <img src="/public/assets/small-bottom-logo.png" alt="Footer Logo" class="w-24" />
      </div>
      
      <div>
        <ul class="text-white font-bold text-xl space-x-8 flex">
          <li><a href="#" class="hover:text-accent">About Us</a></li>
          <li><a href="#" class="hover:text-accent">Our Services</a></li>
          <li><a href="#" class="hover:text-accent">Partners</a></li>
          <li><a href="#" class="hover:text-accent">Vendors</a></li>
        </ul>
      </div>

      <div>
        <ul class="text-white font-bold text-xl space-x-8 flex">
          <li><a href="#" class="hover:text-accent">Partner With Us</a></li>
          <li><a href="#" class="hover:text-accent">Become a Vendor</a></li>
          <li><a href="#" class="hover:text-accent">Terms & Conditions</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="mt-10 text-white text-center md:text-left container mx-auto flex flex-wrap justify-between">
    <div>
      <h3 class="text-lg font-semibold mb-2">Maiduguri Rd. Nassarawa <br> GRA, Kano State Nigeria</h3>
      <div class="flex items-center space-x-2">
        <img src="/public/assets/phone.png" class="w-8" alt="">
        <span class="text-xl">08060414454</span>
      </div>
      <div class="flex items-center space-x-2 mt-2">
        <img src="/public/assets/email.png" class="w-8" alt="">
        <span class="text-xl">info@fingersnap.ng</span>
      </div>
    </div>
  </div>
</div> -->



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
.small-btns{
  display:none;
}
*,
*:before,
*:after {
  box-sizing: inherit; /* Ensures all elements respect box-sizing */
}
.innovative-sml{
  display:none;
}
.container {
  max-width: 1400px; /* Limits the width of content */
  margin: 0 auto; /* Centers the content */
  padding: 0 16px; /* Adds padding to avoid content touching edges */
}
.bike-sml-img{
  display:none;
}
.container-what{
  max-width: 1400px; /* Limits the width of content */
  margin: 0 auto; /* Centers the content */
  padding: 0 16px; /* Adds padding to avoid content touching edges */

}
.c-conatiner {
  max-width: 1400px; /* Limits the width of content */
  text-align: justify;
}
.why {
  box-shadow: 0 0 10px #e4e1e1;
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
.pasted-service {
    font-size: 70px;
    background-image: url("/public/assets/bg-three.png");
    background-position-x: left;
    background-size: 280px;
    background-repeat: no-repeat;
}
.first-section {
  background-image: url("/public/assets/background-image.png"), url("/public/assets/second-bg.png");
  background-position: center, top center;  /* First image covers the whole div, second image centered at the top */
  background-repeat: no-repeat;            /* No repetition for both images */
  background-size: cover, 20%;            /* First image covers the whole div, second image at 30% of its original size */
  min-height: 500px;
  margin-top:30px                       /* Ensure there's enough height to see the images */
}

.footer-image {
  max-width:300px;
  margin-right: 70px;

}
.footer-img-sml{
  display:none
}
.bottom-body{
  max-width: 1400px;
  margin: 0 auto;
  padding:50px
}
.bottom-image{
  width:120px;
}
.bottom-body-small{
  display:none;
}
/* For mobile navigation transitions */
@media (max-width: 640px) {
  .sm\\:hidden {
    display: block;
  }
  .pasted-service {
    font-size: 43px;
    background-image: url("/public/assets/bg-three.png");
    background-position-x: left ;
    background-size: 180px;
    background-repeat: no-repeat;
}
.innovative{
  display:none;
}
.innovative-sml{
  display:block;
  width:100%;
  margin-top: -170px;
  padding:10px;
}
  .bike-img {
   display:none;
  }
  .bike-sml-img{
  display:block;
  width: 700px;
}
  .sm\\:flex {
    display: none;
  }

  .sm\\:space-x-6 {
    display: none;
  }
  .down-btns{
    display:none;
  }
  .small-btns{
    display:block;
    margin-top: 5px;
    padding:10px;
    margin-right: 40px;
  }
  .small-btns .last{
    margin-top:15px
  }

  .footer-image{
    display:none;
  }
  .footer-img-sml{
  display:block;
  width:50px;
}
.bottom-body{
  display:none;
}
.bottom-body-small{
  display:block;
}
}
</style>
