<script>

const updateActiveBackground = (pageIndex) => {
    const backgrounds = ['nav1', 'nav2', 'nav3'];
    backgrounds.forEach((background, index) => {
        const element = document.getElementById(background);
        if (index === pageIndex) {
            element.classList.add('bg-blue-500', 'text-white', '-translate-y-2');
            element.classList.remove('bg-white', 'text-gray-500');
        } else {
            element.classList.remove('bg-blue-500', 'text-white', '-translate-y-2');
            element.classList.add('bg-white', 'text-gray-500');
        }
    });
}
export {updateActiveBackground};
</script>
<template>
<div class="fixed bottom-0 left-0 right-0 bg-white shadow-lg
    md:top-0 md:bottom-full ">
    <div class="flex justify-around items-end p-2">
        <NavButton icon="fa-solid fa-folder" :name="$t('navigation.projects')" section="section1"/>
        <NavButton icon="fa-solid fa-user" :name="$t('navigation.aboutme')" section="section2"/>
        <NavButton icon="fa-solid fa-envelope" :name="$t('navigation.contacts')" section="section3"/>
    </div>
</div>

</template>
<script setup>
import NavButton from './NavButton.vue';
</script>