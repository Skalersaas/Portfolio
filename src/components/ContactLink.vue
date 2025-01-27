<template>
<div class="flex items-center space-x-4 transform transition duration-500 hover:scale-105 hover:text-[#3d2d23]">
    <i class="text-2xl" :class="img"></i>
    <a :href="link" target="_blank" class="text-[#5d4e46] text-lg font-semibold hover:text-[#3d2d23] transition duration-300">
        {{ text }}
    </a>
</div>
</template>

<script setup>
defineProps({
    link: String,
    img: String,
    text: String
})
</script>