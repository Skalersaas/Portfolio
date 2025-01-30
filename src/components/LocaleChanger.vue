<template>
    <div class="fixed top-4 right-4 z-10 flex">
        <select class="p-2 pr-5 rounded-full shadow-lg
        bg-yellow-500 text-white border-none focus:outline-none appearance-none
        cursor-pointer
        md:top-12"
            @change="changeLocale" v-model="selectedLanguage">
            <option selected value="en">EN</option>
            <option value="az">AZ</option>
            <option value="ru">RU</option>
        </select>
        <div class="flex items-center
            before:relative before:right-[1.2rem] before:w-2 before:h-0.5 before:bg-white before:rotate-45 
            after:relative after:right-[1.4rem] after:w-2 after:h-0.5 after:bg-white after:-rotate-45">
        </div>  
    </div>
</template>

<script setup>
import i18n from '@/scripts/i18n';
import { ref } from 'vue';
const selectedLanguage = ref(localStorage.getItem('locale') || 'en');
const changeLocale = () => {
    document.documentElement.setAttribute('lang', selectedLanguage.value);
    localStorage.setItem('locale', selectedLanguage.value);
    i18n.global.locale = selectedLanguage.value
}
</script>