<template>
  <div class="flex items-center justify-between gap-2">
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-2 mb-3">
        <div class="w-1 h-1 rounded-full bg-[#8d8d8d]"></div>
        <h2 class="text-sm text-[#909090]">{{ $t("aboutme.profession") }}</h2>
      </div>

      <h1 :class="['font-bold text-xl', isDark ? 'text-white' : 'text-black']">{{ $t("aboutme.name") }}</h1>

      <p class="text-[15px] text-[#828282] leading-6">
        {{ $t("aboutme.short-info") }}
      </p>

      <div class="flex gap-2">
        <button :class="['text-xs p-2 rounded-md', isDark ? 'text-white bg-[#373737]' : 'text-black bg-[#d4d4d4]']">
          Call Me
        </button>
        <button
          :class="['text-xs p-2 rounded-md border border-[#242424] shadow-lg', isDark ? 'text-white' : 'text-black']"
        >
          Copy Email
        </button>
      </div>

    </div>
    <img
      src="/images/profile.png"
      alt="profile"
      class="rounded-full w-32 h-32 border border-[#303030] p-1"
    />
  </div>
</template>
<script setup>
import { isDark } from "@/stores/theme.js";
</script>
