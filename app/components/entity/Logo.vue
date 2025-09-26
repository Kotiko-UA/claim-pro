<script setup lang="ts">
import Logo from '@/assets/images/icons/logo-icon.svg'
</script>
<template>
	<NuxtLink class="header-logo" to="/"
		><img loading="lazy" :src="Logo" alt="logo image"
	/></NuxtLink>
</template>
<style lang="scss" scoped>
.header-logo {
	width: 92px;
	height: 64px;
	margin-right: auto;
	& > img {
		width: 100%;
		height: 100%;
	}
}
</style>
