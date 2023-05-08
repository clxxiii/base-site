<script lang="ts">
    import { page } from '$app/stores';
	import Card from '$lib/components/Card.svelte';
	import Background from '$lib/components/background/Background.svelte';
	import {blur} from "svelte/transition";
    import "./(main)/app.css"
	import Header from '$lib/components/header/Header.svelte';

	let loading = true;
	const loadingOff = () => loading = false
</script>


{#if loading}
	<div transition:blur class="loading-cover">
		<img src="/favicon.png" alt="logo">
		Loading...	
	</div>
{/if}
<Header />
<Background dark loaded={loadingOff} />
<div class="card">
    <Card>
        <h1>{$page.status}: {$page.error?.message}</h1>
        <img src="https://cdn.betterttv.net/emote/5d7eefb7c0652668c9e4d394/3x" alt="">
    </Card>
</div>

<style>
	.card {
		position: relative;
		top: 80px;
		margin: auto;
		width: calc(100vw - 40px);
		max-width: 1000px;
		height: calc(100vh - 40px - 80px);
		padding: 20px;
	}	
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