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
		<h3>Introduction</h3>
		<p>
			<b>Hey there!</b> My name is Eli, and welcome to my little corner of
			the internet. It's pretty small as is, but I've got plans to change that.
			I'd go into my interests and hobbies, but that's what the header is for!
		</p>
		<p>
			If you've seen me around, you probably recognise me from one of
			three places:
		</p>
		<ul>
			<li>A regular in a twitch streamer's chat community.</li>
			<li>The host for multiple osu! tournaments</li>
			<li>Those two videos I did with SunlessKhan</li>
		</ul>
		<p>
			If you recognise me from somewhere else, Welcome! I'd love to know
			where you know me from!
		</p>
		<h3>Why clxxiii?</h3>
		<p>
			clxxiii is a username I've had for nearly a decade now. And the
			reason I've stuck with it is because it holds a special relation to
			my real name.
		</p>
		<p>
			As you've probably already googled by now, clxxiii is roman numerals
			for 173. If you write 173 on a calculator, or a piece of paper, it
			says <span class="upside-down">173</span>. That looks a
			hell-of-a-lot like ELI, which just so happens to be my name!
		</p>
		<h3>How can I make a website that looks like yours?</h3>
		<p>I'm glad you like the look of it!</p>
		<p>
			Basically everything I've learned about front-end design I've
			learned from YouTube, documentation, or just looking at other
			peoples code. My CS courses took too long to start covering
			front-end, so I decided to learn it myself!
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
		/* border: 1px solid red; */
	}
	span.upside-down {
		display: inline-block;
		transform: rotateZ(180deg);
	}

	@media only screen and (max-width: 600px) {
		h3,
		p,
		ul {
			font-size: 0.8em;
		}
		h1 {
			font-size: 1em;
		}
	}
</style>
