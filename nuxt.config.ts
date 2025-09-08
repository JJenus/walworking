// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: [
		"nuxt-swiper", 
		"@nuxt/image",
		"@nuxtjs/seo",
		"@vueuse/nuxt"
	],

	ssr: true,

	// Modern CSS configuration
	css: [
		'bootstrap/dist/css/bootstrap.min.css',
		'~/assets/css/main.scss'
	],

	// Image optimization
	image: {
		format: ["webp", "avif", "jpeg", "jpg", "png", "gif"],
		screens: {
			xs: 320,
			sm: 576,
			md: 768,
			lg: 992,
			xl: 1200,
			xxl: 1400,
			"2xl": 1536,
		},
		quality: 85,
		densities: [1, 2],
	},

	// SEO Configuration
	site: {
		url: 'https://walworkingtechnologies.com',
		name: 'WalWorking Technologies',
		description: 'Expert fire protection, construction, and consulting services tailored to your needs.',
		defaultLocale: 'en',
	},

	// Runtime configuration
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

	// App configuration with modern meta tags
	app: {
		head: {
			htmlAttrs: {
				lang: 'en'
			},
			meta: [
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					name: "theme-color",
					content: "#226b8d"
				},
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				{
					name: "twitter:title",
					content: "WalWorking Technologies",
				},
				{
					name: "twitter:description",
					content: "Expert fire protection, construction, and consulting services tailored to your needs.",
				},
				{
					name: "twitter:image",
					content: "https://walworkingtechnologies.vercel.app/assets/images/logo/logo-w.png",
				},
				{
					property: "og:title",
					content: "WalWorking Technologies",
				},
				{
					property: "og:description",
					content: "Leading provider of fire safety, construction, and consulting solutions for businesses and individuals.",
				},
				{
					property: "og:image",
					content: "https://walworkingtechnologies.vercel.app/assets/images/logo/logo-w.png",
				},
				{
					property: "og:url",
					content: "https://walworkingtechnologies.vercel.app/",
				},
				{
					property: "og:type",
					content: "website",
				},
			],
			link: [
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
				{
					rel: "manifest",
					href: "/assets/images/favicon/site.webmanifest",
				},
			],
		},
	},

	// Build optimization
	build: {
		transpile: ['gsap']
	},

	// Vite configuration for modern bundling
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/css/variables.scss" as *;'
				}
			}
		},
		optimizeDeps: {
			include: ['bootstrap']
		}
	},

	// TypeScript configuration
	typescript: {
		strict: true,
		typeCheck: true
	},

	// Experimental features
	experimental: {
		payloadExtraction: false,
		viewTransition: true
	},

	// Nitro configuration for better performance
	nitro: {
		compressPublicAssets: true,
		minify: true
	}
});