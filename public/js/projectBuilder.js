let projects = document.getElementById("project-list");

async function buildProjects() {
	let projectData = await fetch("./projects.json");
	projectData = await projectData.json();

	const card = document.createElement("div");
	card.classList.add("card");
	card.innerHTML = projectData[0].name;
	projects.appendChild(card);
}
