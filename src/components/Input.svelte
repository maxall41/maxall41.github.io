<script>
	export let valueText = '';
</script>

<input id="email" bind:value={valueText} placeholder="Enter email" />

<style>
	input {
		border: 1px solid #000;
		padding-left: 0.25rem;
		box-shadow: inset 2px 2px 1px #dddddd;
		height: 1.5rem;
		margin-right: 0.75rem;
	}
	input:focus {
		outline: none !important;
	}
</style>
