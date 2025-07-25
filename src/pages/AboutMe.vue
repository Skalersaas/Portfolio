<template>
  <section
    :class="[
      'section pb-24 md:pb-20 flex flex-col gap-2',
      isDark ? 'bg-[#161616]' : 'bg-white',
    ]"
  >
    <!-- Header -->
    <div class="mt-4 p-3 md:mt-0">
      <!-- <h1 class="text-lg font-bold text-center">{{ $t('aboutme.my-portfolio') }}</h1> -->
    </div>
    <div
      :class="['m-3 mt-5 md:mt-10 p-5 shadow-lg rounded-lg flex flex-col gap-5', isDark ? 'bg-[#212121]' : 'bg-[#f2f2f286]']"
    >
      <!-- Profile -->
      <Profile />

      <!-- About -->
      <div :class="['rounded-lg bg-[#2C2C2C] p-4 flex flex-col gap-5', isDark ? 'bg-[#2C2C2C]' : 'bg-[#fff]']">
        <div class="flex flex-col gap-1">
          <h1 :class="['text-lg font-bold', isDark ? 'text-white' : 'text-black']">
            {{ $t("aboutme.about-word") }}
          </h1>
          <p class="text-[#a5a5a5] text-[15px]">
            {{ $t("aboutme.long-info") }}
          </p>
        </div>

        <!-- Skills & Technologies -->
        <Skills />
      </div>
    </div>
    <div :class="['rounded-lg mx-3 p-4 shadow-lg flex flex-col', isDark ? 'bg-[#2c2c2c]' : 'bg-[#f2f2f286]']">
      <Navigation :buttons="$tm('aboutme.nav')" />
      <!-- Experience -->
      <Experience v-if="selectedTab == 0" />

      <!-- Education -->
      <Education v-else-if="selectedTab == 1" />

      <Certifications v-else-if="selectedTab == 2" />
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import Skills from "@/components/Skills.vue";
import Experience from "@/components/Experience.vue";
import Profile from "@/components/Profile.vue";
import Education from "@/components/Education.vue";
import Certifications from "@/components/Certifications.vue";
import Navigation from "@/components/Navigation.vue";
import { isDark } from "@/stores/theme.js";
</script>

<script>
const selectedTab = ref(0);
export { selectedTab };
</script>
