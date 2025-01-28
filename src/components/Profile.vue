<template>
    <div class="ml-3 mt-4 flex items-end">
        <img src="/public/images/profile.png" alt="profle" class="rounded-lg w-32 h-32">
        <div class="m-2">
            <h1 class="text-lg font-bold">{{ $t('aboutme.name') }}</h1>
            <h2 class="text-sm">{{ $t('aboutme.profession') }}</h2>
            <h2 class="text-sm">{{ $t('aboutme.short-info') }}</h2>
        </div>
    </div>
</template>