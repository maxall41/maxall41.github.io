<script>
	const no_callback = () => {
		console.log('No callback');
	};
	import Button from './actionButton.svelte';
	import Input from './Input.svelte';
	export let name;
	export let inputText = '';
	export let description;
	export let showActionButton = false;
	export let actionButtonCallback = no_callback;
	export let actionButtonText = 'No text';
	export let showDivider = true;
</script>

<div class="project">
	<h1>{name}</h1>
	<p>{description}</p>
	{#if showActionButton == true}
		<div class="sub">
			<Input bind:valueText={inputText} />
			<Button showArrow={true} callback={actionButtonCallback} text={actionButtonText} />
		</div>
	{/if}
	{#if showDivider == true}
		<hr />
	{/if}
</div>

<style>
	p {
		color: #959595;
		width: 50%;
	}
	.project {
		margin-left: 0.65rem;
	}
	hr {
		width: 30vw;
		height: 2px;
		background: #c1c0c1;
		border: none;
	}
	h1 {
		font-family: bmb;
	}
	.sub {
		display: flex;
		align-items: center;
	}
</style>
