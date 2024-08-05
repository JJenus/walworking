<script setup lang="ts">
	const active = ref("Home");
	const { activeNav, navs } = useAppSettings();

	const route = useRoute();

	const isActive = (path: string) => {
		return route.path === path;
	};

	onMounted(() => {});
</script>

<template>
	<div>
		<header>
			<nav
				class="navbar navbar-expand-lg transparent navbar-transparent navbar-dark"
			>
				<div class="container px-3">
					<NuxtLink class="navbar-item" to="/">
						<img
							style="width: 40px"
							src="/assets/images/logo/low-wb.png"
						/>
					</NuxtLink>
					<button
						class="navbar-toggler offcanvas-nav-btn"
						type="button"
					>
						<i class="bi bi-list"></i>
					</button>
					<div
						class="offcanvas offcanvas-start offcanvas-nav"
						style="width: 20rem"
					>
						<div class="offcanvas-header">
							<a href="index-2.html" class="text-inverse"
								><img src="/assets/images/logo/logo.svg"
							/></a>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</div>
						<div class="offcanvas-body pt-0 align-items-center">
							<ul
								class="navbar-nav mx-auto align-items-lg-center"
							>
								<li v-for="nav in navs" lass="nav-item">
									<NuxtLink
										class="nav-link"
										:to="nav.path"
										role="button"
									>
										<span
											:class="
												isActive(nav.path)
													? 'text-primary fw-bold'
													: ''
											"
										>
											{{ nav.name }}
										</span>
									</NuxtLink>
								</li>
							</ul>
							<div
								class="d-none mt-3 mt-lg-0 d-flex align-items-center"
							>
								<a class="btn btn-light mx-2">Login</a>
								<a class="btn btn-primary">Create account</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	</div>
</template>

<style>
	.glass-container {
		background: rgba(
			255,
			255,
			255,
			0.2
		); /* Adjust the alpha value for transparency */
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.9); /* Optional: Add a subtle shadow */
	}
</style>
