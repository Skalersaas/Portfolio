<template>
  <div
    :class="[isDark ? 'bg-[#5a5a5a8c]' : 'bg-white']"
    class="p-6 rounded-lg shadow-lg cursor-pointer md:max-w-[40%] lg:max-w-[30%] xl:max-w-[25%]"
    @click="showMore = !showMore"
  >
    <!-- Title (Dynamic: Work or Education) -->
    <h2
      :class="['text-2xl font-semibold', isDark ? 'text-white' : 'text-black']"
    >
      <slot name="title"></slot>
    </h2>

    <div :class="'flex items-center justify-between text-sm'">
      <!-- Institution/Company Name -->
      <p
        :class="[
          'max-w-44 xs:max-w-full',
          isDark ? 'text-[#b8b8b8]' : 'text-black',
        ]"
      >
        <slot name="institution"></slot>
      </p>

      <!-- Dates -->
      <p :class="isDark ? 'text-[#b8b8b8]' : 'text-black'">
        <slot name="dates"></slot>
      </p>
    </div>

    <!-- Description/Role -->
    <p
      :class="[
        'my-3',
        showMore &&
          'max-h-20 overflow-ellipsis overflow-hidden whitespace-nowrap',
        isDark ? 'text-[#d7d7d7]' : 'text-[#7b7b7b]',
      ]"
    >
      <slot name="description"></slot>
    </p>

    <!-- Relevant Courses (for education) or Responsibilities (for work) -->
    <div :class="showMore ? 'hidden' : ''">
      <h3
        :class="['font-semibold text-lg', isDark ? 'text-white' : 'text-black']"
      >
        {{
          isEducation
            ? $t("aboutme.rel-courses")
            : $t("aboutme.responsibilities")
        }}
      </h3>
      <ul
        :class="[
          'list-disc pl-5 mt-2 overflow-hidden',
          isDark ? 'text-[#d7d7d7]' : 'text-[#7b7b7b]',
        ]"
      >
        <slot name="roles"></slot>
      </ul>
    </div>
    <button
      class="mt-4 text-[#333333] text-xs flex gap-[2px]"
      :class="!showMore ? 'hidden' : ''"
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { isDark } from "@/stores/theme.js";

const showMore = ref(true);
const props = defineProps({
  isEducation: Boolean,
});
</script>
