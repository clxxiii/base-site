<script lang="ts">
	import { onMount } from "svelte";
	import {createScene, mouseMove, resize, scroll} from "./scene"
	import { browser } from "$app/environment";
	let canvas: HTMLCanvasElement;

	onMount(() => {
		createScene(canvas)

		browser && window.addEventListener("mousemove", mouseMove)
		browser && window.addEventListener("scroll", scroll)
		browser && window.addEventListener("resize", resize)
	})
</script>

<canvas bind:this={canvas}></canvas>

<style>
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
