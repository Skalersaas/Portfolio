<template>
  <a
    class="flex flex-col items-center text-gray-500 group relative transition-all duration-200 pt-2 cursor-pointer md:hover:text-[#F97A56] md:flex-row"
    @click="navigateTo(section)"
  >
    <div
      class="rounded-full bg-white shadow-xl transform transition-all duration-200 w-10 h-10 flex items-center justify-center md:group-hover:-translate-y-2"
      :id="'nav' + section.at(-1)"
    >
      <i class="text-xl" :class="icon"></i>
    </div>
    <span
      class="text-xs mt-1 transition-all duration-200 md:ml-3 md:text-sm group-has-[div.-translate-y-2]:text-[#F97A56]"
      >{{ name }}</span
    >
  </a>
</template>
<script setup>
import { navigateTo } from "@/App.vue";
defineProps({
  icon: String,
  name: String,
  section: String,
});
</script>
