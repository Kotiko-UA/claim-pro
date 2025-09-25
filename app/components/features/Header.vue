<script setup lang="ts">
import Logo from '@/assets/images/icons/logo-icon.svg'

import Shevron from '@/assets/images/icons/shevron-down.svg'
</script>
<template>
	<header class="header">
		<div class="container">
			<nav class="header-nav">
				<NuxtLink class="header-logo" to="/"
					><img :src="Logo" alt="logo image"
				/></NuxtLink>
				<EntityNavIconLink
					class="mr-[32px]"
					href="tel:3075006992"
					type="phone"
					text="(307) 500 6992" />
				<EntityNavIconLink
					class="mr-[24px]"
					href="mailto:admin@getclaimpro.com"
					type="mail"
					text="admin@getclaimpro.com" />

				<button class="portal-button">
					Client Portal <img :src="Shevron" alt="icon down" />
				</button>
			</nav>
		</div>
	</header>
</template>
<style scoped lang="scss">
.header {
	position: absolute;
	top: 24px;
	left: 0;
	width: 100%;
	z-index: 10;
}
.header-nav {
	height: 68px;
	display: flex;
	align-items: center;
}
.header-logo {
	width: 92px;
	height: 64px;
	margin-right: auto;
	& > img {
		width: 100%;
		height: 100%;
	}
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

	font-family: Urbanist;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 115%; /* 18.4px */
	letter-spacing: 0.48px;
	text-transform: uppercase;
}
</style>
