<script setup>
const data = [
    {
        href: 'https://www.hackerrank.com/certificates/649ed0c02e45',
        src: '/certifications/problem_solving.png'
    },
    {
        href: 'https://www.hackerrank.com/certificates/c3a5a8c995f0',
        src: '/certifications/soft-engineer.png'
    },
    {
        href: 'https://www.hackerrank.com/certificates/6dea56357eb3',
        src: '/certifications/c_sharp.png'
    },
    {
        href: 'https://www.hackerrank.com/certificates/7d991cde9c62',
        src: '/certifications/python.png'
    },    
    {
        href: 'https://www.freecodecamp.org/certification/fcc103dcaa4-6b29-479c-b7d4-06761a1e6a76/foundational-c-sharp-with-microsoft',
        src: '/certifications/c_sharp2.png'
    },
    {
        href:'#',
        src: '/certifications/system-analyst.png'
    },
    {
        href: '#',
        src: ''
    }
]
</script>
<template>
<div class="mx-3 mt-5 space-y-2 flex flex-wrap items-center">
    <template v-for="(card, index) in $tm('certifications')">
        <div class="bg-white rounded-lg shadow-md overflow-hidden p-3 m-auto md:mx-2
        ">
            <a :href="data[index].href" class="block">
                <!-- Image -->
                <img :src="data[index].src" :alt="card.alt" v-if="data[index].src" class="max-h-60">

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
