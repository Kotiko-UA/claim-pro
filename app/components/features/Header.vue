<script setup lang="ts">
import Logo from '@/assets/images/icons/logo-icon.svg'
import LogoInstagram from '@/assets/images/icons/instagram-icon.svg'
import LogoYoutube from '@/assets/images/icons/youtube-icon.svg'
import LogoFacebook from '@/assets/images/icons/facebook-icon.svg'
</script>
<template>
	<header class="header">
		<div class="container">
			<nav class="header-nav">
				<NuxtLink class="header-logo" to="/"
					><img :src="Logo" alt="logo image"
				/></NuxtLink>
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
					<NuxtLink to="/" class="second-nav-link">Home</NuxtLink>
					<NuxtLink to="/what-we-do" class="second-nav-link"
						>What We Do</NuxtLink
					>
					<NuxtLink to="/about-us" class="second-nav-link">About Us</NuxtLink>
					<NuxtLink to="/join-our-team" class="second-nav-link"
						>Join Our Team</NuxtLink
					>
				</nav>
				<div class="flex justify-center items-center gap-[16px]">
					<EntityShareButton />
					<a
						class="h-6 w-6"
						target="_blank"
						noopener
						noreferrer
						nofollow
						href="https://www.instagram.com/"
						><img class="h-6 w-6" :src="LogoInstagram" alt="instagram link"
					/></a>
					<a
						class="h-6 w-6"
						target="_blank"
						noopener
						noreferrer
						nofollow
						href="https://www.instagram.com/"
						><img class="h-6 w-6" :src="LogoYoutube" alt="youtube link"
					/></a>
					<a
						class="h-6 w-6"
						target="_blank"
						noopener
						noreferrer
						nofollow
						href="https://www.instagram.com/"
						><img class="h-6 w-6" :src="LogoFacebook" alt="facebook link"
					/></a>
				</div>
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
.header-logo {
	width: 92px;
	height: 64px;
	margin-right: auto;
	& > img {
		width: 100%;
		height: 100%;
	}
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
