let superlatives = [
	"a CompSci Major",
	"a Rollercoaster Enthusiast",
	"Addicted to Rainbow 6",
	"Top 100k in osu!",
	"a Rubik's Cuber",
	"a Clone Hero Charter",
	"S+ in TETRIO",
	"an osu! Tourney Host",
	"a Twitch Streamer",
	"learning Front-end",
	"in your walls",
	"<b>clxxiii</b>",
];

let currentIndex = 0;
setInterval(() => {
	spinSuperWheel(superlatives[currentIndex]);
	currentIndex = (currentIndex + 1) % superlatives.length;
}, 2000);

function spinSuperWheel(input) {
	let cube = document.getElementById("superlative-cube"),
		faces = cube.getElementsByClassName("face");
	faces[1].innerHTML = input;
	cube.style.animation = "superlativespin 500ms ease-in-out 1";
	setTimeout(() => {
		faces[0].innerHTML = input;
		setTimeout(() => {
			cube.style.animation = "";
		}, 100);
	}, 480);
}
