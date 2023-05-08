<script lang="ts">
	export let id: string;
</script>

<section {id}>
	<slot />
</section>

<style>
	section {
		padding-top: 50px;
		min-height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
