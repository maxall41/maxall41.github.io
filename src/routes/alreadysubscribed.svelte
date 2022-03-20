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

<h1>Max Campbell</h1>
<hr />
<h2>You are already subscribed!</h2>
<div class="b-wrap">
	<Button callback={go_back} text="Go back" />
</div>

<style>
	h1 {
		margin-top: 1rem;
		margin-left: 1rem;
	}
	h2 {
		margin-top: 0.5rem;
		margin-left: 1rem;
	}
	.b-wrap {
		margin-left: 1rem;
	}
	hr {
		width: 50rem;
		margin-left: 1rem;
		border: none;
		border: 1px dashed grey;
		margin-top: 0.25rem;
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
