<template>
    <div class="mt-3 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-2 items-start">
        <Card v-for="card in $tm('experience')"
        class=" w-full">
            <template v-slot:title>{{ card.title }}</template>
            <template v-slot:institution>{{ card.institution }}</template>
            <template v-slot:dates>{{ card.dates }}</template>
            <template v-slot:description>{{ card.desc }}</template>
            <template v-slot:roles>
                <li v-for="role in card.roles">{{ role }}</li>
            </template>
        </Card>
    </div>
</template>

<script setup>
import Card from './Card.vue';
</script>