<script>
	import ContentSection from "../ContentSection.svelte";
	import Typed from "typed.js";
	import { onMount } from "svelte";

	onMount(() => {
		var options = {
			strings: [
				"clxxiii",
				"a CompSci Major",
				"a Rollercoaster Enthusiast",
				"Addicted to Rainbow 6",
				"Top 100k in osu!",
				"a Rubik's Cuber",
				"a Clone Hero Charter",
				"S+ in TETRIO",
				"an osu! Tourney Host",
				"a Twitch Streamer",
			],
			typeSpeed: 50,
			backDelay: 1000,
			backSpeed: 20,
			loop: true,
		};

		new Typed(".typing", options);
	});
</script>

<ContentSection id="about-me">
	<div>
		<h1>
			Hi, I'm <span class="typing" />
		</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
			officiis quisquam vel molestiae. Nihil consequuntur, ea dolorum
			laborum eligendi sed eveniet ipsa iure cupiditate provident
			reiciendis nulla doloribus rem dolorem!
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
			officiis quisquam vel molestiae. Nihil consequuntur, ea dolorum
			laborum eligendi sed eveniet ipsa iure cupiditate provident
			reiciendis nulla doloribus rem dolorem!
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
			officiis quisquam vel molestiae. Nihil consequuntur, ea dolorum
			laborum eligendi sed eveniet ipsa iure cupiditate provident
			reiciendis nulla doloribus rem dolorem!
		</p>
	</div>
</ContentSection>

<style>
	.typing {
		text-shadow: 0 0 5px rgba(255, 255, 255, 0.75);
	}
	h1 {
		font-size: 2.5em;
		text-align: center;
	}
	div {
		max-width: 800px;
		padding: 0.5em;
		border: 1px solid red;
	}
</style>
