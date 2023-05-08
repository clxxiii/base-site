<script>
	import Background from "$lib/components/background/Background.svelte";
	import Header from "$lib/components/header/Header.svelte";
	import AboutMe from "$lib/components/sections/AboutMe.svelte";
	import Projects from "$lib/components/sections/Projects.svelte";
	import Contact from "$lib/components/sections/Contact.svelte";

</script>

<section id="home" />
<div class="content">
	<AboutMe />
	<Projects />
	<Contact />
</div>

<style>
	section {
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
	}
	.content {
		position: absolute;
		top: 100vh;
		width: 100%;
		left: 0;
	}
</style>
