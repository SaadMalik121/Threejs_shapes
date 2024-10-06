import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

//Creating scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("transparent");

// Add camera
const camera = new THREE.PerspectiveCamera(
  30, //Point of view
  window.innerWidth / window.innerHeight, //Aspect ratio
  0.1, //Near clipping
  1000 //Far clipping
);
camera.position.z = 5;

// Create and add cube object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({
  color: "#462585",
  emissive: "#462585",
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const geometry1 = new THREE.BoxGeometry(1.3, 0.1, 1.3);
const material1 = new THREE.MeshStandardMaterial({
  color: "#B4B4B3",
  emissive: "#B4B4B3",
});
const cube1 = new THREE.Mesh(geometry1, material1);
cube1.position.y = -1;
scene.add(cube1);

//Add lighting
const light = new THREE.SpotLight(0x9d234d, 450); //(light color, intensity)
light.position.set(1, 1, 1);
scene.add(light);

//Render the scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Add controls
const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableZoom = true;
controls.enableRotate = true;
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enablePan = true;

//Animate the scene

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

animate();

// Handle resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
