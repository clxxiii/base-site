<script lang="ts">
  import "./app.css"
  import Textbox from "$lib/components/ConsoleBox.svelte"
	import { onMount } from "svelte";

  let box: Textbox;

  onMount(() => {
    box.load();
  })
</script>

<main>
  <Textbox bind:this={box}/>
</main>

<style>
  main {
    width: 100%;
  }
</style>
