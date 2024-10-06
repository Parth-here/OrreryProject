import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Add a galactic background image
const backgroundTexture = new THREE.TextureLoader().load("galaxy.JPG");
scene.background = backgroundTexture;

// Add ambient light
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

// Add a directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 5, 50).normalize();
scene.add(directionalLight);

// Create the Sun with texture
const sunGeometry = new THREE.SphereGeometry(10, 32, 32);
const sunTextureLoader = new THREE.TextureLoader();
sunTextureLoader.load("sun.jpg", (texture) => {
    const sunMaterial = new THREE.MeshStandardMaterial({
        map: texture,
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Create a glow effect for the Sun
    const glowGeometry = new THREE.SphereGeometry(10, 300, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({ color: 0xFF5349, transparent: true, opacity: 0.36 });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);
});

// Create planets with textures
const planets = [];
const planetData = [
    { name: "Mercury", radius: 20, texture: "VENUS.jpg", orbitSpeed: 0.009 },
    { name: "Venus", radius: 30, texture: "MERCURY.jpg", orbitSpeed: 0.00791 },
    { name: "Earth", radius: 40, texture: "earth.jpg", orbitSpeed: 0.007 },
    { name: "Mars", radius: 55, texture: "https://cdn.pixabay.com/photo/2016/01/20/20/23/mars-1143030_1280.jpg", orbitSpeed: 0.007 },
    { name: "Jupiter", radius: 50, texture: "mars.jpg", orbitSpeed: 0.005 },
    { name: "Saturn", radius: 65, texture: "jupiter3.jpg", orbitSpeed: 0.004 },
    { name: "Uranus", radius: 75, texture: "saturn3.jpg", orbitSpeed: 0.005 },
    { name: "Neptune", radius: 95, texture: "https://cdn.pixabay.com/photo/2018/06/30/23/09/neptune-3483877_1280.jpg", orbitSpeed: 0.0015 }
];

// Load textures and create planets
const textureLoader = new THREE.TextureLoader();
planetData.forEach(data => {
    textureLoader.load(data.texture, (texture) => {
        const geometry = new THREE.SphereGeometry(4.5, 32, 32);
        const material = new THREE.MeshStandardMaterial({ map: texture });
        const planet = new THREE.Mesh(geometry, material);
        planets.push({ mesh: planet, radius: data.radius, orbitSpeed: data.orbitSpeed, angle: 0 });

        scene.add(planet);
    });
});

// Moon for Earth
let moon;
const moonOrbitRadius = 6;
const moonOrbitSpeed = 1;
const earthRadius = 50; // Orbit radius for Earth

textureLoader.load("moon.jpg", (texture) => {
    const moonGeometry = new THREE.SphereGeometry(0.9, 32, 32);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: texture });
    moon = new THREE.Mesh(moonGeometry, moonMaterial);

    // Initially place the moon near Earth
    moon.position.x = earthRadius + moonOrbitRadius;
    scene.add(moon);
});

// Moons for Jupiter
let jupiterMoons = [];
const jupiterMoonData = [
    { name: "Moon1", orbitRadius: 6, orbitSpeed: 0.01, texture: "proteus.jpg" },
    { name: "Moon2", orbitRadius: 10, orbitSpeed: 0.018, texture: "titan.jpg" }
];

jupiterMoonData.forEach((data, index) => {
    textureLoader.load(data.texture, (texture) => {
        const moonGeometry = new THREE.SphereGeometry(0.9, 32, 32);
        const moonMaterial = new THREE.MeshStandardMaterial({ map: texture });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        jupiterMoons.push({ mesh: moon, orbitRadius: data.orbitRadius, orbitSpeed: data.orbitSpeed, angle: 0 });
        scene.add(moon);
    });
});

// Set camera position closer to the solar system
camera.position.z = 100; // Adjusted for better view

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the Sun
    const sun = scene.children.find(child => child instanceof THREE.Mesh && child.geometry === sunGeometry);
    if (sun) sun.rotation.y += 0.002;

    // Move planets in orbit
    planets.forEach(planet => {
        planet.angle += planet.orbitSpeed;
        planet.mesh.position.x = Math.cos(planet.angle) * planet.radius;
        planet.mesh.position.z = Math.sin(planet.angle) * planet.radius;
    });

    // Make the moon orbit around Earth
    const earth = planets.find(p => p.mesh.material.map.image.src.includes("earth.jpg"));
    if (earth && moon) {
        moon.position.x = earth.mesh.position.x + Math.cos(moonOrbitSpeed * Date.now() * 0.001) * moonOrbitRadius;
        moon.position.z = earth.mesh.position.z + Math.sin(moonOrbitSpeed * Date.now() * 0.001) * moonOrbitRadius;
    }

    // Move Jupiter's moons
    const jupiter = planets.find(p => p.mesh.material.map.image.src.includes("mars.jpg"));
    if (jupiter) {
        jupiterMoons.forEach(moon => {
            moon.angle += moon.orbitSpeed;
            moon.mesh.position.x = jupiter.mesh.position.x + Math.cos(moon.angle) * moon.orbitRadius;
            moon.mesh.position.z = jupiter.mesh.position.z + Math.sin(moon.angle) * moon.orbitRadius;
        });
    }

    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});






// Start the animation
animate();










