<template>
    <div class="space-y-2 pt-3 
        md:flex md:flex-wrap md:space-x-2 md:items-baseline">
        <Card v-for="card in $tm('experience')">
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