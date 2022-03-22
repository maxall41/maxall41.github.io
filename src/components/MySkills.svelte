<script>
	import Button from '../components/actionButton.svelte';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	function view_resume() {
		if (browser) {
			goto(`/resume.pdf`, {
				noscroll: true
			});
		}
	}
	function view_work_history() {
		if (browser) {
			goto(`/work`, {
				noscroll: true
			});
		}
	}
</script>

<div class="my-skills">
	<h1>My Skills:</h1>
	<ul>
		<li><span>Vue.js</span></li>
		<li><span>Node.js</span></li>
		<li><span>Express.js</span></li>
		<li><span>MongoDB</span></li>
		<li><span>React</span></li>
		<li><span>Postgresql</span></li>
		<li><span>Prisma</span></li>
		<li><span>Redis</span></li>
	</ul>
	<div class="buttons">
		<Button text="View my resume" callback={view_resume} showArrow={true} />
		<Button text="View my work history" callback={view_work_history} showArrow={true} />
	</div>
</div>

<style>
	.buttons {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
	h1 {
		font-family: bmb;
	}
	.my-skills {
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
</style>
