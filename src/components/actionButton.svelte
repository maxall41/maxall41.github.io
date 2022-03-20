<script>
	export let text;
	export let callback;
	export let showArrow = false;
	export let classData = '';
</script>

{#if showArrow == false}
	<button class={classData} on:click={callback}>
		{text}
	</button>
{:else if showArrow == true}
	<button class={classData} on:click={callback}>
		{text}
		<svg width="15" height="15" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M19.0884 13.0607C19.6742 12.4749 19.6742 11.5251 19.0884 10.9393L9.54247 1.3934C8.95669 0.807611 8.00694 0.807611 7.42115 1.3934C6.83537 1.97919 6.83537 2.92893 7.42115 3.51472L15.9064 12L7.42115 20.4853C6.83537 21.0711 6.83537 22.0208 7.42115 22.6066C8.00694 23.1924 8.95669 23.1924 9.54247 22.6066L19.0884 13.0607ZM0 13.5H18.0278V10.5H0L0 13.5Z"
				fill="currentColor"
			/>
		</svg>
	</button>
{/if}

<style>
	button {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
		background: #ffb700;
		border: 1px solid black;
		font-family: m54;
		box-shadow: 2 2;
		margin-bottom: 0.5rem;
		box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.25);
		transition: 0.08s linear;
		margin-top: 0.5rem;
		display: flex;
		align-items: center;
	}
	button:hover {
		background: #000;
		color: #fff;
		fill: #fff;
	}
</style>
