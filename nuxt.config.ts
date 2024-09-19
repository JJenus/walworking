// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: ["nuxt-swiper", "@nuxt/image"],

	ssr: true,

	image: {
		format: ["webp", "avif", "jpeg", "jpg", "png", "gif"],
		// The screen sizes predefined by `@nuxt/image`:
		screens: {
			xs: 320,
			sm: 576,
			md: 768,
			lg: 992,
			xl: 1200,
			xxl: 1400,
			"2xl": 1536,
		},
	},

	runtimeConfig: {
		public: {
			BE_API: "https://Walworkingtechnologies.alwaysdata.net",
			APP: "Walworkingtechnologies",
			MOBILE: "+49 (178) 793 1942",
			CLOUD_NAME: "dpangnog4",
			CLOUD_KEY: "232136269489291",
			CLOUD_SECRETE: "B3_WYvhc4C_MSW6RCW-r-O-tiD4",
			DEFAULT_DP: "/assets/images/svg/avatars/blank.svg",
		},
	},

	app: {
		head: {
			meta: [
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					name: "twitter:card",
					content:
						"Expert fire protection, construction, and consulting services tailored to your needs.",
				},
				{
					name: "twitter:title",
					content: "WalWorking Technologies",
				},
				{
					name: "twitter:description",
					content:
						"Providing cutting-edge fire protection, construction, and consulting services to ensure safety and efficiency.",
				},
				{
					name: "twitter:image",
					content:
						"https://walworkingtechnologies.vercel.app/assets/images/logo/logo-w.png",
				},
				{
					property: "og:title",
					content: "WalWorking Technologies",
				},
				{
					property: "og:description",
					content:
						"Leading provider of fire safety, construction, and consulting solutions for businesses and individuals.",
				},
				{
					property: "og:image",
					content:
						"https://walworkingtechnologies.vercel.app/assets/images/logo/logo-w.png",
				},
				{
					property: "og:url",
					content: "https://walworkingtechnologies.vercel.app/",
				},
			],

			script: [
				{ src: "/assets/js/vendors/color-modes.js", defer: true },
				{
					src: "/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js",
					defer: true,
				},
				{ src: "/assets/libs/scrollcue/scrollCue.min.js", defer: true },
				{
					src: "https://cdnjs.cloudflare.com/ajax/libs/headhesive/1.2.4/headhesive.min.js",
					defer: true,
				},
				{
					src: "/assets/libs/simplebar/dist/simplebar.min.js",
					defer: true,
				},
				{
					src: "https://cdnjs.cloudflare.com/ajax/libs/jarallax/2.2.1/jarallax.min.js",
					defer: true,
				}, // Jarallax first
				{
					src: "https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js",
				},
				{ src: "/assets/js/vendors/jarallax.js", defer: true }, // Related to Jarallax
				{ src: "/assets/js/vendors/parallax.js", defer: true }, // Parallax after Jarallax
				{ src: "/assets/js/vendors/scrollcue.js", defer: true }, // Utility scripts after core
				{ src: "/assets/js/theme.min.js", defer: true },
			],

			link: [
				{
					href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",
					rel: "stylesheet",
				},
				{
					rel: "stylesheet",
					href: "/assets/libs/simplebar/dist/simplebar.min.css",
				},
				{
					rel: "stylesheet",
					href: "/assets/libs/bootstrap-icons/font/bootstrap-icons.min.css",
				},
				{
					rel: "stylesheet",
					href: "/assets/libs/scrollcue/scrollCue.css",
				},
				{
					rel: "stylesheet",
					href: "/assets/fonts/css/boxicons.min.css",
				},
				{ rel: "stylesheet", href: "/assets/css/theme.min.css" },

				{
					rel: "icon",
					type: "image/x-icon",
					href: "/assets/images/favicon/favicon.ico",
				},
				{
					rel: "icon",
					sizes: "16x16",
					type: "image/png",
					href: "/assets/images/favicon/favicon-16x16.png",
				},
				{
					rel: "icon",
					sizes: "192x192",
					type: "image/png",
					href: "/assets/images/favicon/android-chrome-192x192.png",
				},
				{
					rel: "icon",
					sizes: "512x512",
					type: "image/png",
					href: "/assets/images/favicon/android-chrome-512x512.png",
				},
				{
					rel: "apple-touch-icon",
					href: "/assets/images/favicon/apple-touch-icon.png",
				},
			],
		},
	},
});
