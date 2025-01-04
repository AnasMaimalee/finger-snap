<template>
    <div class="lg:mx-[75px]">
      <!-- Header Section -->
      <header class="flex items-center justify-between px-6 py-4 bg-white">
        <!-- Logo on the left -->
        <div class="text-xl font-bold text-blue-600">
            <NuxtLink to="/">
                <img 
                    src="/public/assets/Pasted image (2).png" 
                    class="w-[104px] h-[37px] md:ml-[76px]" 
                    alt=""
                >
                
            </NuxtLink>

        </div>
  
       <!-- Navigation Links -->
        <nav class="text-center space-x-8 hidden md:flex">
            <NuxtLink to="/" class="text-lg text-dark">About Us</NuxtLink>
            
            <!-- "Our Services" link with dropdown -->
            <div class="relative inline-block hover:cursor-pointer">
                <div 
                class="text-lg text-dark flex items-center">
                <span>Our Services</span>
                <!-- Dropdown Icon (Arrow) -->
                <span class="material-icons text-sm">
                    <img src="/public/assets/drop-down.png" class="w-6" alt="">
                </span>
                </div>

                <!-- Dropdown Menu (hidden by default) -->
                <div class="dropdown-menu absolute left-0 hidden bg-white shadow-md rounded-lg mt-2 w-48">
                <NuxtLink 
                    to="/services/web-design" 
                    class="block text-gray-800 hover:bg-gray-200 px-4 py-2">Web Design</NuxtLink>
                <NuxtLink 
                    to="/services/app-development" 
                    class="block text-gray-800 hover:bg-gray-200 px-4 py-2">App Development</NuxtLink>
                <NuxtLink 
                    to="/services/seo" 
                    class="block text-gray-800 hover:bg-gray-200 px-4 py-2">SEO</NuxtLink>
                </div>
            </div>

            <NuxtLink to="/contact" class="text-lg text-dark">Partnership</NuxtLink>
        </nav>

  
        <!-- Sign Up and Login Buttons -->
        <div class="hidden md:flex space-x-3">
          <NuxtLink to="/signup" class="bg-white-600 text-dark border-primary px-6 py-2 rounded-md">Partner with us</NuxtLink>
          <NuxtLink to="/signup" class="bg-white-600 text-primary border-primary px-10 py-2 border border-primary rounded-md">Login </NuxtLink>
          <NuxtLink to="/login" class="bg-primary px-10 py-2 rounded-md  text-white font-bold">Sign up</NuxtLink>
        </div>

        <div class="md:hidden">
            <img src="/public/assets/toggle.png" class="w-[28px]" alt="">
        </div>
      </header>

      <!-- main -->
      <div class="bg-[url('/public/assets/background-image.png')] bg-cover bg-center lg:mx-[50px]">
         <div class="flex justify-center items-center">
            <div>
                <div class="bg-[url('/public/assets/bg-three.png')] bg-no-repeat bg-bottom bg-cover text-primary text-[10px] font-bold">
                    <img src="/public/assets/the-most-food.png" alt="">
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


      <main>
        <slot />
      </main>
    </div>
  </template>
 
  