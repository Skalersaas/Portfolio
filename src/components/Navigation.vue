<template>
    <div class="bg-[#f8f7f3] text-[#2d2a28] mt-4">
      <nav class="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div v-for="(content, index) in buttons" :key="index">
          <button
            class="transition duration-300 cursor-pointer
            md:hover:text-[#a8a39d]"
            :class="selectedTab == index ? 'font-bold' : 'font-medium'"
            @click="selectedTab = index"
          >
          {{ content }}
          </button>
        </div>
      </nav>
    </div>
</template>

<script setup>
import { selectedTab } from '@/pages/AboutMe.vue';
defineProps({
    buttons: Array
})
</script>
  