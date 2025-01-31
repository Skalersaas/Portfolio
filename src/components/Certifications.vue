<script setup>
import certifications from '@/data/certifications';
</script>
<template>
<div class="mx-3 mt-5 space-y-2 flex flex-wrap items-center">
    <template v-for="(card, index) in $tm('certifications')">
        <div class="bg-white rounded-lg shadow-md overflow-hidden p-3 m-auto
        h-[100% ]
        md:w-[33%] xl:w-[24%]">
            <a :href="certifications[index].href" class="block">
                <!-- Image -->
                <img :src="certifications[index].src" :alt="card.alt" v-if="certifications[index].src"
                class="max-h-60
                xl:max-h-fit">

                <!-- Card Content -->
                <div class="p-4">
                    <h3 class="text-xl font-semibold text-gray-800 max-w-72">{{ card.name }}</h3>
                    <p class="text-sm text-gray-600 mt-1">{{ card.issuedBy }}</p>
                </div>
            </a>
        </div>
    </template>
</div>
</template>
