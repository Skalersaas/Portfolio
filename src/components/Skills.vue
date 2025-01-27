<template>
    <div class="mx-3 mt-5">
        <h1 class="text-lg font-bold">{{ $t('aboutme.skills-tech') }}</h1>
        <div class="flex flex-wrap mt-3 gap-x-2 gap-y-2">
            <Skill v-for="skill in $tm('aboutme.skills')">{{ skill }}</Skill>
        </div>
    </div>
</template>
<script setup>
import Skill from './Skill.vue';
</script>