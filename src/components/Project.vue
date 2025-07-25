<template>
  <div
    :class="[
      'shadow-lg rounded-2xl p-6 cursor-pointer w-full',
      isDark ? 'bg-[#4c4c4c8c] text-white' : ' bg-[#f1f1f1b0] text-black border',
    ]"
    @click="showMore = !showMore"
  >
    <!-- Project Title -->
    <h2 class="text-2xl font-bold">
      <slot name="title"></slot>
    </h2>
    <p
      class="italic before:content-['\0022'] after:content-['\0022'] mb-4"
      :class="[isDark ? 'text-[#d7d7d7]' : 'text-[#343434]',
        showMore && 'line-clamp-2'
      ]"
    >
      <slot name="tag"></slot>
    </p>
    <p
      class="mb-4 text-md"
      :class="
        [showMore && 'line-clamp-2',
        isDark ? 'text-[#d3d3d3]' : 'text-[#343434]']
      "
    >
      <slot name="desc"></slot>
    </p>

    <button
      class="mt-4 text-xs flex gap-[2px]"
      :class="!showMore && 'hidden'"
      @click.stop="showMore = !showMore"
    >
      <!-- {{ $t('aboutme.tap4more') }} -->
      <div
        :class="[
          'w-1 h-1 rounded-full',
          isDark ? 'bg-[#e9e9e97b]' : 'bg-[#9292927b]',
        ]"
      ></div>
      <div
        :class="[
          'w-1 h-1 rounded-full',
          isDark ? 'bg-[#c4c4c47b]' : 'bg-[#b9b9b97b]',
        ]"
      ></div>
      <div
        :class="[
          'w-1 h-1 rounded-full',
          isDark ? 'bg-[#a0a0a07b]' : 'bg-[#dadada7b]',
        ]"
      ></div>
    </button>
    <div :class="showMore && 'hidden'">
      <div class="mb-4">
        <h3 class="text-lg font-semibold mb-2">
          {{ $t("projects.techUsed") }}
        </h3>
        <ul :class="['list-disc list-inside', isDark ? 'text-[#d3d3d3] marker:text-white' : 'text-[#666666] marker:text-black']">
          <slot name="techs"></slot>
        </ul>
      </div>
    </div>
    <!-- View and Source Code Buttons -->
    <div class="flex justify-between items-center mt-4">
      <a 
        :href="webSite"
        target="_blank"
        disabled="disabled"
        @click.stop
        :class="[
          !webSite ? 'opacity-50  cursor-not-allowed' : 'hover:bg-[#243B2F] hover:text-[#b3bdb8]',
          'font-semibold border border-[#374a40] bg-[#4e575241] rounded-lg px-4 py-2 bg-[#374a40]', isDark ? 'text-[#cdd1cf]' : 'text-[#374a40]']"
      >
        {{ $t("projects.view-project") }}
      </a>
      <a
        v-if="code"
        :href="code"
        target="_blank"
        @click.stop
        class="bg-[#145a3e62] border border-[#27C687] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#243B2F] transition"
      >
        {{ $t("projects.code") }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { isDark } from "@/stores/theme";
defineProps({
  code: String,
  webSite: String,
});
const showMore = ref(true);
</script>
