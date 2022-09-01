<script>
	import ContentSection from "../ContentSection.svelte";
	import Projects from "../../assets/projects.json";
	import Project from "../Project.svelte";
</script>

<ContentSection id="projects">
	<div>
		<h1>Projects</h1>
		<div class="projects">
			{#each Projects as project}
				<Project {...project} />
			{/each}
		</div>
	</div>
</ContentSection>

<style>
	h1 {
		text-align: center;
		font-size: 2em;
	}
	.projects {
		display: flex;
		max-width: 1200px;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
</style>
