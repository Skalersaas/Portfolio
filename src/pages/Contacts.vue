<template>
  <section
    :class="['section bg-[#161616]', isDark ? 'bg-[#161616]' : 'bg-white']"
  >
    <section class="mt-16 pb-28 relative md:pb-2 md:mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          :class="
            ['text-3xl font-semibold text-center',
            isDark ? 'text-white' : 'text-black']
          "
        >
          {{ $t("contacts.contactme") }}
        </h2>
        <p class="mt-2 text-center text-lg text-[#565656]">
          {{ $t("contacts.feelFree") }}
        </p>

        <div
          :class="['flex justify-between items-center p-6 rounded-lg shadow-lg mt-6', isDark ? 'bg-[#5a5a5a8c]' : 'bg-[#f1f1f1b0]',]"
        >
          <div class="flex items-center gap-2">
            <div class="w-1 h-1 rounded-full bg-[#8d8d8d]"></div>
            <h2 class="text-sm text-[#909090]">Follow me</h2>
          </div>

          <!-- Right side with contact links -->
          <div class="flex items-center">
            <!-- GitHub -->
            <ContactLink
              link="https://github.com/skalersaas"
              img="fab fa-github"
            />

            <!-- LinkedIn -->
            <ContactLink
              link="https://www.linkedin.com/in/eminamirovce"
              img="fab fa-linkedin text-blue-700"
            />

            <!-- Gmail -->
            <ContactLink
              link="mailto:amirov.e1000@gmail.com"
              img="fa fa-envelope text-red-700"
            />

            <!-- Phone -->
            <ContactLink
              link="tel:+994775713846"
              img="fa fa-phone-alt text-green-700"
            />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script setup>
import ContactLink from "@/components/ContactLink.vue";
import { isDark } from "@/stores/theme.js";
</script>
