<template>
  <div
    :class="['flex justify-between fixed top-4 left-3 z-10 w-[calc(100%-24px)] shadow-lg bg-[#212121] rounded-lg', isDark ? 'bg-[#212121]' : 'bg-[#f1f1f1b0]',]">
    <ContactLink link="https://www.linkedin.com/in/eminamirovce" img="fab fa-linkedin text-blue-700 ml-2" />

    <div class="flex items-center">
      <button @click="toggleTheme"
        :class="['p-2 rounded-full border-none focus:outline-none', isDark ? 'text-white' : 'text-black']">
        <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
      </button>
      <!-- <button
        @click="toggleTheme"
        class="p-2 rounded-full text-white shadow-lg border-none focus:outline-none bg-gray-700 dark:bg-yellow-500 transition-colors duration-300"
      >
        <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
      </button> -->

      <div class="relative">
        <button @click="showDropdown = !showDropdown"
          :class="['text-xs p-2 border-none', isDark ? 'text-white' : 'text-black']">
          {{ selectedLanguage.toUpperCase() }}
        </button>

        <!-- Dropdown Menu -->
        <div v-if="showDropdown" class="absolute right-0 mt-2 w-12 border rounded-md shadow-lg z-10"
          :class="[isDark ? ' border-[#333] bg-[#1f1f1f] text-white' : 'border-[#dddbdb] bg-white text-black']">
          <div v-for="(content, index) in locales" :key="index" class="px-3 py-2 cursor-pointer text-sm"
            :class="[
              isDark? 'text-white hover:bg-[#333]' : 'text-black hover:bg-[#dddbdb]',
              selectedTab === index ? 'font-bold text-[#757575]' : ''
            ]"
             @click="changeLocale(content)">
            {{ content.toUpperCase() }}
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="flex items-center
            before:relative before:right-[1.2rem] before:w-2 before:h-0.5 before:bg-white before:rotate-45 
            after:relative after:right-[1.4rem] after:w-2 after:h-0.5 after:bg-white after:-rotate-45">
        </div>   -->
  </div>
</template>

<script setup>
import i18n from "@/scripts/i18n";
import { ref, onMounted } from "vue";
import { isDark, toggleTheme, initTheme } from "@/stores/theme.js";
import ContactLink from "@/components/ContactLink.vue";
const locales = ['en', 'az', 'ru'];
const showDropdown = ref(false);
const selectedLanguage = ref(localStorage.getItem("locale") || "en");
const changeLocale = (locale) => {
  document.documentElement.setAttribute("lang", locale);
  localStorage.setItem("locale", locale);
  i18n.global.locale = locale;
};

onMounted(() => {
  initTheme();
});
</script>
