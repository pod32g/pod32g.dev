<script lang="ts">
	import { onMount } from "svelte";

	let top = true;
	let about = false;

	onMount(() => window.scrollTo(0, 0));

	$: document.title = "@pod32g's site";

	window.onscroll = () => {
		if (window.pageYOffset === 0) top = true;
		else top = false;

		if (window.pageYOffset > 100) about = true;
		else about = false;
	};

	const scrollIntoView = (id: string) => {
		const element = document.getElementById(id);
		if (element)
			element.scrollIntoView({ block: "end", behavior: "smooth" });
	};
</script>

<main>
	<nav
		class={`navbar navbar-expand-lg navbar-dark fixed-top navigationBar ${
			!top && "bg-dark"
		}`}
	>
		<div class="container">
			<a class="navbar-brand" href="https://pod32g.com">@pod32g</a>
			<div>
				<ul class="navbar-nav mr-auto">
					<li class={`nav-item ${!about && "active"}`}>
						<a
							class="nav-link"
							href="#home"
							on:click={() => scrollIntoView("homeView")}
							>Home <span class="sr-only">(current)</span></a
						>
					</li>
					<li class={`nav-item ${about && "active"}`}>
						<a
							class="nav-link"
							href="#about"
							on:click={() => scrollIntoView("aboutMe")}>About</a
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<div class="view-container mainView background text-white" id="homeView">
		<h3>Hello World</h3>
		<h1 class="title">
			I am <span class="font-weight-bold title">David Perez</span>
		</h1>
		<h4>Web developer @ Bosch</h4>
		<div class="icons">
			<a
				href="https://github.com/pod32g/"
				target="_blank"
				rel="noopener noreferrer"
				class="icon"
				><i class="fab fa-github" />
			</a>
			<a
				href="https://twitter.com/pod32g"
				target="_blank"
				rel="noopener noreferrer"
				class="icon"
				><i class="fab fa-twitter" />
			</a>
			<a
				href="https://www.linkedin.com/in/david-ivan-perez/"
				target="_blank"
				rel="noopener noreferrer"
				class="icon"><i class="fab fa-linkedin" /></a
			>
		</div>
	</div>
	<section class="container-fluid" id="aboutMe">
		<div class="view-container about">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="text-center mx-auto">
							<h2>About Me</h2>
							<div class="d-flex justify-content-center">
								<div class="col-4">
									<hr />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<div class="text-center mx-auto">
							<h2>Hello, I'm David</h2>
							<ul class="mb-0 list-inline text-center about-work">
								<li class="list-inline-item mr-0 text-muted">
									Web developer
								</li>
								<li class="list-inline-item mr-0 text-muted">
									Musician
								</li>
								<li class="list-inline-item mr-0 text-muted">
									Full-time geek
								</li>
							</ul>
						</div>
					</div>
					<div class="col-lg-12 text-center mx-auto">
						<p class="text-muted mx-auto mt-2">
							I'm an enthusiastic Web developer eager to
							contribute to team success through hard work,
							attention to detail and excellent organizational
							skills. Clear understanding of Backend and front end
							development. Motivated to learn, grow and excel as a
							software developer.
						</p>
					</div>
				</div>
				<div class="row mt-5">
					<div class="col-lg-6 progress-bars">
						<div class="fix">
							<div class="text-dark font-weight-bold float-left">
								React/React Native
							</div>
							<div class="text-muted float-right">70%</div>
						</div>
						<div class="progress">
							<div
								class="progress-bar"
								role="progressbar"
								style="width: 70%;"
							/>
						</div>
						<div class="fix">
							<div class="text-dark font-weight-bold float-left">
								Typescript + Express.js
							</div>
							<div class="text-muted float-right">80%</div>
						</div>
						<div class="progress">
							<div
								class="progress-bar"
								role="progressbar"
								style="width: 80%;"
							/>
						</div>
						<div class="fix">
							<div class="text-dark font-weight-bold float-left">
								Amazon Web Services
							</div>
							<div class="text-muted float-right">60%</div>
						</div>
						<div class="progress">
							<div
								class="progress-bar"
								role="progressbar"
								style="width: 60%;"
							/>
						</div>
					</div>
					<div class="col-lg-6 progress-bars">
						<div class="fix">
							<div class="text-dark font-weight-bold float-left">
								Python + Django
							</div>
							<div class="text-muted float-right">80%</div>
						</div>
						<div class="progress">
							<div
								class="progress-bar"
								role="progressbar"
								style="width: 80%;"
							/>
						</div>
						<div class="fix">
							<div class="text-dark font-weight-bold float-left">
								Docker
							</div>
							<div class="text-muted float-right">60%</div>
						</div>
						<div class="progress">
							<div
								class="progress-bar"
								role="progressbar"
								style="width: 60%;"
							/>
						</div>
						<div class="fix">
							<div class="text-dark font-weight-bold float-left">
								Kubernetes
							</div>
							<div class="text-muted float-right">50%</div>
						</div>
						<div class="progress">
							<div
								class="progress-bar"
								role="progressbar"
								style="width: 50%;"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	:global(.navigationBar) {
		padding: 12px 0 !important;
		transition: all 0.5s ease-in-out;
		background-color: transparent;
	}

	.view-container {
		display: flex;
		align-items: center;
		flex-direction: column;
		text-align: center;
		min-height: 100vh;
	}

	.mainView {
		justify-content: center;
		align-items: center;
	}

	.icons {
		display: flex;
		flex-direction: row;
	}

	.icon {
		margin-right: 15px;
		color: white;
		font-size: 2rem;
		font-weight: 400;
	}

	.fa_icon:hover {
		color: #dcdcdc;
	}

	.background {
		background: url("../static/background.webp") no-repeat center center
			fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		position: relative;
		width: 100%;

		box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.418);
	}

	.background::before {
		background-color: rgba(240, 216, 171, 0.25);
		display: block;
		content: "";
		position: absolute;
		height: inherit;
		width: inherit;
	}

	@media screen and (max-width: 320px) {
		.title {
			font-weight: 400;
			line-height: 1.2;
			text-transform: capitalize;
		}
	}
	@media screen and (min-width: 1200px) {
		.title {
			font-size: 72px;
			font-weight: 400;
			line-height: 1.2;
			text-transform: capitalize;
		}
	}

	.about {
		padding: 100px 0px 0px 0px;
		display: flex;
		align-items: center;
	}

	.about-work li {
		font-size: 18px;
		font-weight: 600;
	}
	.about-work li:not(:last-child)::after {
		content: "";
		height: 3px;
		width: 3px;
		border-radius: 50%;
		background-color: #757575;
		margin: 0px 12px;
		position: relative;
		display: inline-block;
		top: -3px;
	}

	.progress-bars .progress {
		height: 4px;
		margin-bottom: 40px;
		margin-top: 10px;
	}
	.progress-bars .progress-bar {
		background: black;
	}

	.fix::after {
		display: block;
		clear: both;
		content: "";
	}

	:global(body) {
		padding: 0;
	}

	:global(*) {
		scrollbar-width: thin;
		scrollbar-color: #110b68 transparent;
	}

	:global(*::-webkit-scrollbar) {
		width: 5px; /* Remove scrollbar space */
		background: transparent; /* Optional: just make scrollbar invisible */
	}

	:global(*::-webkit-scrollbar-thumb) {
		background: #110b68;
	}
</style>
