// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',

	devtools: { enabled: true },
	css: ['@/assets/scss/main.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
            @use "@/assets/scss/utils/_variables.scss" as *;
            @use "@/assets/scss/utils/_mixins.scss" as *;
          `,
				},
			},
		},
	},
	modules: [
		'@nuxt/fonts',
		'@nuxt/image',
		'@nuxt/scripts',
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
	],
	ssr: false, // або true, якщо хочеш SSR
})
