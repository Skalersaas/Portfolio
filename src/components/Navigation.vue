<template>
    <div class="bg-[#f8f7f3] text-[#2d2a28] mt-4">
      <nav class="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div v-for="(content, index) in buttons" :key="index">
          <button
            class="font-semibold hover:text-[#a8a39d] transition duration-300 cursor-pointer"
            :class="selectedTab === index ? 'text-[#5d4e46]' : ''"
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
  