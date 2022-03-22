<script>
	import Footer from '../components/footer.svelte';
	import Project from '../components/project.svelte';
	import Arrows from '../components/arrows.svelte';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import MySkills from '../components/MySkills.svelte';
	let emailInput = '';

	async function subscribe(email) {
		await fetch('https://argon.maxc.codes/subscribe/' + email);
	}

	async function status(email) {
		const status = await fetch('https://argon.maxc.codes/status/' + email);
		return await status.json();
	}

	async function subscribe_handle() {
		const statusResult = await status(emailInput);
		if (statusResult == 'subscribed') {
			goto('/alreadysubscribed');
			return;
		}
		await subscribe(emailInput);
		goto('/subscribed');
	}

	if (browser) {
		if ('paintWorklet' in CSS) {
			//@ts-ignore
			CSS.paintWorklet.addModule('./dots-worklet.js');
		}
		if ('registerProperty' in CSS) {
			//@ts-ignore
			CSS.registerProperty({
				name: '--circle-color',
				syntax: '<color>',
				initialValue: '#EEEDEC',
				inherits: true
			});
			//@ts-ignore
			CSS.registerProperty({
				name: '--circle-secondary-color',
				syntax: '<color>',
				initialValue: 'pink',
				inherits: true
			});
			//@ts-ignore
			CSS.registerProperty({
				name: '--circle-size',
				syntax: '<length-percentage>',
				initialValue: '100px',
				inherits: true
			});
			//@ts-ignore
			CSS.registerProperty({
				name: '--circle-spacing',
				syntax: '<length-percentage>',
				initialValue: '100px',
				inherits: true
			});
		}
	}
</script>

<svelte:head>
	<title>Max's portfolio</title>
	<meta
		name="description"
		content="Hey there! I'm Max I love to build fullstack websites, games, and apps with all sorts of tools like Vue, Express, MongoDB, Flutter, Node.js, and Unity."
	/>
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<link
		rel="icon"
		href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
	/>
</svelte:head>
<div class="outer">
	<div class="inner">
		<h1 id="title">Max Campbell</h1>
		<p id="subtitle">
			Hi I'm Max. I live in San Francisco and I'm currently a freelancer who works on all sorts of
			complex and intricate projects. I'm passionate about creating great experiences.
		</p>
	</div>
</div>
<div class="fullscreen paint-dots" />
<MySkills />
<div class="projects">
	<Project
		name="Perplexed Cassette"
		description="Perplexed Cassette is a game made for A Jam About Time game jam. Perplexed Cassette is a game about time manipulation and collecting things. Perplexed Cassette even has multiple endings."
	/>
	<Project
		name="Blurb"
		description="Blurb is a CMS solution that integrates with Notion for better ease of use within companies."
	/>
	<Project
		name="Prometheus"
		description="Prometheus is a self landing rocket that can take off and land itself autonomously like the SpaceX rockets."
	/>
	<Project
		name="Bryght"
		description="Bryght is an NFT marketplace designed for artists who don’t know much about blockchain and just want to get started so it’s built to be very user friendly and as a platform for sales mostly designed to integrate with social media like Instagram and Pintrest."
	/>
	<Project
		name="Unicode version checker"
		description="This is a small tool you can use to check what Unicode version your device supports. See it here: https://unicode.maxc.codes"
	/>
	<Project
		name="Rage Golf"
		description="Rage Golf was a game made in 3 days for Mini Jam 86: SPORTS. Rage Golf is a rage game about golf where if you stop moving you explode."
	/>
	<!-- <Project
		showDivider={false}
		name="Argon"
		description="Argon is a development news letter about developing software and web applications. It includes information about lots of cool new tools for you to use and other cool things."
		actionButtonText="Subscribe"
		showActionButton={true}
		actionButtonCallback={subscribe_handle}
		bind:inputText={emailInput}
	/> -->
</div>
{#if browser == true}
	<Arrows />
{/if}
<Footer />

<style>
	.fullscreen {
		width: 100rem;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -999;
	}
	.paint-dots {
		background-image: paint(dots);
		--circle-size: 10px;
		--circle-spacing: 15px;
		--circle-color: #eeedec;
	}
	.outer {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h1 {
		font-size: 124px;
		letter-spacing: 40px;
		margin: 0;
	}
	p {
		font-size: 28px;
		color: #959595;
		width: 60vw;
		margin: 0;
	}
	.projects:last-child {
		margin-bottom: 3rem !important;
	}
	#title {
		font-family: 'm54';
	}
	#subtitle {
		font-family: 'm54';
	}
</style>
