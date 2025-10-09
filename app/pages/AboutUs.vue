<script setup lang="ts">
useHead({
  title: 'About Us | Claim Pro',
  meta: [
    {
      name: 'description',
      content:
        'Discover Claim Pro’s mission, values, and team dedicated to improving claim management for professionals and clients alike.',
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'About Us | Claim Pro' },
    {
      property: 'og:description',
      content:
        'Discover Claim Pro’s mission, values, and team dedicated to improving claim management for professionals and clients alike.',
    },
    { property: 'og:image', content: 'about-us-hero-bg.jpg' },
    { property: 'og:url', content: 'https://claimpro.com/AboutUs' },
  ],
  link: [{ rel: 'canonical', href: 'https://claimpro.com/AboutUs' }],
})
</script>
<template>
  <AboutUsHero />
  <HomeAboutClaim />
  <AboutUsOurClientSpeak />
  <HomeProtectInterests />
</template>
