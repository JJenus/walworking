<script setup>
	const CONFIG = useRuntimeConfig().public;

	useSeoMeta({
		title: `${CONFIG.APP}`,
	});
</script>

<template>
	<div>
		<!--hero start-->
		<section
			class="jarallax py-9 hero-agency mb-8 mb-lg-0"
			data-jarallax
			data-speed="0.4"
		>
			<img
				class="jarallax-img"
				src="/assets/images/wal/back-view-firefighters-trying-put-out-wildfire.jpg"
				alt="agency"
			/>
			<div class="position-absolute start-0 end-0">
				<div class="container pt-15">
					<div class="row justify-content-between">
						<div
							class="order-2 order-lg-1 col-xl-5 col-lg-7 col-12"
							data-cue="zoomIn"
						>
							<div class="text-center text-lg-start">
								<div class="mb-4 text-white-stable">
									<small class="text-uppercase ls-lg"
										>WalWorking Technologies</small
									>
									<h1
										class="mb-3 mt-3 display-3 text-white-stable"
									>
										Fire Service, Construction and
										Consulting.
									</h1>
									<p class="lead mb-0">
										Welcome to Wal Working Technologies
										Limited – Your Trusted Partner in Fire
										Protection and Safety Solutions in
										Nigeria.
									</p>
								</div>

								<a href="/" class="btn btn-primary"
									>Contact us</a
								>
							</div>
						</div>
						<div class="col-12 col-lg-3 order-1 order-lg-2 pt-10 pt-lg-0">
							<div class="d-flex align-items-center justify-content-center">
								<img
									class="w-50 w-lg-100"
									src="/assets/images/logo/logo-w.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--hero end-->

		<!--Logo section start-->
		<div class="container mt-5 mt-lg-0" data-cue="fadeIn">
			<div class="row border-top border-bottom fs-1">
				<div
					class="col-md-4 border-end-md border-bottom border-bottom-md-0 py-3"
					data-cue="zoomIn"
				>
					<div
						class="d-flex justify-content-center align-items-center text-center w-100"
					>
						<i
							class="fa-solid fa-fire-extinguisher text-danger me-3"
						></i>
						Fire Service
					</div>
				</div>
				<div
					class="col-md-4 border-end-md border-bottom border-bottom-md-0 py-3"
					data-cue="zoomIn"
				>
					<div
						class="d-flex justify-content-center align-items-center text-center w-100"
					>
						<i
							class="fa-solid fa-helmet-safety me-3 text-warning"
						></i>
						Construction
					</div>
				</div>
				<div class="col-md-4 py-3" data-cue="zoomIn">
					<div
						class="d-flex justify-content-center align-items-center text-center w-100"
					>
						<i class="bi bi-window-dock me-3 text-success"></i>
						Consulting
					</div>
				</div>
			</div>
		</div>
		<!--Logo section end-->

		<!--Project we done start-->
		<section class="my-xl-9 my-5 d-none">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 offset-lg-3">
						<div class="text-center mb-xl-7 mb-5" data-cue="fadeIn">
							<small class="text-uppercase ls-md fw-semibold"
								>Project we done</small
							>

							<h2 class="my-3">Featured work</h2>
							<p class="mb-0">
								We're a web design agency creating next‑level
								websites by strategically blending user
								experience and brand storytelling.
							</p>
						</div>
					</div>
				</div>
				<div class="table-responsive-lg">
					<div class="row flex-nowrap pb-4 pb-lg-0 me-5 me-lg-0">
						<div class="col-lg-4 col-md-6 col-12">
							<div data-cue="zoomIn">
								<figure
									class="lift position-relative btn-arrow mb-4"
								>
									<a href="portfolio-single.html">
										<img
											src="/assets//images/portfolio/portfolio-img-1.jpg"
											alt="portfolio-2"
											class="img-fluid rounded-3"
										/>

										<div
											class="icon-shape icon-lg bg-white rounded-circle icon-arrow shadow-lg"
										>
											<i class="bi bi-arrow-up-right"></i>
										</div>
									</a>
								</figure>

								<h2 class="lh-base h4">
									<a
										href="portfolio-single.html"
										class="text-reset"
										>Chat GPT for Figma</a
									>
								</h2>
								<p class="mb-0 text-body-tertiary fw-medium">
									Development
								</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-12">
							<div data-cue="zoomIn">
								<figure
									class="lift position-relative btn-arrow mb-4"
								>
									<a href="portfolio-single.html">
										<img
											src="/assets//images/portfolio/portfolio-img-5.jpg"
											alt="portfolio-2"
											class="img-fluid rounded-3"
										/>
										<div
											class="icon-shape icon-lg bg-white rounded-circle icon-arrow shadow-lg"
										>
											<i class="bi bi-arrow-up-right"></i>
										</div>
									</a>
								</figure>

								<h2 class="lh-base h4">
									<a
										href="portfolio-single.html"
										class="text-reset"
										>Virtual reality</a
									>
								</h2>
								<p class="mb-0 text-body-tertiary fw-medium">
									UI/UX Design
								</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-12">
							<div data-cue="zoomIn">
								<figure
									class="lift position-relative btn-arrow mb-4"
								>
									<a href="portfolio-single.html">
										<img
											src="/assets//images/portfolio/portfolio-img-4.jpg"
											alt="portfolio-2"
											class="img-fluid rounded-3"
										/>
										<div
											class="icon-shape icon-lg bg-white rounded-circle icon-arrow shadow-lg"
										>
											<i class="bi bi-arrow-up-right"></i>
										</div>
									</a>
								</figure>

								<div data-cue="zoomIn">
									<h2 class="lh-base h4">
										<a
											href="portfolio-single.html"
											class="text-reset"
											>AI avatar application</a
										>
									</h2>
									<p
										class="mb-0 text-body-tertiary fw-medium"
									>
										Web Development
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12" data-cue="fadeIn">
						<div class="text-center my-5">
							<a href="#" class="btn btn-primary"
								>Read case study</a
							>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--Project we done end-->

		<!--Our solutions start-->
		<section class="py-xl-9 py-5 bg-light">
			<div class="container">
				<div class="row">
					<div class="col-xl-5 col-md-7" data-cue="fadeIn">
						<div class="mb-xl-7 mb-5">
							<small class="text-uppercase ls-md fw-semibold"
								>our solutions</small
							>
							<h2 class="h1 mb-3 mt-4">
								Quality Assurance & Control
							</h2>
							<p class="mb-0 text-body">
								Our equipment and services are provided to the
								highest standards. We ensure that everything we
								do is governed by our core-values, and that the
								service we provide is second to none.
							</p>
						</div>
					</div>
				</div>
				<div class="row g-4" data-cue="fadeIn">
					<div class="col-lg-6 col-md-6 col-12">
						<div
							class="card card-lift h-100"
							data-cue="zoomIn"
							data-duration="500"
						>
							<div class="card-body p-5">
								<div class="d-lg-flex">
									<div
										class="p-3 icon-xl icon-shape rounded bg-danger bg-opacity-10 border border-danger-subtle"
									>
										<i
											class="fa-solid fa-fire-extinguisher text-danger fs-3"
										></i>
									</div>
									<div class="ms-lg-5 mt-4 mt-lg-0">
										<div class="mb-4">
											<h3>Fire Fighting Equipments</h3>
											<p class="mb-0">
												We provide comprehensive
												services for fire fighting
												equipment, including engineering
												design, supply, installation,
												and maintenance.
											</p>
										</div>

										<a
											href="#!"
											class="icon-link icon-link-hover"
										>
											Learn More
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="14"
												fill="currentColor"
												class="bi bi-arrow-right"
												viewBox="0 0 16 16"
											>
												<path
													fill-rule="evenodd"
													d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-12">
						<div
							class="card card-lift h-100"
							data-cue="zoomIn"
							data-duration="800"
						>
							<div class="card-body p-5">
								<div class="d-lg-flex">
									<div
										class="p-3 icon-xl icon-shape rounded bg-success bg-opacity-10 border border-success-subtle"
									>
										<i
											class="bx bxs-alarm-exclamation bx-tada bx-flip-horizontal fs-3 text-success"
										></i>
									</div>
									<div class="ms-lg-5 mt-4 mt-lg-0">
										<div class="mb-4">
											<h3>Fire Detection System</h3>
											<p class="mb-0">
												We do fire alarm system
												engineering design, supply,
												installation and maintenance.
											</p>
										</div>

										<a
											href="#!"
											class="icon-link icon-link-hover"
										>
											Learn More
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="14"
												fill="currentColor"
												class="bi bi-arrow-right"
												viewBox="0 0 16 16"
											>
												<path
													fill-rule="evenodd"
													d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-12">
						<div
							class="card card-lift h-100"
							data-cue="zoomIn"
							data-duration="800"
						>
							<div class="card-body p-5">
								<div class="d-lg-flex">
									<div
										class="p-3 icon-xl icon-shape rounded bg-warning bg-opacity-10 border border-warning-subtle"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											fill="currentColor"
											class="bi bi-palette2 text-warning"
											viewBox="0 0 16 16"
										>
											<path
												d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a2.99 2.99 0 0 1-2.121-.879A2.99 2.99 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188v5.647zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM15 15v-4H9.258l-4.015 4H15zM0 .5v12.495V.5z"
											/>
											<path
												d="M0 12.995V13a3.07 3.07 0 0 0 0-.005z"
											/>
										</svg>
									</div>
									<div class="ms-lg-5 mt-4 mt-lg-0">
										<div class="mb-4">
											<h3>Personal Safety Equipments</h3>
											<p class="mb-0">
												We supply top-quality Personal
												Protective Equipment designed to
												ensure safety and protection in
												various environments.
											</p>
										</div>

										<a
											href="#!"
											class="icon-link icon-link-hover"
										>
											Learn More
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="14"
												fill="currentColor"
												class="bi bi-arrow-right"
												viewBox="0 0 16 16"
											>
												<path
													fill-rule="evenodd"
													d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-12">
						<div
							class="card card-lift h-100"
							data-cue="zoomIn"
							data-duration="1000"
						>
							<div class="card-body p-5">
								<div class="d-lg-flex">
									<div
										class="p-3 icon-xl icon-shape rounded bg-info bg-opacity-10 border border-info-subtle"
									>
										<i
											class="bi bi-window-dock fs-3 text-info bx-fade-up"
										></i>
									</div>
									<div class="ms-lg-5 mt-4 mt-lg-0">
										<div class="mb-4">
											<h3>Quality Assurance</h3>
											<p class="mb-0">
												We ensure top-tier Quality
												Assurance processes to maintain
												the highest standards in our
												products and services.
											</p>
										</div>

										<a
											href="#!"
											class="icon-link icon-link-hover"
										>
											Learn More
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="14"
												fill="currentColor"
												class="bi bi-arrow-right"
												viewBox="0 0 16 16"
											>
												<path
													fill-rule="evenodd"
													d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--Our solutions end-->

		<!--Modern tech start-->
		<section class="py-xl-9 py-5 bg-light">
			<div class="container">
				<div class="row">
					<div class="col-xl-6 offset-xl-3 col-md-12 col-12">
						<div class="text-center mb-xl-7 mb-5" data-cue="fadeIn">
							<small class="text-uppercase ls-md fw-semibold"
								>safety is priority</small
							>
							<h2 class="my-3">Our Mission</h2>
							<p class="mb-0 text-body">
								Our Mission is to be 100% committed to
								flawlessly executing our services with
								relentless focus on safety, efficiency, rapid
								response, technical expertise and growth
								mindset.
							</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-10 offset-lg-1 col-md-12 col-12">
						<div
							class="row row-cols-lg-5 row-cols-md-4 row-cols-2 justify-content-center g-5"
						>
							<div class="col" data-cue="slideInDown">
								<figure class="text-center mb-0">
									<img
										src="/assets/images/wal/safety/QHSE-cover.png"
										alt="logo"
										class="w-100"
									/>
								</figure>
							</div>
							<div class="col" data-cue="slideInDown">
								<figure class="text-center mb-0">
									<img
										src="/assets/images/wal/safety/qhse.png"
										alt="logo"
										class="w-100"
									/>
								</figure>
							</div>
							<div class="col" data-cue="slideInDown">
								<figure class="text-center mb-0">
									<img
										src="/assets/images/wal/safety/safe-logo.png"
										alt="logo"
										class="w-100"
									/>
								</figure>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--Modern tech end-->

		<!--Who we are start-->
		<section class="my-xl-9 my-5">
			<div class="container">
				<div class="row g-4">
					<div
						class="col-xl-5 col-lg-6 col-12"
						data-cue="slideInLeft"
					>
						<div class="mb-4">
							<small class="text-uppercase ls-md fw-semibold"
								>who we are</small
							>
							<h2 class="h1 mt-4 mb-3">
								Believes in the power of principles.
							</h2>
							<p class="mb-3">
								At the heart of everything we do, Wal-Working
								Technologist Limited will be governed by our
								core values. Our values reflect what is
								important to us, and what we believe will drive
								success for ourselves and our client.
							</p>
						</div>

						<a href="/about" class="icon-link icon-link-hover">
							More about us
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="14"
								fill="currentColor"
								class="bi bi-arrow-right"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
								/>
							</svg>
						</a>
					</div>
					<div class="col-xl-6 offset-xl-1 col-lg-6 col-12">
						<div
							class="row g-4"
							data-cues="slideInUp"
							data-delay="1000"
						>
							<div class="col-lg-6 col-md-6 col-12">
								<a href="#!">
									<div
										class="rounded-3 card-lift"
										style="
											background-image: url(assets/images/wal/team/team1.png);
											background-repeat: no-repeat;
											height: 386px;
											background-size: cover;
										"
									></div>
								</a>
							</div>
							<div class="col-lg-6 col-md-6 col-12">
								<a href="#!">
									<div
										class="mb-4 rounded-3 card-lift"
										style="
											background-image: url(assets/images/wal/portrait-smiling-firefighter.jpg);
											background-repeat: no-repeat;
											height: 180px;
											background-size: cover;
										"
									></div>
								</a>
								<a href="#!">
									<div
										class="mb-2 rounded-3 card-lift"
										style="
											background-image: url(assets/images/wal/team/smiling-portrait.jpg);
											background-repeat: no-repeat;
											height: 180px;
											background-size: cover;
										"
									></div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--Who we are end-->

		<!--Expert team start-->
		<section>
			<div class="container" data-cue="fadeIn">
				<div class="row border-top border-bottom">
					<div
						class="col-md-4 border-end-md border-bottom border-bottom-md-0"
						data-cue="zoomIn"
					>
						<div class="text-center py-lg-5 p-4">
							<div class="mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									fill="currentColor"
									class="bi bi-people-fill text-primary"
									viewBox="0 0 16 16"
								>
									<path
										d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
									/>
								</svg>
							</div>

							<h4>Expert team</h4>
							<p class="mb-0 d-none">
								Vivamus eget neque lacus. Pellentesque egauris
								ex.
							</p>
						</div>
					</div>
					<div
						class="col-md-4 border-end-md border-bottom border-bottom-md-0"
						data-cue="zoomIn"
					>
						<div class="text-center py-lg-5 p-4">
							<div class="mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									fill="currentColor"
									class="bi bi-trophy-fill text-primary"
									viewBox="0 0 16 16"
								>
									<path
										d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"
									/>
								</svg>
							</div>

							<h4>Award winning agency</h4>
							<p class="mb-0"></p>
						</div>
					</div>
					<div class="col-md-4" data-cue="zoomIn">
						<div class="text-center py-lg-5 p-4">
							<div class="mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									fill="currentColor"
									class="bi bi-stars text-primary"
									viewBox="0 0 16 16"
								>
									<path
										d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"
									/>
								</svg>
							</div>

							<h4>10 Year Exp.</h4>
							<p class="mb-0"></p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--Expert team end-->

		<!--Hire jamstack start-->
		<section class="pattern-square bg-info bg-opacity-10">
			<div class="container position-relative z-1 py-xl-9 py-6">
				<div class="row">
					<div class="col-lg-10 offset-lg-1 col-md-12">
						<div class="row align-items-center g-5">
							<div
								class="col-lg-6 col-12 order-2"
								data-cue="slideInLeft"
							>
								<div class="me-xl-7">
									<div class="mb-5">
										<h2 class="h1 mb-4">
											Rely on experienced professionals
											for safe and reliable fire services,
											construction, and consultancy.
										</h2>
										<p class="mb-0">
											Schedule a free consultation with
											one of our experts to guide your
											next steps. Expert advice is always
											valuable—and it's completely free!
										</p>
									</div>
									<div class="mb-5">
										<ul class="list-unstyled">
											<li class="mb-2 d-flex">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="20"
													height="20"
													fill="currentColor"
													class="bi bi-dot"
													viewBox="0 0 16 16"
												>
													<path
														d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
													/>
												</svg>
												<span class="ms-1"
													>Unsure about the best
													approach?</span
												>
											</li>
											<li class="mb-2 d-flex">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="20"
													height="20"
													fill="currentColor"
													class="bi bi-dot"
													viewBox="0 0 16 16"
												>
													<path
														d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
													/>
												</svg>
												<span class="ms-1"
													>Need guidance on your next
													move?</span
												>
											</li>
											<li class="mb-2 d-flex">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="20"
													height="20"
													fill="currentColor"
													class="bi bi-dot"
													viewBox="0 0 16 16"
												>
													<path
														d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
													/>
												</svg>
												<span class="ms-1"
													>Uncertain about how to plan
													and execute your project?
												</span>
											</li>
										</ul>
									</div>
									<div
										class="d-md-flex align-items-center justify-content-between"
									>
										<div
											class="d-flex align-items-center mb-3 mb-md-0 small"
										>
											<div
												class="d-flex align-items-center"
											>
												<img
													src="/assets//images/avatar/avatar-7.jpg"
													alt="Avatar"
													class="avatar avatar-lg rounded-circle"
												/>
												<div class="ms-3">
													<h5 class="mb-0">
														Jitu Chauhan
													</h5>
													<small class="me-4"
														>Head of Sales</small
													>
													<small
														>sales@blockui.com</small
													>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								class="col-lg-6 col-12 order-lg-2"
								data-cue="slideInRight"
							>
								<div class="card shadow-sm">
									<div class="card-body">
										<form
											class="row needs-validation g-3"
											novalidate
										>
											<div class="col-lg-12">
												<div class="mb-3">
													<h3 class="mb-0">
														Schedule a free estimate
														call
													</h3>
												</div>
											</div>
											<div class="col-md-6 col-12">
												<label
													for="ScheduleFirstnameInput"
													class="form-label"
												>
													First Name
													<span class="text-danger"
														>*</span
													>
												</label>
												<input
													type="text"
													class="form-control"
													id="ScheduleFirstnameInput"
													required
												/>
												<div class="invalid-feedback">
													Please enter firstname.
												</div>
											</div>
											<div class="col-md-6 col-12">
												<label
													for="scheduleLastnameInput"
													class="form-label"
												>
													Last Name
													<span class="text-danger"
														>*</span
													>
												</label>
												<input
													type="text"
													class="form-control"
													id="scheduleLastnameInput"
													required
												/>
												<div class="invalid-feedback">
													Please enter lastname.
												</div>
											</div>
											<div class="col-md-12">
												<label
													for="scheduleEmailInput"
													class="form-label"
												>
													Email
													<span class="text-danger"
														>*</span
													>
												</label>
												<input
													type="email"
													class="form-control"
													id="scheduleEmailInput"
													required
												/>
												<div class="invalid-feedback">
													Please enter email.
												</div>
											</div>
											<div class="col-md-12">
												<label
													for="scheduleTextarea"
													class="form-label"
													>Message</label
												>
												<textarea
													class="form-control"
													id="scheduleTextarea"
													placeholder="Write to us"
													rows="3"
													required
												></textarea>
												<div class="invalid-feedback">
													Please write message.
												</div>
											</div>
											<div class="d-grid">
												<button
													class="btn btn-primary"
													type="submit"
												>
													Let’s work together!
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--Hire jamstack end-->
	</div>
</template>
