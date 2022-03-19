let fieldsFilled = false;

function checkEmptiness() {
	let send = document.getElementById("send");

	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let text = document.getElementById("text").value;

	let array = [name, email, text];
	if (array.find((el) => el == "") == undefined) {
		send.innerHTML = "Submit";
		fieldsFilled = true;
		send.classList.remove("unfilled");
	} else {
		send.innerHTML = "Please fill all fields";
		fieldsFilled = false;
		send.classList.add("unfilled");
	}
}

function sendData() {
	let send = document.getElementById("send");

	if (!fieldsFilled) {
		let animationTime = 500;
		send.style.animation = animationTime + "ms shake linear";
		setTimeout(() => {
			send.style.animation = "";
		}, animationTime + 10);
		return;
	}
	// Prevent spam clicking the button
	fieldsFilled = false;
	send.classList.add("pressed");

	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let text = document.getElementById("text").value;

	let body = { name, email, text };
	console.log(body);

	fetch("https://formsubmit.co/ajax/earthnoartisjusteh@gmail.com", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(body),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			send.innerHTML = "✔";
			send.classList.add("sent");
			send.classList.remove("pressed");
			setTimeout(() => {
				window.location.href = "/";
			}, 3000);
		})
		.catch((error) => console.log(error));
}

document.addEventListener("keydown", (evt) => {
	if (evt.ctrlKey && evt.code == "Enter") sendData();
});
