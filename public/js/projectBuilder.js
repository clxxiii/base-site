let projects = document.getElementById("project-list");

async function buildProjects() {
	let projectData = await fetch("./projects.json");
	projectData = await projectData.json();

	projectData.forEach((proj) => {
		// Create Elements
		let card = document.createElement("a");
		let name = document.createElement("div");
		let desc = document.createElement("div");
		let icon = document.createElement("img");
		let stat = document.createElement("div");

		card.classList.add("card");
		name.classList.add("name");
		desc.classList.add("desc");
		icon.classList.add("icon");
		stat.classList.add("stat");

		icon.src = proj.icon_url;
		card.href = proj.link;
		name.innerHTML = proj.name;
		desc.innerHTML = proj.desc;
		stat.innerHTML = "<b>Status:</b> " + proj.status;

		// Assemble Card
		card.appendChild(icon);
		card.appendChild(name);
		card.appendChild(desc);
		card.appendChild(stat);

		// Append to list
		projects.appendChild(card);
	});
}
