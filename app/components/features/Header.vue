<script setup lang="ts">
import navLinks from '@/shared/files/nav-links'
</script>
<template>
	<header class="header">
		<div class="container">
			<nav class="header-nav">
				<EntityLogo />
				<EntityNavIconLink
					:style="'mr-[32px]'"
					href="tel:3075006992"
					type="phone"
					text="(307) 500 6992" />
				<EntityNavIconLink
					:style="'mr-[24px]'"
					href="mailto:admin@getclaimpro.com"
					type="mail"
					text="admin@getclaimpro.com" />
				<EntityMenuButton />
			</nav>
			<div class="second-nav-wrap">
				<nav class="header-second-nav">
					<NuxtLink
						v-for="link in navLinks"
						:key="link.title"
						:to="link.to"
						class="second-nav-link"
						>{{ link.title }}</NuxtLink
					>
				</nav>
				<EntityShareButton />
			</div>
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
	padding-bottom: 4px;
	border-bottom: 1px solid rgba(217, 217, 217, 0.5);
}

.second-nav-wrap {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.header-second-nav {
	display: flex;
	justify-content: center;
	align-items: center;
}
.second-nav-link {
	padding: 16px;
	border-top: 3px solid transparent;

	color: var(--Text-light);
	font-size: 20px;
	line-height: 120%;
	&.router-link-active {
		border-top: 3px solid var(--Blue, #8fcefd);
	}
}
</style>
