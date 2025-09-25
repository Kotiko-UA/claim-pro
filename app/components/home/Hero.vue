<script setup lang="ts">
import HeroVideo from '@/assets/video/hero-video-min.mp4'
</script>
<template>
	<section class="hero-section">
		<video
			autoplay
			muted
			loop
			playsinline
			class="absolute top-0 left-0 w-full h-full object-cover -z-10">
			<source :src="HeroVideo" type="video/mp4" />
			Your browser can not play videos.
		</video>
	</section>
</template>
<style scoped lang="scss">
.hero-section {
	position: relative;
	overflow: hidden;
	padding-top: 248px;
	padding-bottom: 156px;
	background: linear-gradient(
		180deg,
		rgba(8, 27, 43, 0.65) 0%,
		rgba(8, 27, 43, 0.16) 100%
	);
}
</style>
