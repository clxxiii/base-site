<script>
	import { onMount } from "svelte";
	import { createScene } from "./scene.js";

	let el;

	onMount(() => {
		createScene(el);
	});
</script>

<canvas bind:this={el} />

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
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
