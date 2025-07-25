<template>
    <p :class="['py-1.5 px-4 rounded-3xl text-sm text-[#e3e3e3] font-medium', isDark ? 'text-[#e3e3e3] bg-[#b7b7b785]' : 'text-black bg-[#d4d4d485]']">
        <slot></slot>
    </p>
</template>
<script setup>
import { isDark } from "@/stores/theme.js";
</script>