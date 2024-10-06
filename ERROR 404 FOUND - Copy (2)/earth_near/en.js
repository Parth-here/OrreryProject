// Import the GLTFLoader from Three.js
import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';

// Get the container
const container = document.getElementById('canvas-container');

// Create the scene
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Load the 3D model (Earth) using GLTFLoader
const loader = new GLTFLoader();
loader.load(
  'earth(1).glb', // Replace with the actual path to your model
  function (gltf) {
    const earthModel = gltf.scene;
    earthModel.scale.set(0.5, 0.5, 0.5); // Adjust scale if needed
    scene.add(earthModel);

    // Animation loop to rotate the Earth
    function animate() {
      requestAnimationFrame(animate);

      // Rotate the Earth model
      earthModel.rotation.y += 0.005;

      renderer.render(scene, camera);
    }

    animate();
  },
  undefined,
  function (error) {
    console.error('An error happened during the loading of the model.', error);
  }
);

// Handle window resize
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
