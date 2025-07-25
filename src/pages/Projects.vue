<template>
  <section
    :class="[
      'section pb-24 md:pb-20 bg-[#161616]',
      isDark ? 'bg-[#161616]' : 'bg-white',
    ]"
  >
    <div class="my-4 md:my-0 p-3">
      <!-- <h2 class="text-lg font-semibold text-[#2d2a28] text-center">{{ $t('projects.projects-word') }}</h2> -->
    </div>
    <div
      :class="['mx-3 mt-10 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-3 items-start']"
    >
      <Project
        v-for="(card, index) in $tm('projects.projects')"
        :web-site="projects[index]?.webSite"
        :code="projects[index]?.code"
      >
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
import Project from "@/components/Project.vue";
import projects from "@/data/projects";
import { isDark } from "@/stores/theme.js";
</script>
