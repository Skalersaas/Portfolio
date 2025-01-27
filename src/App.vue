<template>
<div class="scroll-container" id="scrollcontainer">
    <Projects id="section1"/>
    <AboutMe id="section2"/>
    <Contacts id="section3"/>
</div>
<BottomNavBar/>
<div class="fixed top-4 right-4 p-2 bg-yellow-500 rounded-full shadow-lg
        md:top-12">
  <select class="bg-yellow-500 text-white border-none focus:outline-none"
  @change="changeLocale" v-model="selectedLanguage">
    <option value="en">EN</option>
    <option value="az">AZ</option>
    <option value="ru">RU</option>
  </select>
</div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import i18n from './scripts/i18n';
import AboutMe from './pages/AboutMe.vue';
import Contacts from './pages/Contacts.vue';
import Projects from './pages/Projects.vue';
import BottomNavBar from './components/NavBar.vue';
import { updateActiveBackground } from './components/NavBar.vue';

const selectedLanguage = ref(localStorage.getItem('locale') || 'en');

const changeLocale = () => {
    document.documentElement.setAttribute('lang', selectedLanguage.value);
    localStorage.setItem('locale', selectedLanguage.value);
    i18n.global.locale = selectedLanguage.value
}
onMounted(() => {
    navigateTo('section2')
    const container = document.getElementById("scrollcontainer");
    let active = -1;
    container.addEventListener('scroll', () => {
        const pageWidth = container.clientWidth;
        const scrollPosition = container.scrollLeft;
        const currentPage = Math.round(scrollPosition / pageWidth);
        if (currentPage == active)
            return;
        active = currentPage;
        updateActiveBackground(currentPage);
    });
})
</script>
<script>
const navigateTo = (name) => {
    const container = document.getElementById("scrollcontainer");
    const section = document.getElementById(name);

    container.scrollLeft = section.offsetLeft;
}
export {navigateTo}
</script>
