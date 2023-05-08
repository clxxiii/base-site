<script lang="ts">
	import { browser } from "$app/environment";

	let fieldsFilled = false;
	let name: HTMLInputElement;
	let email: HTMLInputElement;
	let textSpace: HTMLTextAreaElement;
	let send: HTMLButtonElement;

	function checkEmptiness() {
		let nameText = name.value;
		let emailText = email.value;
		let text = textSpace.value;

		let array = [nameText, emailText, text];
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
		send.classList.add("sending");

		let nameText = name.value;
		let emailText = email.value;
		let text = textSpace.value;

		let body = { name: nameText, email: emailText, text };
		console.log(body);

		fetch("https://formsubmit.co/ajax/1100c5a9e5629a4299535637c75cedab", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(body),
		});
		// .then((response) => response.json())
		// .then(finishRequest)
		// .catch((error) => console.log(error));

		setTimeout(finishRequest, 2000);

		function finishRequest() {
			send.innerHTML = "✔";
			send.classList.add("sent");
			send.classList.remove("pressed");
			setTimeout(() => {
				window.location.href = "/";
			}, 3000);
		}
	}

	if (browser) {
		document.addEventListener("keydown", (evt) => {
			if (evt.ctrlKey && evt.code == "Enter") sendData();
		});
	}
</script>

<div class="form">
	<h1>Contact Me!</h1>
	<div class="tag">
		None of the socials suit your fancy? Send me a message directly from
		here!
	</div>
	<input type="hidden" name="_template" value="box" class="sending sent" />

	<input
		on:keyup={checkEmptiness}
		bind:this={name}
		type="text"
		class="form-field"
		placeholder="What should I call you?"
		id="name"
		required
	/>

	<input
		on:keyup={checkEmptiness}
		bind:this={email}
		type="text"
		class="form-field"
		placeholder="Email"
		id="email"
		required
	/>

	<textarea
		on:keyup={checkEmptiness}
		bind:this={textSpace}
		class="form-field"
		placeholder=""
		id="text"
		required
	/>
	<button on:click={sendData} bind:this={send} class="unfilled" id="send">
		Please fill all fields
	</button>
</div>

<style>
	.form {
		height: fit-content;
		display: grid;
		backdrop-filter: blur(10px);
		border-radius: 25px;
		font-size: 20px;
		border: solid 3px rgba(255, 255, 255, 0.2);
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(10px);
		padding: 10px;
		overflow: hidden;
		transform-style: preserve-3d;
		justify-items: center;
		backdrop-filter: blur(5px);
		gap: 5px;
	}
	.form h1 {
		grid-row: 1;
		grid-column: 1 / 3;
		margin: 0;
	}

	.tag {
		grid-row: 2;
		width: 390px;
		font-size: 16px;
		text-align: center;
		grid-column: 1 / 3;
	}

	::placeholder {
		color: rgb(240, 240, 240);
	}

	.form-field {
		background-color: transparent;
		border: solid 3px rgba(255, 255, 255, 0.3);
		padding: 3px;
		color: white;
		height: 1em;
		transition: 0.3s ease-in-out;
		font-family: "Jura";
	}

	.form-field:focus {
		outline: 0;
		border: 3px solid rgba(255, 255, 0, 0.4);
	}

	.unfilled {
		border: 3px solid rgba(255, 255, 255, 0.4) !important;
		color: rgba(0, 0, 0, 0.5);
		background-color: transparent;
	}

	.sending {
		transform: scale(0.95);
		filter: opacity(0.75);
	}

	.sent {
		width: 75px !important;
		background-color: rgb(116, 238, 116);
		color: white;
		animation: 2s confirmSpin ease-in-out;
	}

	#name,
	#email {
		grid-row: 3;
		width: 175px;
	}

	#text {
		width: 370px;
		height: 200px;
		grid-row: 4;
		resize: none;
		overflow: hidden;
		grid-column: 1 / 3;
	}

	#send {
		width: 380px;
		border: 0;
		border-radius: 50px;
		font-weight: bold;
		height: 50px;
		font-size: 24px;
		font-family: "Jura";
		grid-column: 1 / 3;
		grid-row: 6;
		transition: 0.3s ease-in-out;
	}

	@keyframes confirmSpin {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(-10deg);
		}
		75% {
			transform: rotate(370deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes shake {
		0% {
			transform: translateX(0px);
		}
		25% {
			transform: translateX(7px);
		}
		50% {
			transform: translateX(-7px);
		}
		75% {
			transform: translateX(7px);
		}
		100% {
			transform: translateX(0px);
		}
	}

	@media only screen and (max-width: 600px) {
		.tag {
			width: 200px;
		}

		#text {
			width: 200px;
		}

		#name,
		#email {
			width: 100px;
		}

		#send {
			width: 200px;
			font-size: 0.8em;
		}
	}
</style>
