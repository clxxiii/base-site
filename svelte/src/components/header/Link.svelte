<script>
	export let href;
</script>

<a {href}><slot /></a>

<style>
	a {
		position: relative;
		color: #fff;
		text-decoration: none;
		font-size: 1.5rem;
		font-weight: bold;
		font-family: "Jura", sans-serif;
		padding-bottom: 1px;
		text-transform: uppercase;
	}

	a::after {
		content: "";
		position: absolute;
		bottom: 0px;
		left: 50%;
		width: 0;
		height: 2px;
		background: #fff;
		transition: all 0.4s ease-in-out;
	}

	a:hover::after {
		width: 100%;
		left: 0;
	}

	@media only screen and (max-width: 600px) {
		a {
			font-size: 1em;
		}
	}
</style>
