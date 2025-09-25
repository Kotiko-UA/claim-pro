<script setup lang="ts">
import { ref } from 'vue'
import ShareIcon from '@/assets/images/icons/share-icon.svg'
const config = useRuntimeConfig()
const baseUrl = config.public.siteUrl as string

const copied = ref(false)

const isMobileScreen = ref(false)

onMounted(() => {
	isMobileScreen.value = window.innerWidth <= 1024
})

const handleClick = async () => {
	if (isMobileScreen.value && navigator.share) {
		try {
			await navigator.share({
				title: baseUrl,
				url: baseUrl,
			})
		} catch (err) {
			console.warn('Share cancelled or not supported', err)
		}
	} else {
		try {
			await navigator.clipboard.writeText(baseUrl)
			copied.value = true
			setTimeout(() => (copied.value = false), 2000)
		} catch (err) {
			console.error('Clipboard API not supported', err)
		}
	}
}
</script>

<template>
	<button @click="handleClick" class="shared-button">
		<img class="w-[28px] h-[28px]" :src="ShareIcon" alt="share icon" />
		Share
		<span
			v-if="copied"
			class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-sky-500/20 text-white px-2 py-1 rounded blur-xs">
			Copied!
		</span>
	</button>
</template>
<style lang="scss" scoped>
.shared-button {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;

	color: var(--Light);
	text-align: center;
	font-family: 'Raleway';
	font-size: 16px;
	font-weight: 600;
	line-height: 120%;
	letter-spacing: 8px;
	text-transform: uppercase;
	z-index: 1;
}
</style>
