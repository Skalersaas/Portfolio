<template>
  <div class="">
    <nav class="flex justify-between items-center p-2 max-w-7xl mx-auto">
      <div class="flex items-center gap-2">
        <div class="w-1 h-1 rounded-full bg-[#8d8d8d]"></div>
        <p class="text-sm text-[#909090]">Tabs</p>
      </div>

      <div class="relative">
        <button
          @click="showDropdown = !showDropdown"
          :class="['text-xs p-2 rounded-md border border-[#242424] shadow-lg', isDark ? 'text-white bg-[#373737]' : 'text-black bg-white']"
        >
          View All
        </button>

        <!-- Dropdown Menu -->
        <div
          v-if="showDropdown"
          class="absolute right-0 mt-2 w-40 bg-[#1f1f1f] text-white border border-[#333] rounded-md shadow-lg z-10"
        >
          <div
            v-for="(content, index) in buttons"
            :key="index"
            class="px-4 py-2 hover:bg-[#333] cursor-pointer text-sm"
            :class="{ 'font-bold text-[#757575]': selectedTab === index }"
            @click="selectTab(index)"
          >
            {{ content }}
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { selectedTab } from "@/pages/AboutMe.vue";
import { isDark } from "@/stores/theme.js";
defineProps({
  buttons: Array,
});
const showDropdown = ref(false);
function selectTab(index) {
  selectedTab.value = index;
  showDropdown.value = false;
}
</script>
