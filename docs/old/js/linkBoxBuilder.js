async function buildLinkBoxes() {
	let json = await fetch("./links.json");
	let parent = document.getElementById("links");

	json = await json.json();

	json.forEach((link) => {
		let cube = document.createElement("div");
		for (i = 0; i < 4; i++) {
			let face = document.createElement("div");
			face.style = "--i: " + i;
			if ((i == 0) | (i == 2)) {
				face.innerHTML = link.text;
			}
			if (i == 1) {
				let img = document.createElement("img");
				img.src = link.image;
				face.appendChild(img);
			}
			face.classList.add("face");
			cube.appendChild(face);
		}

		cube.classList.add("cube");
		cube.onclick = () => {
			window.open(link.link);
		};
		cube.style =
			"--color1: " + link.colors[1] + "; --color2: " + link.colors[2];

		parent.appendChild(cube);
	});
}
