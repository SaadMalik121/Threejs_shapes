import * as THREE from "three";

//Creating scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0");

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
  color: "#468585",
  emissive: "#468585",
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//Add lighting
const light = new THREE.DirectionalLight(0x9cdba6, 10); //(light color, intensity)
light.position.set(1, 1, 1);
scene.add(light);

//Render the scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Animate the scene

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
