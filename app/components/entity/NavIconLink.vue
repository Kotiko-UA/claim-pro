<script lang="ts" setup>
import IconPhone from '@/assets/images/icons/phone-icon.svg'
import IconMail from '@/assets/images/icons/mail-icon.svg'
defineProps<{
	text: string
	href: string
	style?: string
	type: 'mail' | 'phone'
}>()
</script>
<template>
	<a
		class="py-4 flex gap-2 justify-center items-center link"
		:class="[style]"
		:href>
		<img :src="type === 'mail' ? IconMail : IconPhone" alt="icon" />
		<p>{{ text }}</p>
	</a>
</template>
<style scoped lang="scss">
.link {
	color: #fdfdfe;
	font-size: 14px;
	font-weight: 400;
	line-height: 140%; /* 19.6px */
}
</style>
