<template>
	<div :class="isEducation ? 'bg-blue-100' : 'bg-green-100'" 
		class="p-6 rounded-lg shadow-lg cursor-pointer
		md:max-w-[40%] lg:max-w-[30%] xl:max-w-[25%]"
		@click="showMore = !showMore">
		<!-- Title (Dynamic: Work or Education) -->
		<h2 class="text-2xl font-semibold mb-2">
			<slot name="title"></slot>
		</h2>

		<!-- Institution/Company Name -->
		<p class="text-gray-500 text-sm">
			<slot name="institution"></slot>
		</p>

		<!-- Dates -->
		<p class="text-gray-500 text-sm">
			<slot name="dates"></slot>
		</p>

		<!-- Description/Role -->
		<p class="text-gray-700 mt-1" :class="showMore ? 'max-h-20 overflow-ellipsis overflow-hidden whitespace-nowrap': ''">
			<slot name="description"></slot>
		</p>


		<!-- Relevant Courses (for education) or Responsibilities (for work) -->
		<div  :class="showMore ? 'hidden': ''">
			<h3 class="font-semibold text-lg">
				{{ isEducation ? $t('aboutme.rel-courses') : $t('aboutme.responsibilities') }}
			</h3>
			<ul class="list-disc pl-5 mt-2 text-gray-700 overflow-hidden">
				<slot name="roles"></slot>
			</ul>
		</div>
		<button class="mt-4 text-blue-500 text-sm hover:underline "
			:class="!showMore ? 'hidden' : ''"
			@click.stop="showMore = !showMore">
			{{ $t('aboutme.tap4more') }}
		</button>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const showMore = ref(true);
const props = defineProps({
	isEducation: Boolean
});

</script>