<script lang="ts">
	export let renderLogo = false;
	export let moveOnScroll = false;
	export let loaded: (() => any) | null = null;
	import { onMount } from "svelte";
	import {createScene, loadSvg, mouseMove, resize, scroll} from "./scene"
	import { browser } from "$app/environment";
	let canvas: HTMLCanvasElement;
	let svg: SVGElement;

	onMount(() => {
		
		browser && window.addEventListener("mousemove", mouseMove)
		browser && moveOnScroll && window.addEventListener("scroll", scroll)
		browser && window.addEventListener("resize", resize)
		renderLogo && loadSvg(svg.outerHTML)
		createScene(canvas)
		
		loaded && loaded();
	})
</script>

<canvas bind:this={canvas}></canvas>

<div class="svg">
	<svg bind:this={svg} width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
			<g transform="matrix(0.380598,0,0,0.380598,-2.98379,22.8736)">
					<path d="M59.309,38.17C81.485,38.17 84.941,27.514 86.237,9.514L69.245,7.93C68.669,21.322 68.237,23.626 60.461,23.626C53.117,23.626 51.677,20.17 51.677,11.962L51.677,-27.062C51.677,-35.27 54.269,-38.294 60.029,-38.294C68.381,-38.294 68.525,-34.55 68.813,-23.462L86.093,-24.902C84.941,-44.774 80.045,-53.27 60.317,-53.27C42.749,-53.27 34.541,-45.062 34.541,-26.918L34.541,11.242C34.541,30.538 43.325,38.17 59.309,38.17Z" style="fill-rule:nonzero;"/>
			</g>
	</svg>
</div>


<style>
	.svg {
		width: 0;
		height: 0;
		display: none
	}
	canvas {
		position: fixed;
		inset: 0;
		margin: 0;
		padding: 0;
		z-index: -1;
		background: linear-gradient(
			to right,
			rgb(38, 176, 185) 0%,
			#3ad36d 100%
		);
	}
</style>
