<script>
	import Background from "./components/background/Background.svelte";
	import Header from "./components/header/Header.svelte";
	import AboutMe from "./components/sections/AboutMe.svelte";
	import Projects from "./components/sections/Projects.svelte";
	import Contact from "./components/sections/Contact.svelte";
</script>

<section id="home" />
<Header />
<Background />
<main>
	<AboutMe />
	<Projects />
	<Contact />
</main>

<style>
	section {
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
	}
	main {
		position: absolute;
		top: 100vh;
		width: 100%;
		left: 0;
	}
</style>
