<script context="module">
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
	import { browser } from '$app/env';
	if (browser) {
		gsap.registerPlugin(ScrollTrigger);
		const i = setInterval(() => {
			const el = document.getElementsByClassName('one')[0];
			if (el != null) {
				const scrub_value = 2.5;
				gsap.to('.one', {
					duration: 1,
					height: 800,
					scrollTrigger: {
						trigger: '.one',
						scrub: scrub_value
					}
				});
				gsap.to('.two', {
					duration: 1,
					height: 700,
					scrollTrigger: {
						trigger: '.one',
						scrub: scrub_value
					}
				});
				gsap.to('.three', {
					duration: 1,
					height: 950,
					scrollTrigger: {
						trigger: '.one',
						scrub: scrub_value
					}
				});
				gsap.to('.four', {
					duration: 1,
					height: 825,
					scrollTrigger: {
						trigger: '.one',
						scrub: scrub_value
					}
				});
				gsap.to('.five', {
					duration: 1,
					height: 400,
					scrollTrigger: {
						trigger: '.one',
						scrub: scrub_value
					}
				});
				clearInterval(i);
			}
		}, 100);
	}
</script>

<div id="arrows">
	<svg
		class="one"
		width="50"
		height="895"
		viewBox="0 0 59 895"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M33.0784 2.14911C31.5163 0.587015 28.9837 0.587015 27.4216 2.14911L1.96573 27.605C0.403632 29.1671 0.403632 31.6997 1.96573 33.2618C3.52783 34.8239 6.06049 34.8239 7.62258 33.2618L30.25 10.6344L52.8774 33.2618C54.4395 34.8239 56.9722 34.8239 58.5343 33.2618C60.0964 31.6997 60.0964 29.1671 58.5343 27.605L33.0784 2.14911ZM34.25 1910L34.25 4.97754H26.25L26.25 1910H34.25Z"
			fill="#B53056"
		/>
	</svg>
	<svg
		class="two"
		width="50"
		height="950"
		viewBox="0 0 59 950"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M32.361 2.17011C30.7989 0.608011 28.2663 0.608011 26.7042 2.17011L1.24832 27.626C-0.313776 29.188 -0.313776 31.7207 1.24832 33.2828C2.81042 34.8449 5.34308 34.8449 6.90518 33.2828L29.5326 10.6554L52.16 33.2828C53.7221 34.8449 56.2548 34.8449 57.8169 33.2828C59.379 31.7207 59.379 29.188 57.8169 27.626L32.361 2.17011ZM33.5326 1793.02V4.99854H25.5326L25.5326 1793.02H33.5326Z"
			fill="#259980"
		/>
	</svg>
	<svg
		class="three"
		width="50"
		height="785"
		viewBox="0 0 59 785"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M33.2802 2.16828C31.7181 0.60618 29.1855 0.60618 27.6234 2.16828L2.16751 27.6241C0.605414 29.1862 0.605414 31.7189 2.16751 33.281C3.72961 34.8431 6.26227 34.8431 7.82437 33.281L30.4518 10.6536L53.0792 33.281C54.6413 34.8431 57.174 34.8431 58.7361 33.281C60.2982 31.7189 60.2982 29.1862 58.7361 27.6241L33.2802 2.16828ZM34.4518 1855.03L34.4518 4.9967H26.4518L26.4518 1855.03H34.4518Z"
			fill="#B53056"
		/>
	</svg>
	<svg
		class="four"
		width="50"
		height="600"
		viewBox="0 0 59 600"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M32.3278 2.13544C30.7657 0.573343 28.2331 0.573343 26.671 2.13544L1.21512 27.5913C-0.346979 29.1534 -0.346979 31.686 1.21512 33.2481C2.77722 34.8102 5.30988 34.8102 6.87197 33.2481L29.4994 10.6207L52.1268 33.2481C53.6889 34.8102 56.2216 34.8102 57.7837 33.2481C59.3458 31.686 59.3458 29.1534 57.7837 27.5913L32.3278 2.13544ZM33.4994 1562.06L33.4994 4.96387H25.4994L25.4994 1562.06H33.4994Z"
			fill="#0080E0"
		/>
	</svg>
	<svg
		class="five"
		width="50"
		height="854"
		viewBox="0 0 59 854"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M32.4255 2.0882C30.8634 0.526102 28.3307 0.526102 26.7686 2.0882L1.31277 27.544C-0.249323 29.1061 -0.249323 31.6388 1.31277 33.2009C2.87487 34.763 5.40753 34.763 6.96963 33.2009L29.597 10.5735L52.2245 33.2009C53.7866 34.763 56.3192 34.763 57.8813 33.2009C59.4434 31.6388 59.4434 29.1061 57.8813 27.544L32.4255 2.0882ZM33.597 1910.11L33.597 4.91663H25.597L25.597 1910.11H33.597Z"
			fill="#259980"
		/>
	</svg>
</div>

<style>
	#arrows {
		position: relative;
		float: right;
		clear: left;
		margin-top: -20rem;
		margin-bottom: -0.25rem;
		margin-right: 1rem;
	}
	svg {
		z-index: -999;
	}
	@media only screen and (max-width: 565px) {
		#arrows {
			display: none;
		}
	}
</style>
