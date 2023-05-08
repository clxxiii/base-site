<script>
	export let faceNum;
</script>

<div class="face" style:--i={faceNum}><slot /></div>

<style>
	.face {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20px;
		transform-style: preserve-3d;
		top: 0;
		left: 0;
		width: 100px;
		height: 100px;
		background: linear-gradient(
			180deg,
			var(--color1) 0%,
			var(--color2) 100%
		);
		transform: rotateX(calc(var(--i) * 90deg)) translateZ(50px);
	}

	@media only screen and (max-width: 600px) {
		.face {
			width: 75px;
			height: 75px;
			transform: rotateX(calc(var(--i) * 90deg)) translateZ(37.5px);
			font-size: 15px;
		}
	}
</style>
