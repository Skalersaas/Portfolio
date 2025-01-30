<template>
<LocaleChanger/>
<div class="scroll-container" id="scrollcontainer">
    <Projects id="section1"/>
    <AboutMe id="section2"/>
    <Contacts id="section3"/>
</div>
<BottomNavBar/>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import AboutMe from './pages/AboutMe.vue';
import Contacts from './pages/Contacts.vue';
import Projects from './pages/Projects.vue';
import BottomNavBar from './components/NavBar.vue';
import { updateActiveBackground } from './components/NavBar.vue';
import LocaleChanger from './components/LocaleChanger.vue';

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
