<script>
	import {blur} from "svelte/transition";
	import "../app.css";
	import Background from "$lib/components/background/Background.svelte";
	import Header from "$lib/components/header/Header.svelte";
	import AboutMe from "$lib/components/sections/AboutMe.svelte";
	import Projects from "$lib/components/sections/Projects.svelte";
	import Contact from "$lib/components/sections/Contact.svelte";

	let loading = true;
	const loadingOff = () => loading = false
</script>

{#if loading}
	<div transition:blur class="loading-cover">
		<img src="/favicon.png" alt="logo">
		Loading...	
	</div>
{/if}
<section id="home" />
<Header />
<Background renderLogo moveOnScroll loaded={loadingOff}/>
<main>
	<AboutMe />
	<Projects />
	<Contact />
</main>

<style>
	.loading-cover img {
		width: 200px;
	}
	.loading-cover {
		position: fixed;
		inset: 0;
		background-color: #222222;
		z-index: 10;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
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
