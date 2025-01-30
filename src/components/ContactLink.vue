<template>
<a class="flex items-center space-x-4 transform transition duration-500 hover:scale-105 hover:text-[#3d2d23] cursor-pointer"
    :href="link" target="_blank">
    <i class="text-2xl" :class="img"></i>
    <p class="text-[#5d4e46] text-lg font-semibold hover:text-[#3d2d23] transition duration-300">
        {{ text }}
    </p>
</a>
</template>

<script setup>
defineProps({
    link: String,
    img: String,
    text: String
})
</script>