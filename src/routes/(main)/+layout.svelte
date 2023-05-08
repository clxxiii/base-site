<script>
	import Background from "$lib/components/background/Background.svelte";
  import "./app.css"
	import {blur} from "svelte/transition";
  import {page} from "$app/stores"
	import Header from "$lib/components/header/Header.svelte";

	let loading = true;
	const loadingOff = () => loading = false
</script>

{#if loading}
	<div transition:blur class="loading-cover">
		<img src="/favicon.png" alt="logo">
		Loading...	
	</div>
{/if}
<!-- Check if on main page or not -->
{#if $page.route.id == "/(main)"}
  <Background renderLogo moveOnScroll loaded={loadingOff}/>
{:else}
  <Background dark loaded={loadingOff}/>
{/if}

<header>
  <Header />
</header>
<main>
  <slot />
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
</style>