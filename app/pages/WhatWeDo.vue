<script setup lang="ts">
useHead({
  title: 'What We Do | Claim Pro',
  meta: [
    {
      name: 'description',
      content:
        'Learn how Claim Pro simplifies claim management with efficient, transparent, and expert-driven processes.',
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'What We Do | Claim Pro' },
    {
      property: 'og:description',
      content:
        'Learn how Claim Pro simplifies claim management with efficient, transparent, and expert-driven processes.',
    },
    { property: 'og:image', content: 'what-we-hero-img.jpg' },
    { property: 'og:url', content: 'https://claimpro.com/WhatWeDo' },
  ],
  link: [{ rel: 'canonical', href: 'https://claimpro.com/WhatWeDo' }],
})
</script>
<template>
  <main class="overflow-hidden">
    <WhatWeDoHero />
    <WhatWeDoTabSection />
    <HomeProtectInterests />
  </main>
</template>
