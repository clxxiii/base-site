<script>
	export let name;
	export let desc;
	export let icon_url;
	export let link;
	export let status;
</script>

<a href={link} class="card">
	<div class="name">{name}</div>
	<img src={icon_url} alt="{name} icon" class="icon" />
	<div class="desc">{desc}</div>
	<div class="stat"><b>Status: </b> {status}</div>
</a>

<style>
	.card {
		width: 400px;
		height: 100px;
		display: grid !important;
		grid-template-columns: 33% 66%;
		grid-template-rows: 20% 65% 15%;
		transition: all 0.2s ease-in-out;
		backdrop-filter: blur(10px);
		font-size: 0.7em;
		border-radius: 25px;
		border: solid 3px rgba(255, 255, 255, 0.2);
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
		padding: 10px;
		overflow: hidden;
		transform-style: preserve-3d;
	}

	a {
		text-decoration: none;
		color: white;
	}

	.name {
		font-weight: bold;
	}

	.desc {
		display: flex;
		align-items: center;
		grid-column-start: 2;
		grid-column-end: 2;
		font-size: 0.8em;
	}

	.stat {
		grid-row: 3;
		grid-column: 2;
	}

	.icon {
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 1;
		grid-row-end: 3;
		width: 100px;
		border-radius: 20px;
		height: 100px;
	}

	.card:hover {
		box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
		background: rgba(255, 255, 255, 0.1);
	}
</style>
