<template>
    <div class="bg-[#46acb3] shadow-lg rounded-2xl p-6 cursor-pointer text-white
    md:max-w-[40%] lg:max-w-[30%] xl:max-w-[25%]" @click="showMore = !showMore">
        <!-- Project Title -->
        <h2 class="text-2xl font-bold">
            <slot name="title"></slot>
        </h2>
        <p class="italic before:content-['\0022'] after:content-['\0022'] mb-4 text-teal-300">
            <slot name="tag"></slot>
        </p>
        <p class="text-cyan-100 mb-4 text-lg" :class="showMore ? 'overflow-ellipsis overflow-hidden whitespace-nowrap': ''">
            <slot name="desc"></slot>
        </p>

        <button :class="!showMore ? 'hidden' : ''" class="text-sm hover:underline "
            @click.stop="showMore = !showMore">
            {{ $t('projects.showTech') }}
        </button>
        <div :class="showMore ? 'hidden' : ''">
            <div class="mb-4">
                <h3 class="text-lg font-semibold mb-2">
                    {{ $t('projects.techUsed') }}
                </h3>
                <ul class="list-disc list-inside marker:text-white text-cyan-100 ">
                    <slot name="techs"></slot>
                </ul>
            </div>
        </div>
        <!-- View and Source Code Buttons -->
        <div class="flex justify-between items-center mt-4">
            <a :href="webSite" target="_blank" @click.stop
                class="text-blue-600 font-semibold hover:underline">
                {{ $t('projects.view-project') }}
            </a>
            <a :href="code" target="_blank" @click.stop
                class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                {{ $t('projects.code') }}
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
    code:String,
    webSite:String
})
const showMore = ref(true);
</script>