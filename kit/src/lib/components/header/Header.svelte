<script>
	import Link from "./Link.svelte";
</script>

<div>
	<Link href="#home">Home</Link>
	<Link href="#about-me">About Me</Link>
	<Link href="#projects">Projects</Link>
	<Link href="#contact">Contact</Link>
</div>

<style>
	div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 75px;
		margin: 0;
		padding: 0;
		z-index: 5;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(10px);
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
</style>
