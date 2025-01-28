<template>
    <section class="section pb-24 md:pb-2 md:mt-24">
        <img src="/src/assets/images/c_sharp.png" alt="sd">
        <!-- Header -->
        <div class="mt-4 p-3">
            <h1 class="text-lg font-bold text-center">{{ $t('aboutme.my-portfolio') }}</h1>
        </div>
        <!-- Profile -->
        <Profile/>

        <!-- About -->
        <div class="ml-3 mt-5">
            <h1 class="text-lg font-bold">{{ $t('aboutme.about-word')}}</h1>
            <p class="mt-3">{{ $t('aboutme.long-info') }}</p>
        </div>

        <!-- Skills & Technologies -->
        <Skills/>
        
        <Navigation :buttons="$tm('aboutme.nav')"/>
        <!-- Experience -->
        <Experience v-if="selectedTab == 0"/>
    
        <!-- Education -->
        <Education v-else-if="selectedTab == 1"/>

        <Certifications v-else-if="selectedTab == 2"/>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import Skills from '@/components/Skills.vue';
import Experience from '@/components/Experience.vue';
import Profile from '@/components/Profile.vue';
import Education from '@/components/Education.vue';
import Certifications from '@/components/Certifications.vue';
import Navigation from '@/components/Navigation.vue';
</script>

<script>
    const selectedTab = ref(0);
    export { selectedTab };
</script>