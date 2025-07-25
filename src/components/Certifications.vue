<script setup>
import certifications from '@/data/certifications';
</script>
<template>
<div class="mt-5 flex flex-wrap gap-2 items-center">
    <template v-for="(card, index) in $tm('certifications')">
        <div class="bg-white rounded-lg shadow-md overflow-hidden m-auto md:w-[33%] xl:w-[24%]">
            <a :href="certifications[index].href" class="block">
                <!-- Image -->
                <img :src="certifications[index].src" :alt="card.alt" v-if="certifications[index].src"
                class="max-h-60 p-3 xl:max-h-fit">

                <!-- Card Content -->
                <div class="p-4 bg-[#00000090]">
                    <h3 class="text-xl text-white font-semibold max-w-72">{{ card.name }}</h3>
                    <p class="text-sm text-[#b6b6b6] mt-1">{{ card.issuedBy }}</p>
                </div>
            </a>
        </div>
    </template>
</div>
</template>
