import {
  Scene,
  PerspectiveCamera,
  Group,
  MeshStandardMaterial,
  Mesh,
  ExtrudeGeometry,
  SphereGeometry,
  PointLight,
  WebGLRenderer,
  MathUtils,
  MeshBasicMaterial
} from 'three';
import { SVGLoader } from './SVGLoader';

const scene = new Scene();
const camera = new PerspectiveCamera(75, 16 / 9, 0.1, 150);

// // Helpers
// const gridHelper = new GridHelper(10, 10);
// const axesHelper = new AxesHelper(5);
// scene.add(axesHelper);
// scene.add(gridHelper);

const loader = new SVGLoader();

const svgGroup = new Group();
export const loadSvg = async (content: string) => {
  const svgData = loader.parse(content);
  // const image = new TextureLoader().load(url.default);
  const material = new MeshStandardMaterial({
    color: 0xffffff
    // map: image,
  });
  svgData.paths.forEach((path) => {
    const shapes = path.toShapes(true);
    shapes.forEach((shape) => {
      const geometry = new ExtrudeGeometry(shape, {
        depth: 5,
        bevelEnabled: false
      });
      const mesh = new Mesh(geometry, material);
      svgGroup.add(mesh);
    });
  });
  // These numbers are half the svg dimensions,
  // I don't know how to get that from the group itself.
  svgGroup.position.set(-20, -20, -5);
  scene.add(svgGroup);
};

// Dots
function addStar() {
  const geometry = new SphereGeometry(0.25, 24, 24);
  const material = new MeshBasicMaterial({ color: 0xffffff });
  const star = new Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill(0)
    .map(() => MathUtils.randFloatSpread(200));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(500).fill(0).forEach(addStar);

// Lights
{
  const light = new PointLight(0xffffff, 2, 100);
  light.position.set(0, 0, 50);
  scene.add(light);
}

{
  const light = new PointLight(0xfffffff, 0.75, 100);
  light.position.set(10, 10, 5);
  scene.add(light);
}

{
  const light = new PointLight(0xfffffff, 0.75, 100);
  light.position.set(0, 0, 10);
  scene.add(light);
}

//Camera
const camCoords = { x: 0, y: 0, z: 50 };
const camAngles = {
  x: Math.atan(camCoords.z / camCoords.y) - Math.PI / 2,
  y: -(Math.atan(camCoords.z / camCoords.x) - Math.PI / 2),
  z: 0
};

camera.position.x = camCoords.x;
camera.position.y = camCoords.y;
camera.position.z = camCoords.z;

camera.rotation.x = camAngles.x;
camera.rotation.y = camAngles.y;
camera.rotation.z = camAngles.z;

/* Boilerplate */
let renderer: WebGLRenderer;

let mouseYFactor = 0;
let mouseXFactor = 0;
export const mouseMove = (event: MouseEvent) => {
  const panFactor = 5;
  const { clientX, clientY } = event;

  mouseXFactor = ((window.innerWidth / 2 - clientX) / (window.innerWidth / 2)) * panFactor;
  mouseYFactor = ((window.innerHeight / 2 - clientY) / (window.innerHeight / 2)) * panFactor;

  // Trig!
  let rotX;
  let rotY;
  if (mouseXFactor >= 0) {
    rotX = Math.atan(camCoords.z / mouseXFactor) - Math.PI / 2;
  } else {
    rotX = Math.atan(camCoords.z / mouseXFactor) + Math.PI / 2;
  }

  if (mouseYFactor >= 0) {
    rotY = Math.atan(camCoords.z / mouseYFactor) - Math.PI / 2;
  } else {
    rotY = Math.atan(camCoords.z / mouseYFactor) + Math.PI / 2;
  }
  camera.position.x = camCoords.x + -mouseXFactor;
  camera.rotation.y = camAngles.y + rotX;

  camera.position.y = camDepth + camCoords.y + mouseYFactor;
  camera.rotation.x = camAngles.x + rotY;
};

let heightCount = 0;
const animate = () => {
  requestAnimationFrame(animate);
  heightCount += 0.02;
  svgGroup.rotation.y = Math.sin(heightCount) / 10;
  renderer.render(scene, camera);
};

export const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

let camDepth = 0;
export const scroll = () => {
  camDepth = window.scrollY / 150;
  const maxBlur = 2;
  const firstPageFactor =
    window.scrollY / window.innerHeight > 1 ? 1 : window.scrollY / window.innerHeight;
  const blur = firstPageFactor * maxBlur;

  renderer.domElement.style.filter = `blur(${blur}px) brightness(${1 - firstPageFactor / 3})`;
  renderer.domElement.style.transform = `scale(${1 + firstPageFactor / 10})`;

  svgGroup.position.z = -5 + window.scrollY / 10;
  camera.position.y = camDepth + camCoords.y + mouseYFactor;
};

export const createScene = (el: HTMLCanvasElement) => {
  renderer = new WebGLRenderer({
    canvas: el,
    antialias: true,
    alpha: true
  });

  renderer.setClearColor(0xffffff, 0);
  resize();
  animate();
};
