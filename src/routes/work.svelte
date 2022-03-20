<script>
	import Button from '../components/actionButton.svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	function go_back() {
		if (browser) {
			goto(`/`, {
				noscroll: true
			});
		}
	}
</script>

<h1 id="title">Max Campbell</h1>
<hr />
<div class="work-history">
	<h1>Work history:</h1>
	<ul>
		<li>
			<span>Soncraft</span>
			<p>Soncraft makes a Discord music bot that's more focused towards D&D And Board games.</p>
		</li>
	</ul>
	<Button callback={go_back} text="Go back" />
</div>

<style>
	h1 {
		font-family: bmb;
	}
	.work-history {
		margin-left: 0.65rem;
	}
	ul {
		margin-left: 2rem;
		font-family: bmb;
	}
	li {
		margin-top: 0.1rem;
		font-size: 21px;
	}
	li p {
		font-size: 16px;
	}
	hr {
		width: 50rem;
		margin-left: 1rem;
		border: none;
		border: 1px dashed grey;
		margin-top: 0.25rem;
	}
	#title {
		margin-top: 1rem;
		margin-left: 1rem;
	}
	@font-face {
		font-family: m54;
		src: url(m54.ttf);
	}
	@font-face {
		font-family: bmb;
		src: url(bmb.ttf);
	}
	@font-face {
		font-family: bmr;
		src: url(bmr.ttf);
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	p {
		font-family: bmr;
	}
	* {
		margin: 0;
		padding: 0;
	}
	html,
	body {
		overflow-x: hidden;
	}
</style>
