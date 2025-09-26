<script setup lang="ts">
import Arrow from '@/assets/images/icons/arrow-blue-tr.svg'
defineProps<{
	to: string
}>()
</script>
<template>
	<NuxtLink class="link" :to
		>Learn More <img loading="lazy" :src="Arrow" alt="arrow icon"
	/></NuxtLink>
</template>
<style lang="scss" scoped>
.link {
	width: fit-content;
	height: 56px;
	display: flex;
	padding: 16px 32px;
	justify-content: center;
	align-items: center;
	gap: 4px;

	color: var(--Blue);
	text-align: center;

	font-weight: 500;
	line-height: 115%;
	letter-spacing: 0.48px;
	text-transform: uppercase;
	white-space: nowrap;
}
</style>
