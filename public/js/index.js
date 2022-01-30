particlesJS.load("particles-bottom", "/js/particles.json");

// // Change position of card on mouse move
// window.addEventListener("mousemove", (event) => {
// 	let card = document.getElementById("card");

// 	let xMid = window.innerWidth / 2;
// 	let yMid = window.innerHeight / 2;

// 	let rotationX = (event.clientX - xMid) / 50;
// 	let rotationY = (event.clientY - yMid) / -50;
// 	card.style.transform = `rotateY(${rotationX}deg) rotateX(${rotationY}deg)`;
// });

function redirect(url) {
	window.location.href = url;
}
