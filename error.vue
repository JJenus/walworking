<script setup lang="ts">
	const props = defineProps({
		error: Object,
	});

	const fatal = props.error?.statusCode === 404 ? false : true;
	// console.log(fatal);
	console.log(props.error);

	const handleError = () => clearError({ redirect: "/" });
</script>

<template>
	<main class="w-100">
		<!--404 error start-->
		<div class="container d-flex flex-column overflow-hidden">
			<div
				class="row align-items-center justify-content-center min-vh-100 text-center"
			>
				<div class="col-lg-6 col-12">
					<div class="position-relative mb-7">
						<div
							class="scene d-none d-lg-block"
							data-relative-input="true"
						>
							<div
								class="position-absolute top-0"
								data-depth="0.5"
							>
								<img src="/assets//images/error/stars.svg" />
							</div>
						</div>
						<div
							class="scene d-none d-lg-block"
							data-relative-input="true"
						>
							<div class="position-absolute" data-depth="0.1">
								<img src="/assets//images/error/rocket.svg" />
							</div>
						</div>
						<div
							class="scene d-none d-lg-block"
							data-relative-input="true"
						>
							<div
								class="position-absolute top-0 start-50 translate-middle"
								style="margin-top: -80px; margin-left: -80px"
								data-depth="0.1"
							>
								<img src="/assets//images/error/globe.svg" />
							</div>
						</div>
						<div
							class="scene d-none d-lg-block"
							data-relative-input="true"
						>
							<div
								class="position-absolute start-50"
								data-depth="0.1"
							>
								<img
									src="/assets//images/error/astronut.svg"
									style="
										top: -110px;
										position: absolute;
										bottom: 0;
									"
								/>
							</div>
						</div>
						<div class="position-relative z-n1">
							<img
								src="/assets//images/error/404-number.svg"
								class="img-fluid"
							/>
						</div>
						<div
							class="scene d-none d-lg-block"
							data-relative-input="true"
						>
							<div
								class="position-absolute start-100 bottom-0"
								data-depth="0.1"
							>
								<img src="/assets//images/error/planet.svg" />
							</div>
						</div>
					</div>

					<h2>Oops page not found</h2>
					<p>The page you are looking for is not available.</p>

					<button @click="handleError()" class="btn btn-primary"
						>Go back to home</button
					>
				</div>
			</div>
		</div>
		<div class="position-absolute end-0 bottom-0 m-4 d-inone">
			<div class="dropdown">
				<button
					class="btn btn-light btn-icon rounded-circle d-flex align-items-center"
					type="button"
					aria-expanded="false"
					data-bs-toggle="dropdown"
					aria-label="Toggle theme (auto)"
				>
					<i class="bi theme-icon-active"></i>
					<span class="visually-hidden bs-theme-text"
						>Toggle theme</span
					>
				</button>
				<ul
					class="dropdown-menu dropdown-menu-end shadow"
					aria-labelledby="bs-theme-text"
				>
					<li>
						<button
							type="button"
							class="dropdown-item d-flex align-items-center"
							data-bs-theme-value="light"
							aria-pressed="false"
						>
							<i class="bi theme-icon bi-sun-fill"></i>
							<span class="ms-2">Light</span>
						</button>
					</li>
					<li>
						<button
							type="button"
							class="dropdown-item d-flex align-items-center"
							data-bs-theme-value="dark"
							aria-pressed="false"
						>
							<i class="bi theme-icon bi-moon-stars-fill"></i>
							<span class="ms-2">Dark</span>
						</button>
					</li>
					<li>
						<button
							type="button"
							class="dropdown-item d-flex align-items-center active"
							data-bs-theme-value="auto"
							aria-pressed="true"
						>
							<i class="bi theme-icon bi-circle-half"></i>
							<span class="ms-2">Auto</span>
						</button>
					</li>
				</ul>
			</div>
		</div>
		<!--404 error end-->
	</main>
</template>
