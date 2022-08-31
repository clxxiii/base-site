<script>
	import Background from "./components/background/Background.svelte";
	import Header from "./components/header/Header.svelte";
</script>

<main>
	<section id="home" />
	<Header />
	<Background />
</main>

<style>
	section {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
