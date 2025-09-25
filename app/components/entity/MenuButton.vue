<script setup lang="ts">
import Shevron from '@/assets/images/icons/shevron-down.svg'
import IconClose from '@/assets/images/icons/icon-close.svg'
const isMenuOpen = ref(false)
</script>
<template>
	<div class="relative z-10">
		<button @click="isMenuOpen = !isMenuOpen" class="portal-button">
			Client Portal <img :src="Shevron" alt="icon down" />
		</button>
		<div :class="[!isMenuOpen ? 'visually-hidden' : '']" class="menu">
			<button class="w-6 h-6 ml-auto" @click="isMenuOpen = !isMenuOpen">
				<img class="w-6 h-6" :src="IconClose" alt="close" />
			</button>
			<NuxtLink class="nav-link">Assign a Claim</NuxtLink>
			<NuxtLink class="nav-link">Submit a Supplement</NuxtLink>
			<NuxtLink class="nav-link">Track My Claims</NuxtLink>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.portal-button-wrap {
	position: relative;
}
.portal-button {
	display: flex;
	padding: 16px 32px;
	justify-content: center;
	align-items: center;
	gap: 10px;

	border-radius: 24px;
	border: 1px solid var(--Light);
	opacity: 0.8;
	background: rgba(255, 255, 255, 0.02);

	@include backdrop-blur(2px);

	color: var(--Light, #fff);
	text-align: center;

	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 115%;
	letter-spacing: 0.48px;
	text-transform: uppercase;
}
.menu {
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	width: 240px;
	padding: 24px;
	flex-direction: column;
	align-items: flex-start;
	gap: 24px;

	border-radius: 8px;
	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 4px 29.8px 0 rgba(227, 234, 243, 0.65);
	@include backdrop-blur(12.5px);
	transition: var(--transition-all);
}
.nav-link {
	color: var(--Light);
	font-weight: 500;
	line-height: 115%;
	letter-spacing: 0.48px;
	text-transform: uppercase;
	@include pointer;
}
</style>
