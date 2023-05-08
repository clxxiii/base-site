<div class="card">
  <slot />
</div>

<style>
	.card {
		backdrop-filter: blur(10px);
		border-radius: 25px;
		border: solid 3px rgba(255, 255, 255, 0.2);
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
		padding: 10px;
		overflow: hidden;
	}
</style>