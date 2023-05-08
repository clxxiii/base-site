<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import Background from "$lib/components/background/Background.svelte";
	import Header from "$lib/components/header/Header.svelte";

</script>

<div class="card">
	<Card>
		<h1>Archived</h1>
		<p>If you were redirected here, the project you were trying to access has been archived and is no longer running.</p>
		<p>I try live by the philosophy that any work that I've ever done should always be accessible, forever. Most of the time I am pretty good at meeting that goal. Other times, I have to throw in the towel and take down a project.</p>
		<p>As a solo hobby coder, it's difficult to keep all of the projects I've ever worked on up to date and working.</p>
		<p>When I take down projects, I try to keep them available on <a href="/github">GitHub</a>. If you would like access to the code for any project I've deprecated and you can't find it, shoot me a message and I'll get it for you.</p>
		<p>If I take something down that many people are still using, shoot me a message and I'll look into whether it's worth putting back up again.</p>
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
		display: flex;
	}	
</style>