<script setup>
	const route = useRoute();
	const active = ref("all");

	const navs = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "About",
			path: "/about",
		},
		{
			name: "Contact-us",
			path: "/contact-us",
		},
	];

	const loaded = useCookie("reload", { maxAge: 60 * 60 * 24 });
	loaded.value = false;
	const setActive = (data) => {
		const a = active.value.toLocaleLowerCase() === data.toLocaleLowerCase();

		return a ? "active border-bottom border-danger" : "";
	};

	onMounted(() => {
		const paths = route.path.split("/");
		if (paths[2]) {
			active.value = paths[2];
		} else if (!paths[1]) {
			active.value = "home";
		}
	});

	onMounted(() => {});
</script>

<template>
	<div class="position-relative">
		<Header />
		<main class="pt-8 pt-lg-0">
			<slot />
		</main>
		<Footer />
	</div>
</template>

<style scoped>
	.hide-scrollbar {
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE and Edge */
	}

	.hide-scrollbar::-webkit-scrollbar {
		display: none; /* WebKit (Chrome, Safari, etc.) */
	}
</style>
