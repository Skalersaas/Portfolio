<template>
<section class="section">
    <section class="mt-16 pb-28 relative  md:pb-2 md:mt-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-semibold text-[#2d2a28] text-center">{{ $t("contacts.contactme") }}</h2>
            <p class="mt-2 text-center text-lg text-[#5d4e46]">{{ $t("contacts.feelFree") }}</p>

                <!-- Right side with contact links -->
            <div class="flex flex-col max-w-lg space-y-6 items-center mt-8 m-auto">
                <!-- GitHub -->
                <ContactLink link="https://github.com/skalersaas" img="fab fa-github" text="GitHub" />

                <!-- LinkedIn -->
                <ContactLink link="https://www.linkedin.com/in/eminamirovce" img="fab fa-linkedin text-blue-700"
                    text="LinkedIn" />

                <!-- Gmail -->
                <ContactLink link="mailto:amirov.e1000@gmail.com" img="fa fa-envelope text-red-700" :text="$t('contacts.mail')" />

                <!-- Phone -->
                <ContactLink link="tel:+994775713846" img="fa fa-phone-alt text-green-700" :text="$t('contacts.phone')" />
            </div>
        </div>
    </section>
</section>
</template>
<script setup>
import ContactLink from '@/components/ContactLink.vue';
</script>