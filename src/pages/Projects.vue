<template>
    <section class="section pb-24 md:pb-2 md:mt-20">
        <div class="my-4 md:my-0 p-3">
            <h2 class="text-lg font-semibold text-[#2d2a28] text-center">{{ $t('projects.projects-word') }}</h2>
        </div>
        <div class="space-y-2 mx-3
        md:flex md:flex-wrap md:space-x-2 md:items-baseline">
            <Project v-for="(card, index) in $tm('projects.projects')"
            :web-site="projects[index].webSite"
            :code="projects[index].code">
            <template v-slot:title>{{ card.title }}</template>
            <template v-slot:tag>{{ card.tagline }}</template>
            <template v-slot:desc>{{ card.desc }}</template>
            <template v-slot:techs>
                <li v-for="tech in card.techs">
                    {{ tech }}
                </li>
            </template>
        </Project>
        </div>
    </section>
</template>
<script setup>
import Project from '@/components/Project.vue';
import projects from '@/data/projects';
</script>