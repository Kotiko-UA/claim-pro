<script setup lang="ts">
import navLinks from '@/shared/files/nav-links'
</script>
<template>
	<footer class="footer-el">
		<div class="container">
			<div class="footer-wrap">
				<div class="logo-wrap">
					<EntityLogo class="!w-[145px] !h-[102px]" />
					<p class="logo-text">
						At Claim Pro, we believe that our success is driven by the dedicated
						professionals who serve our clients. Since our inception in 2018, we
						have been committed to providing exceptional service and support in
						the insurance claims process.
					</p>
				</div>
				<nav class="footer-nav">
					<nuxt-link
						class="footer-nav-link"
						v-for="link in navLinks"
						:key="link.title"
						:to="link.to"
						>{{ link.title }}</nuxt-link
					>
				</nav>
				<div class="contact-wrap">
					<EntityNavIconLink
						class="footer-contact-link"
						href="tel:3075006992"
						type="phone"
						text="(307) 500 6992" />
					<EntityNavIconLink
						class="footer-contact-link"
						:style="'mb-auto'"
						href="mailto:admin@getclaimpro.com"
						type="mail"
						text="admin@getclaimpro.com" />
					<EntityShareButton :style="'!text-[#1D3557]'" />
				</div>
			</div>
			<div class="policy-wrap">
				<p class="all-rights-text">© 2025 | Claim Pro | All Rights Reserved</p>
				<nuxt-link class="policy-link" to="/PrivacyPolicy"
					>Privacy Policy</nuxt-link
				>
			</div>
		</div>
	</footer>
</template>
<style lang="scss" scoped>
.footer-el {
	padding: 24px 0;
	background: #f8fbff;
}
.footer-wrap {
	padding-bottom: 8px;
	margin-bottom: 48px;
	display: flex;
	justify-content: space-between;

	border-bottom: 1px solid rgba(217, 217, 217, 0.5);
}
.logo-wrap {
	display: flex;
	flex-direction: column;
	gap: 24px;
	max-width: 393px;
}
.logo-text {
	color: var(--Dark);

	line-height: 140%; /* 22.4px */
}
.footer-nav {
	display: flex;
	flex-direction: column;
}
.footer-nav-link {
	display: flex;
	padding: 16px;
	align-items: center;
	text-align: start;

	color: var(--Dark);
}
.footer-contact-link {
	color: var(--Dark);
	justify-content: flex-start;
}
.contact-wrap {
	display: flex;
	flex-direction: column;
}
.policy-wrap {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.all-rights-text {
	color: var(--Text-secondary);
	font-size: 14px;
	line-height: 120%;
}
.policy-link {
	color: var(--Text-secondary);
	font-size: 14px;
	line-height: 120%; /* 16.8px */
}
</style>
