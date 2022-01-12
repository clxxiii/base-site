particlesJS.load("particles-bottom", "js/particles.json");
particlesJS.load("particles-top", "js/particles.json");

// Change position of card on mouse move
window.addEventListener("mousemove", (event) => {
	let xMid = window.innerWidth / 2;
	let yMid = window.innerHeight / 2;

	let rotationX = (event.clientX - xMid) / 20;
	let rotationY = (event.clientY - yMid) / -20;
	document.getElementById(
		"card"
	).style.transform = `rotateY(${rotationX}deg) rotateX(${rotationY}deg)`;
	// console.log(document.getElementById("card"));
});
