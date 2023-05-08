<script>
	import ContentSection from "../ContentSection.svelte";
	import Links from "$lib/assets/links.json";
	import LinkBox from "../LinkBox.svelte";
	import ContactBox from "../ContactBox.svelte";
</script>

<ContentSection id="contact">
	<div class="header">
		<h1>Contact</h1>
	</div>
	<div class="elements">
		<div class="links">
			{#each Links as link}
				<LinkBox {...link} />
			{/each}
		</div>
		<ContactBox />
	</div>
</ContentSection>

<style>
	h1 {
		text-align: center;
		font-size: 2em;
	}

	.elements {
		height: max-content;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		column-gap: 30px;
	}

	.links {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		margin: 30px;
		padding: 40px 0px;
		padding-top: 110px;
		max-width: 600px;
		gap: 75px;
		justify-content: center;
		border-radius: 25px;
		border: solid 3px rgba(255, 255, 255, 0.2);
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(10px);
	}

	.links::before {
		content: "Links";
		position: absolute;
		top: 0;
		left: 0;
		font-family: "Jura";
		font-weight: bold;
		font-size: 1.5em;
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
