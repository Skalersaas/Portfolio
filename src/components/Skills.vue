<template>
    <div class="">
        <h1 :class="['text-lg font-bold', isDark ? 'text-white' : 'text-black']">{{ $t('aboutme.skills-tech') }}</h1>
        <div class="flex flex-wrap mt-3 gap-x-2 gap-y-2">
            <Skill v-for="skill in $tm('aboutme.skills')">{{ skill }}</Skill>
        </div>
    </div>
</template>
<script setup>
import Skill from './Skill.vue';
import { isDark } from "@/stores/theme.js";
</script>