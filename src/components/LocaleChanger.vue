<template>
  <div
    :class="['flex justify-between fixed top-4 left-3 z-10 w-[calc(100%-24px)] shadow-lg bg-[#212121] rounded-lg', isDark ? 'bg-[#212121]' : 'bg-[#f1f1f1b0]',]"
  >
    <ContactLink
      link="https://www.linkedin.com/in/eminamirovce"
      img="fab fa-linkedin text-blue-700 ml-2"
    />

    <div class="flex items-center">
      <button
        @click="toggleTheme"
        :class="['p-2 rounded-full border-none focus:outline-none', isDark ? 'text-white' : 'text-black']"
      >
        <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
      </button>
      <!-- <button
        @click="toggleTheme"
        class="p-2 rounded-full text-white shadow-lg border-none focus:outline-none bg-gray-700 dark:bg-yellow-500 transition-colors duration-300"
      >
        <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
      </button> -->
      <select
        :class="['p-2 rounded-full bg-transparent border-none focus:outline-none appearance-none cursor-pointer md:top-12',isDark ? 'text-white' : 'text-black' ]"
        @change="changeLocale"
        v-model="selectedLanguage"
      >
        <option selected value="en">EN</option>
        <option value="az">AZ</option>
        <option value="ru">RU</option>
      </select>
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

const selectedLanguage = ref(localStorage.getItem("locale") || "en");
const changeLocale = () => {
  document.documentElement.setAttribute("lang", selectedLanguage.value);
  localStorage.setItem("locale", selectedLanguage.value);
  i18n.global.locale = selectedLanguage.value;
};

onMounted(() => {
  initTheme();
});
</script>
