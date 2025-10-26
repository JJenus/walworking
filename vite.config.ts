import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
	plugins: [
		react(),
		Sitemap({
			hostname: "https://walworkingtechnologiesltd.com/", // Replace with your domain
			dynamicRoutes: [
				"/",
				"/about",
				"/services",
				"/products",
				"/projects",
				"/training",
				"/contact",
			],
		}),
	],
	optimizeDeps: {
		exclude: ["lucide-react"],
	},
});
