<script>
	import LinkBoxFace from "./LinkBoxFace.svelte";
	export let text;
	export let link;
	export let colors;
	export let image;

	let color1 = colors[1];
	let color2 = colors[2];
</script>

<a href={link} class="cube" style:--color1={color1} style:--color2={color2}>
	<LinkBoxFace faceNum={2}>{text}</LinkBoxFace>
	<LinkBoxFace faceNum={1}><img src={image} alt="{text} logo" /></LinkBoxFace>
	<LinkBoxFace faceNum={4}>{text}</LinkBoxFace>
	<LinkBoxFace faceNum={3} />
</a>

<style>
	.cube {
		width: 100px;
		height: 100px;
		font-family: "Ubuntu", sans-serif;
		color: white;
		position: relative;
		transform-origin: 50% 50%;
		transform-style: preserve-3d;
		transform: rotateY(30deg) rotateX(-10deg);
		transition: 0.4s ease-in-out;
	}

	.cube::before {
		position: absolute;
		content: "";
		background-color: var(--color1);
		width: 100px;
		height: 100px;
		transform-style: preserve-3d;
		transform: rotateY(90deg) translateZ(-50px);
	}

	.cube:hover {
		transform: rotateY(30deg) rotateX(-100deg);
	}

	img {
		width: 80px;
		height: 80px;
	}

	@media only screen and (max-width: 600px) {
		.cube {
			width: 75px;
			height: 75px;
		}

		img {
			width: 60px;
			height: 60px;
		}

		.cube::before {
			width: 75px;
			height: 75px;
			transform: rotateY(90deg) translateZ(-37.5px);
		}
	}
</style>
