import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as logo from "../../assets/logo test.svg";
// import * as url from "../assets/texture.png";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

// // Helpers
// const gridHelper = new THREE.GridHelper(10, 10);
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);
// scene.add(gridHelper);

// C
const loader = new SVGLoader();
const svgData = await loader.loadAsync(logo.default);
const svgGroup = new THREE.Group();

// const image = new THREE.TextureLoader().load(url.default);
const material = new THREE.MeshStandardMaterial({
	color: 0xffffff,
	// map: image,
});

svgData.paths.forEach((path) => {
	const shapes = path.toShapes(true);

	shapes.forEach((shape) => {
		const geometry = new THREE.ExtrudeGeometry(shape, {
			depth: 5,
			bevelEnabled: false,
		});

		const mesh = new THREE.Mesh(geometry, material);

		svgGroup.add(mesh);
	});
});
// These numbers are half the svg dimensions,
// I don't know how to get that from the group itself.
svgGroup.translateX(-20);
svgGroup.translateY(-20);
svgGroup.translateZ(-5);
scene.add(svgGroup);

// // Baseplate
// const baseplate = new THREE.CylinderGeometry(7, 7, 1, 64);
// const baseplateMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 });
// const baseplateMesh = new THREE.Mesh(baseplate, baseplateMaterial);
// baseplateMesh.position.y = -5;

// scene.add(baseplateMesh);

// Dots
function addStar() {
	const geometry = new THREE.SphereGeometry(0.25, 24, 24);
	const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
	const star = new THREE.Mesh(geometry, material);

	const [x, y, z] = Array(3)
		.fill()
		.map(() => THREE.MathUtils.randFloatSpread(200));

	star.position.set(x, y, z);
	scene.add(star);
}

Array(500).fill().forEach(addStar);

// Lights
{
	const light = new THREE.PointLight(0xffffff, 2, 100);
	light.position.set(0, 0, 50);
	scene.add(light);
}

{
	const light = new THREE.PointLight(0xfffffff, 0.75, 100);
	light.position.set(10, 10, 5);
	scene.add(light);
}

//Camera
const camCoords = { x: 0, y: 0, z: 50 };
const camAngles = {
	x: Math.atan(camCoords.z / camCoords.y) - Math.PI / 2,
	y: -(Math.atan(camCoords.z / camCoords.x) - Math.PI / 2),
	z: 0,
};

camera.position.x = camCoords.x;
camera.position.y = camCoords.y;
camera.position.z = camCoords.z;

camera.rotation.x = camAngles.x;
camera.rotation.y = camAngles.y;
camera.rotation.z = camAngles.z;

/* Boilerplate */
let renderer;

const mouseMove = (event) => {
	let panFactor = 5;
	let { clientX, clientY } = event;

	let xFactor =
		((window.innerWidth / 2 - clientX) / (window.innerWidth / 2)) *
		panFactor;
	let yFactor =
		((window.innerHeight / 2 - clientY) / (window.innerHeight / 2)) *
		panFactor;

	// Trig!
	let rotX;
	let rotY;
	if (xFactor >= 0) {
		rotX = Math.atan(camCoords.z / xFactor) - Math.PI / 2;
	} else {
		rotX = Math.atan(camCoords.z / xFactor) + Math.PI / 2;
	}

	if (yFactor >= 0) {
		rotY = Math.atan(camCoords.z / yFactor) - Math.PI / 2;
	} else {
		rotY = Math.atan(camCoords.z / yFactor) + Math.PI / 2;
	}

	camera.position.x = camCoords.x + -xFactor;
	camera.rotation.y = camAngles.y + rotX;

	camera.position.y = camCoords.y + yFactor;
	camera.rotation.x = camAngles.x + rotY;
};

let heightCount = 0;
const animate = () => {
	requestAnimationFrame(animate);
	heightCount += 0.02;
	svgGroup.rotation.y = Math.sin(heightCount) / 10;
	renderer.render(scene, camera);
};

const resize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
};

const scroll = () => {
	let maxBlur = 2;
	let firstPageFactor =
		window.scrollY / window.innerHeight > 1
			? 1
			: window.scrollY / window.innerHeight;
	let blur = firstPageFactor * maxBlur;

	renderer.domElement.style.filter = `blur(${blur}px) brightness(${
		1 - firstPageFactor / 3
	})`;
	renderer.domElement.style.transform = `scale(${1 + firstPageFactor / 10})`;

	svgGroup.position.y = -20 + window.scrollY / 10;
};

export const createScene = (el) => {
	renderer = new THREE.WebGLRenderer({
		canvas: el,
		antialias: true,
		alpha: true,
	});
	// const controls = new OrbitControls(camera, renderer.domElement);
	// controls.update();
	renderer.setClearColor(0xffffff, 0);
	resize();
	animate();
};

window.addEventListener("resize", resize);
window.addEventListener("mousemove", mouseMove);
window.addEventListener("scroll", scroll);
