




// // Scene, Camera, and Renderer Setup
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);




// // OrbitControls Setup for Free Movement in All Directions
// const controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;  // Enable damping for smoother controls
// controls.dampingFactor = 0.05;  // Damping factor for a bit of inertia
// controls.enableZoom = true;     // Allow zooming in and out
// controls.enablePan = true;      // Enable panning to move around freely
// controls.minDistance = 5;       // Minimum zoom distance
// controls.maxDistance = 200;     // Maximum zoom distance
// controls.screenSpacePanning = true; // Allow panning when the mouse is moved

// // Initialize TextureLoader
// const textureLoader = new THREE.TextureLoader();

// // Add Ambient Light to brighten the entire scene
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // White light with half intensity
// scene.add(ambientLight);

// let sun;

// // Function to create the Sun with texture
// function createSun() {
//     const sunGeometry = new THREE.SphereGeometry(4, 32, 32);
//     const sunTexture = textureLoader.load('sun.jpg'); // Load your sun texture
//     const sunMaterial = new THREE.MeshStandardMaterial({ map: sunTexture }); // Use texture
//     sun = new THREE.Mesh(sunGeometry, sunMaterial);
    
//     // Create a directional light to act as sunlight
//     const sunLight = new THREE.DirectionalLight(0xffffff, 1.5,500); // White light with intensity of 1
//     sunLight.position.set(1,5,1,); // Position the light at the sun's location
//     sunLight.castShadow = false; // Enable shadows if desired

//     // Add the sun and its light to the scene
//     scene.add(sun);
//     scene.add(sunLight);

//     return sun;
// }

// // Function to create a circular orbit path
// function createOrbitPath(radius) {
//     const curve = new THREE.EllipseCurve(
//         0, 0,            // Center of the ellipse
//         radius, radius,   // Radius of the ellipse
//         0, 2 * Math.PI,   // Start angle, end angle
//         false,            // Clockwise or counterclockwise
//         0                 // Rotation angle
//     );

//     const points = curve.getPoints(100); // Get points along the curve
//     const geometry = new THREE.BufferGeometry().setFromPoints(points);
//     const material = new THREE.LineBasicMaterial({ color: 0xffffff });
//     const orbitPath = new THREE.Line(geometry, material);

//     orbitPath.rotation.x = Math.PI / 2; // Rotate to lie in the XZ plane
//     scene.add(orbitPath);

//     return orbitPath;
// }

// // Create orbit paths for the planets
// const orbitPaths = {
//     mercury: createOrbitPath(5),
//     venus: createOrbitPath(7),
//     earth: createOrbitPath(10),
//     mars: createOrbitPath(15),
//     jupiter: createOrbitPath(30), // Keep Jupiter's orbit
//     saturn: createOrbitPath(40),
//     uranus: createOrbitPath(55),
//     neptune: createOrbitPath(70)
// };

// // Function to create a planet with texture
// function createPlanet(size, color, distance, texturePath) {
//     const geometry = new THREE.SphereGeometry(size, 32, 32);
//     const planetTexture = textureLoader.load(texturePath); // Load the planet texture
//     const planetMaterial = new THREE.MeshStandardMaterial({ map: planetTexture });
//     const planet = new THREE.Mesh(geometry, planetMaterial);

//     const orbit = new THREE.Object3D(); // Create an empty object for orbiting
//     orbit.add(planet);
//     planet.position.x = distance; // Position planet at a distance from the sun
//     scene.add(orbit);

//     return { planet, orbit };
// }

// // Add all planets with their respective textures
// const planets = {
//     mercury: createPlanet(0.4, 0xaaaaaa, 5, 'mercury.jpg'),
//     venus: createPlanet(0.9, 0xffcc00, 7, 'venus.jpg'),
//     earth: createPlanet(1, 0x0000ff, 10, 'earth.jpg'),
//     mars: createPlanet(0.7, 0xff4500, 15, 'mars.jpg'),
//     jupiter: createPlanet(2, 0xffa500, 30, 'jupiter3.jpg'), 
//     saturn: createPlanet(1.8, 0xf4a460, 40, 'saturn3.jpg'),
//     uranus: createPlanet(1.4, 0x00ffff, 55, 'uranus.jpg'),
//     neptune: createPlanet(1.3, 0x0000ff, 70, 'neptune4.jpg')
// };

// // Call createSun function
// createSun();

// // Create a moon for Earth
// function createMoon() {
//     const moonGeometry = new THREE.SphereGeometry(0.25, 32, 32); // Size of the moon
//     const moonMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); // Color of the moon
//     const moon = new THREE.Mesh(moonGeometry, moonMaterial);

//     const moonOrbit = new THREE.Object3D(); // Create an empty object for moon's orbit
//     moonOrbit.add(moon);
//     moon.position.x = 2.25; // Position moon at a distance from Earth
//     planets.earth.planet.add(moonOrbit); // Add moon orbit to Earth's orbit
    
//     return moonOrbit;
// }

// // Create moon for Earth
// createMoon();

// function jupitercreateMoon() {
//     const moonGeometry = new THREE.SphereGeometry(0.25, 32, 32); // Size of the moon
//     const moonMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); // Color of the moon
//     const moon = new THREE.Mesh(moonGeometry, moonMaterial);

//     const moonOrbit = new THREE.Object3D(); // Create an empty object for moon's orbit
//     moonOrbit.add(moon);
//     moon.position.x = 3.5; // Position moon at a distance from Jupiter
//     planets.jupiter.planet.add(moonOrbit); // Add moon orbit to Jupiter's orbit
    
//     return moonOrbit;
// }

// // Create moon for Jupiter
// jupitercreateMoon();

// // Create a basic ring around Saturn
// function createSaturnRing() {
//     const ringGeometry = new THREE.TorusGeometry(2.5, 0.2, 16, 100); // Create a torus shape
//     const ringMaterial = new THREE.MeshStandardMaterial({ color: 0xcc9966, side: THREE.DoubleSide });
//     const saturnRing = new THREE.Mesh(ringGeometry, ringMaterial);
    
//     saturnRing.rotation.x = Math.PI / 4; // Rotate to lie flat around Saturn
//     saturnRing.position.set(0, 0, 0); // Position the ring around Saturn
//     planets.saturn.planet.add(saturnRing); // Add the ring to Saturn's orbit
    
//     return saturnRing;
// }

// // Create Saturn's ring
// createSaturnRing();

//  // Function to create clustered asteroid belt
//  function createAsteroidBelt() {
//     const textureLoader = new THREE.TextureLoader();
//     const asteroidMaterial = new THREE.MeshStandardMaterial({
//         emissive: 0x888888,  // Set emissive color to brighten the asteroids
//         emissiveIntensity: 0.6, // Brightness of the emissive color
//         roughness: 1,
//         metalness: 0
//     });

//     const clusterRadius = 5; // Radius for clustering
//     for (let i = 0; i < 200; i++) { // Create 200 asteroids for more density
//         const asteroidGeometry = new THREE.DodecahedronGeometry(Math.random() * 0.5 + 0.2, 0); // Random size
        
//         // Load a random asteroid texture (make sure to have these images in your project folder)
//         const textureIndex = Math.floor(Math.random() * 5) + 1; // Assuming you have 5 different textures
//         const texture = textureLoader.load(`texture.jpg`);
//         asteroidMaterial.map = texture;

//         const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
        
//         // Randomly position the asteroid within the cluster radius
//         const angle = Math.random() * 2 * Math.PI; // Random angle
//         const distance = 20; // Fixed distance from the sun for the cluster
//         asteroid.position.x = Math.cos(angle) * distance + (Math.random() - 0.5) * clusterRadius; // Cluster position
//         asteroid.position.z = Math.sin(angle) * distance + (Math.random() - 0.5) * clusterRadius; // Cluster position
//         asteroid.position.y = (Math.random() - 0.5) * 2; // Random height

//         // Slightly randomize the rotation for each asteroid to make them look different
//         asteroid.rotation.x = Math.random() * Math.PI;
//         asteroid.rotation.y = Math.random() * Math.PI;
//         asteroid.rotation.z = Math.random() * Math.PI;

//         scene.add(asteroid);
//     }
// }

// // Create asteroid belt
// createAsteroidBelt();

// // Update Planet Positions with live data
// async function updatePlanetPositions() {
//     const data = await fetchPlanetaryData();

//     // Update positions for each planet
//     planets.mercury.planet.position.set(data.mercury.x, data.mercury.y, data.mercury.z);
//     planets.venus.planet.position.set(data.venus.x, data.venus.y, data.venus.z);
//     planets.earth.planet.position.set(data.earth.x, data.earth.y, data.earth.z);
//     planets.mars.planet.position.set(data.mars.x, data.mars.y, data.mars.z);
//     planets.jupiter.planet.position.set(data.jupiter.x, data.jupiter.y, data.jupiter.z);
//     planets.saturn.planet.position.set(data.saturn.x, data.saturn.y, data.saturn.z);
//     planets.uranus.planet.position.set(data.uranus.x, data.uranus.y, data.uranus.z);
//     planets.neptune.planet.position.set(data.neptune.x, data.neptune.y, data.neptune.z);
// }


















// /// Animate Function
// function animate() {
//     requestAnimationFrame(animate);
//     controls.update(); // Update controls

//     sun.rotation.y += 0.005;

//     // Rotate the planets around the sun
//     planets.mercury.orbit.rotation.y += 0.02;
//     planets.venus.orbit.rotation.y += 0.018;
//     planets.earth.orbit.rotation.y += 0.016;
//     planets.mars.orbit.rotation.y += 0.014;
//     planets.jupiter.orbit.rotation.y += 0.012; // Keep Jupiter moving
//     planets.saturn.orbit.rotation.y += 0.01; // Keep Saturn moving
//     planets.uranus.orbit.rotation.y += 0.008; // Keep Uranus moving
//     planets.neptune.orbit.rotation.y += 0.006; // Keep Neptune moving

//     // Rotate the moon around the Earth
//     const earthOrbit = planets.earth.planet.children[0]; // Get Earth's orbit
//     earthOrbit.rotation.y += 0.05; // Speed of the moon's orbit

//     // const infoBox = document.getElementById('planetInfoBox');
//     // if (infoBox.style.display === 'block') {
//     //     // You can track a particular planet (e.g., Earth) or the selected planet
//     //     const planet = planets.earth.planet;  // Example: track Earth
//     //     const screenPos = toScreenPosition(planet, camera);
//     //     infoBox.style.left = `${screenPos.x}px`;
//     //     infoBox.style.top = `${screenPos.y}px`;
//     // }


//     // For Jupiter's moon, if added
//     const jupiterOrbit = planets.jupiter.planet.children[0]; 
//     jupiterOrbit.rotation.y += 0.05;
    
//     renderer.render(scene, camera);
// }










// const celestialData = {
//     sun: {
//         name: "Sun",
//         size: "1,391,000 km in diameter",
//         type: "Star"
//     },
//     mercury: {
//         name: "Mercury",
//         size: "4,880 km in diameter",
//         distance: "57.9 million km from the Sun",
//         rotationPeriod: "58.6 Earth days"
//     },
//     venus: {
//         name: "Venus",
//         size: "12,104 km in diameter",
//         distance: "108.2 million km from the Sun",
//         rotationPeriod: "243 Earth days"
//     },
//     earth: {
//         name: "Earth",
//         size: "12,742 km in diameter",
//         distance: "149.6 million km from the Sun",
//         rotationPeriod: "24 hours"
//     },
//     mars: {
//         name: "Mars",
//         size: "6,779 km in diameter",
//         distance: "227.9 million km from the Sun",
//         rotationPeriod: "1.03 Earth days"
//     },
//     jupiter: {
//         name: "Jupiter",
//         size: "139,820 km in diameter",
//         distance: "778.5 million km from the Sun",
//         rotationPeriod: "9.93 Earth hours"
//     },
//     saturn: {
//         name: "Saturn",
//         size: "116,460 km in diameter",
//         distance: "1.43 billion km from the Sun",
//         rotationPeriod: "10.7 Earth hours"
//     },
//     uranus: {
//         name: "Uranus",
//         size: "50,724 km in diameter",
//         distance: "2.87 billion km from the Sun",
//         rotationPeriod: "17.24 Earth hours"
//     },
//     neptune: {
//         name: "Neptune",
//         size: "49,244 km in diameter",
//         distance: "4.50 billion km from the Sun",
//         rotationPeriod: "16 Earth hours"
//     }
// };


// // Function to dynamically create buttons for planets
// function createPlanetButtons() {
//     const planetButtonsDiv = document.getElementById('planetButtons');
    
//     Object.keys(celestialData).forEach(planetKey => {
//         const button = document.createElement('button');
//         button.innerText = celestialData[planetKey].name;
//         button.classList.add('planet-button');
//         button.onclick = () => displayPlanetInfo(celestialData[planetKey]);
//         planetButtonsDiv.appendChild(button);
//     });
// }

// // // Function to display the information in the info box
// // function displayPlanetInfo(data) {
// //     const infoBox = document.getElementById('infoBox');
// //     if (!infoBox) return;  // Ensure infoBox exists

// //     infoBox.style.display = 'block';
// //     infoBox.innerHTML = `<h1>${data.name}</h1>
// //                          <p><strong>Size:</strong> ${data.size}</p>
// //                          <p><strong>Distance from Sun:</strong> ${data.distance || 'N/A'}</p>
// //                          <p><strong>Rotation Period:</strong> ${data.rotationPeriod || 'N/A'}</p>
// //                          `;
// // }


// // Function to display the information in the info box
// // function displayPlanetInfo(data) {
// //     const infoBox = document.getElementById('infoBox');
// //     if (!infoBox) return;  // Ensure infoBox exists

// //     infoBox.style.display = 'block';

// //     // Add planet data and close button (cross icon)
// //     infoBox.innerHTML = `
// //         <div id="infoHeader">
// //             <h1>${data.name}</h1>
// //             <span id="closeInfoBox" style="cursor:pointer;">&#10005;</span> <!-- Cross icon -->
// //         </div>
// //         <p><strong>Size:</strong> ${data.size}</p>
// //         <p><strong>Distance from Sun:</strong> ${data.distance || 'N/A'}</p>
// //         <p><strong>Rotation Period:</strong> ${data.rotationPeriod || 'N/A'}</p>
// //     `;

// //     // Add event listener to close the info box
// //     document.getElementById('closeInfoBox').onclick = () => {
// //         infoBox.style.display = 'none';
// //     };
// // }


// // Function to display the information in the info box
// function displayPlanetInfo(data) {
//     const infoBox = document.getElementById('infoBox');
//     if (!infoBox) return;  // Ensure infoBox exists

//     infoBox.style.display = 'block';

//     // Add planet data and close button (cross icon)
//     infoBox.innerHTML = `
//         <div id="infoHeader" style="position: relative;">
//             <h1>${data.name}</h1>
//             <span id="closeInfoBox" style="position: absolute; top: 10px; right: 10px; font-size: 20px; cursor:pointer;">&#10005;</span> <!-- Cross icon -->
//         </div>
//         <p><strong>Size:</strong> ${data.size}</p>
//         <p><strong>Distance from Sun:</strong> ${data.distance || 'N/A'}</p>
//         <p><strong>Rotation Period:</strong> ${data.rotationPeriod || 'N/A'}</p>
//     `;

//     // Add event listener to close the info box
//     document.getElementById('closeInfoBox').onclick = () => {
//         infoBox.style.display = 'none';
//     };
// }



// // Call the function to create buttons after the DOM has loaded
// window.onload = createPlanetButtons;


// // Function to project the 3D planet position to 2D screen coordinates
// function toScreenPosition(obj, camera) {
//     const vector = new THREE.Vector3();
    
//     // Get object's position in world space and project to screen
//     obj.updateMatrixWorld(); // Ensure the object's world matrix is updated
//     vector.setFromMatrixPosition(obj.matrixWorld);
//     vector.project(camera); // Project the vector using the camera

//     // Convert normalized coordinates to screen space
//     const widthHalf = 0.5 * window.innerWidth;
//     const heightHalf = 0.5 * window.innerHeight;

//     return {
//         x: (vector.x * widthHalf) + widthHalf,
//         y: -(vector.y * heightHalf) + heightHalf
//     };
// }






// // Update displayPlanetInfo to position the box relative to the planet
// // function displayPlanetInfo(data, planetObject) {
// //     const infoBox = document.getElementById('planetInfoBox');
// //     if (!infoBox) return;

// //     // Set info box content
// //     infoBox.innerHTML = `<h1>${data.name}</h1>
// //                          <p><strong>Size:</strong> ${data.size}</p>
// //                          <p><strong>Distance from Sun:</strong> ${data.distance || 'N/A'}</p>
// //                          <p><strong>Rotation Period:</strong> ${data.rotationPeriod || 'N/A'}</p>`;
    
// //     // Show the box and update its position
// //     infoBox.style.display = 'block';

// //     // Update the position of the info box based on the planet's position
// //     const screenPos = toScreenPosition(planetObject, camera);
// //     infoBox.style.left = `${screenPos.x}px`;
// //     infoBox.style.top = `${screenPos.y}px`;
// // }

// // // Update the button event to pass the planet object for positioning
// // function createPlanetButtons() {
// //     const planetButtonsDiv = document.getElementById('planetButtons');
    
// //     Object.keys(celestialData).forEach(planetKey => {
// //         const button = document.createElement('button');
// //         button.innerText = celestialData[planetKey].name;
// //         button.classList.add('planet-button');
        
// //         // Pass the planet object along with the data to position the info box
// //         button.onclick = () => displayPlanetInfo(celestialData[planetKey], planets[planetKey].planet);
// //         planetButtonsDiv.appendChild(button);
// //     });
// // }




















// // Start Animation
// animate();


// // Window Resize Handling
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });
// // Set Background Image
// const backgroundTexture = textureLoader.load('galaxy.jpg'); // Replace with the path to your image
// scene.background = backgroundTexture;


// function setCameraView(view) {
//     switch(view) {
//         case 'top':
//             camera.position.set(0, 100, 0);
//             camera.lookAt(0, 0, 0);
//             break;
//         case 'front':
//             camera.position.set(0, 39, 100);
//             camera.lookAt(0, 0, 0);
//             break;
//         default:
//             camera.position.set(0, 50, 100);
//             camera.lookAt(0, 0, 0);
//     }
//     controls.update();
// }










// Scene, Camera, and Renderer Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);




// OrbitControls Setup for Free Movement in All Directions
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;  // Enable damping for smoother controls
controls.dampingFactor = 0.05;  // Damping factor for a bit of inertia
controls.enableZoom = true;     // Allow zooming in and out
controls.enablePan = true;      // Enable panning to move around freely
controls.minDistance = 5;       // Minimum zoom distance
controls.maxDistance = 200;     // Maximum zoom distance
controls.screenSpacePanning = true; // Allow panning when the mouse is moved

// Initialize TextureLoader
const textureLoader = new THREE.TextureLoader();

// Add Ambient Light to brighten the entire scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // White light with half intensity
scene.add(ambientLight);

let sun;

// Function to create the Sun with texture
function createSun() {
    const sunGeometry = new THREE.SphereGeometry(4, 32, 32);
    const sunTexture = textureLoader.load('sun.jpg'); // Load your sun texture
    const sunMaterial = new THREE.MeshStandardMaterial({ map: sunTexture }); // Use texture
    sun = new THREE.Mesh(sunGeometry, sunMaterial);
    
    // Create a directional light to act as sunlight
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.5,500); // White light with intensity of 1
    sunLight.position.set(1,5,1,); // Position the light at the sun's location
    sunLight.castShadow = false; // Enable shadows if desired

    // Add the sun and its light to the scene
    scene.add(sun);
    scene.add(sunLight);

    return sun;
}

// Function to create a circular orbit path
function createOrbitPath(radius) {
    const curve = new THREE.EllipseCurve(
        0, 0,            // Center of the ellipse
        radius, radius,   // Radius of the ellipse
        0, 2 * Math.PI,   // Start angle, end angle
        false,            // Clockwise or counterclockwise
        0                 // Rotation angle
    );

    const points = curve.getPoints(100); // Get points along the curve
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const orbitPath = new THREE.Line(geometry, material);

    orbitPath.rotation.x = Math.PI / 2; // Rotate to lie in the XZ plane
    scene.add(orbitPath);

    return orbitPath;
}

// Create orbit paths for the planets
const orbitPaths = {
    mercury: createOrbitPath(5),
    venus: createOrbitPath(7),
    earth: createOrbitPath(10),
    mars: createOrbitPath(15),
    jupiter: createOrbitPath(30), // Keep Jupiter's orbit
    saturn: createOrbitPath(40),
    uranus: createOrbitPath(55),
    neptune: createOrbitPath(70)
};

// Function to create a planet with texture
function createPlanet(size, color, distance, texturePath) {
    const geometry = new THREE.SphereGeometry(size, 32, 32);
    const planetTexture = textureLoader.load(texturePath); // Load the planet texture
    const planetMaterial = new THREE.MeshStandardMaterial({ map: planetTexture });
    const planet = new THREE.Mesh(geometry, planetMaterial);

    const orbit = new THREE.Object3D(); // Create an empty object for orbiting
    orbit.add(planet);
    planet.position.x = distance; // Position planet at a distance from the sun
    scene.add(orbit);

    return { planet, orbit };
}

// Add all planets with their respective textures
const planets = {
    mercury: createPlanet(0.4, 0xaaaaaa, 5, 'mercury.jpg'),
    venus: createPlanet(0.9, 0xffcc00, 7, 'venus.jpg'),
    earth: createPlanet(1, 0x0000ff, 10, 'earth.jpg'),
    mars: createPlanet(0.7, 0xff4500, 15, 'mars.jpg'),
    jupiter: createPlanet(2, 0xffa500, 30, 'jupiter3.jpg'), 
    saturn: createPlanet(1.8, 0xf4a460, 40, 'saturn3.jpg'),
    uranus: createPlanet(1.4, 0x00ffff, 55, 'uranus.jpg'),
    neptune: createPlanet(1.3, 0x0000ff, 70, 'neptune4.jpg')
};

// Call createSun function
createSun();

// Create a moon for Earth
function createMoon() {
    const moonGeometry = new THREE.SphereGeometry(0.25, 32, 32); // Size of the moon
    const moonMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); // Color of the moon
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const moonOrbit = new THREE.Object3D(); // Create an empty object for moon's orbit
    moonOrbit.add(moon);
    moon.position.x = 2.25; // Position moon at a distance from Earth
    planets.earth.planet.add(moonOrbit); // Add moon orbit to Earth's orbit
    
    return moonOrbit;
}

// Create moon for Earth
createMoon();

function jupitercreateMoon() {
    const moonGeometry = new THREE.SphereGeometry(0.25, 32, 32); // Size of the moon
    const moonMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); // Color of the moon
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const moonOrbit = new THREE.Object3D(); // Create an empty object for moon's orbit
    moonOrbit.add(moon);
    moon.position.x = 3.5; // Position moon at a distance from Jupiter
    planets.jupiter.planet.add(moonOrbit); // Add moon orbit to Jupiter's orbit
    
    return moonOrbit;
}

// Create moon for Jupiter
jupitercreateMoon();

// Create a basic ring around Saturn
function createSaturnRing() {
    const ringGeometry = new THREE.TorusGeometry(2.5, 0.2, 16, 100); // Create a torus shape
    const ringMaterial = new THREE.MeshStandardMaterial({ color: 0xcc9966, side: THREE.DoubleSide });
    const saturnRing = new THREE.Mesh(ringGeometry, ringMaterial);
    
    saturnRing.rotation.x = Math.PI / 4; // Rotate to lie flat around Saturn
    saturnRing.position.set(0, 0, 0); // Position the ring around Saturn
    planets.saturn.planet.add(saturnRing); // Add the ring to Saturn's orbit
    
    return saturnRing;
}

// Create Saturn's ring
createSaturnRing();

 // Function to create clustered asteroid belt
 const asteroidBeltGroup = new THREE.Group(); // Create a group for the asteroid belt
const asteroids = []; // Array to store asteroids

function createAsteroidBelt() {
    const textureLoader = new THREE.TextureLoader();
    const asteroidMaterial = new THREE.MeshStandardMaterial({
        emissive: 0x888888,  // Set emissive color to brighten the asteroids
        emissiveIntensity: 0.6,
        roughness: 1,
        metalness: 0
    });

    const clusterRadius = 5; // Radius for clustering
    for (let i = 0; i < 200; i++) {
        const asteroidGeometry = new THREE.DodecahedronGeometry(Math.random() * 0.5 + 0.2, 0); // Random size

        // Load the asteroid texture
        const texture = textureLoader.load('texture.jpg');
        asteroidMaterial.map = texture;

        const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);

        // Randomly position the asteroid within the cluster radius
        const angle = Math.random() * 2 * Math.PI; // Random angle
        const distance = 20; // Fixed distance from the sun for the cluster
        asteroid.position.x = Math.cos(angle) * distance + (Math.random() - 0.5) * clusterRadius;
        asteroid.position.z = Math.sin(angle) * distance + (Math.random() - 0.5) * clusterRadius;
        asteroid.position.y = (Math.random() - 0.5) * 2; // Random height

        // Slightly randomize the rotation for each asteroid
        asteroid.rotation.x = Math.random() * Math.PI;
        asteroid.rotation.y = Math.random() * Math.PI;
        asteroid.rotation.z = Math.random() * Math.PI;

        // Add asteroid to the group and store it in the asteroids array
        asteroidBeltGroup.add(asteroid);
        asteroids.push(asteroid);
    }

    // Add the asteroid belt group to the scene
    scene.add(asteroidBeltGroup);
}


// Create asteroid belt
createAsteroidBelt();

// Update Planet Positions with live data
async function updatePlanetPositions() {
    const data = await fetchPlanetaryData();

    // Update positions for each planet
    planets.mercury.planet.position.set(data.mercury.x, data.mercury.y, data.mercury.z);
    planets.venus.planet.position.set(data.venus.x, data.venus.y, data.venus.z);
    planets.earth.planet.position.set(data.earth.x, data.earth.y, data.earth.z);
    planets.mars.planet.position.set(data.mars.x, data.mars.y, data.mars.z);
    planets.jupiter.planet.position.set(data.jupiter.x, data.jupiter.y, data.jupiter.z);
    planets.saturn.planet.position.set(data.saturn.x, data.saturn.y, data.saturn.z);
    planets.uranus.planet.position.set(data.uranus.x, data.uranus.y, data.uranus.z);
    planets.neptune.planet.position.set(data.neptune.x, data.neptune.y, data.neptune.z);
}


















/// Animate Function
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Update controls

    sun.rotation.y += 0.005;

    // Rotate the planets around the sun
    planets.mercury.orbit.rotation.y += 0.02;
    planets.venus.orbit.rotation.y += 0.018;
    planets.earth.orbit.rotation.y += 0.016;
    planets.mars.orbit.rotation.y += 0.014;
    planets.jupiter.orbit.rotation.y += 0.012; // Keep Jupiter moving
    planets.saturn.orbit.rotation.y += 0.01; // Keep Saturn moving
    planets.uranus.orbit.rotation.y += 0.008; // Keep Uranus moving
    planets.neptune.orbit.rotation.y += 0.006; // Keep Neptune moving

    // Rotate the moon around the Earth
    const earthOrbit = planets.earth.planet.children[0]; // Get Earth's orbit
    earthOrbit.rotation.y += 0.05; // Speed of the moon's orbit

    // const infoBox = document.getElementById('planetInfoBox');
    // if (infoBox.style.display === 'block') {
    //     // You can track a particular planet (e.g., Earth) or the selected planet
    //     const planet = planets.earth.planet;  // Example: track Earth
    //     const screenPos = toScreenPosition(planet, camera);
    //     infoBox.style.left = `${screenPos.x}px`;
    //     infoBox.style.top = `${screenPos.y}px`;
    // }


    // For Jupiter's moon, if added
    const jupiterOrbit = planets.jupiter.planet.children[0]; 
    jupiterOrbit.rotation.y += 0.05;

    // Rotate individual asteroids (optional for added effect)
    asteroids.forEach(asteroid => {
        asteroid.rotation.x += 0.009;
        asteroid.rotation.y += 0.006;
    });

    // Rotate the entire asteroid belt around the Y-axis
    asteroidBeltGroup.rotation.y += 0.0005; // Adjust rotation speed as needed

    
    renderer.render(scene, camera);
}










const celestialData = {
    sun: {
        name: "Sun",
        size: "1,391,000 km in diameter",
        type: "Star"
    },
    mercury: {
        name: "Mercury",
        size: "4,880 km in diameter",
        distance: "57.9 million km from the Sun",
        rotationPeriod: "58.6 Earth days"
    },
    venus: {
        name: "Venus",
        size: "12,104 km in diameter",
        distance: "108.2 million km from the Sun",
        rotationPeriod: "243 Earth days"
    },
    earth: {
        name: "Earth",
        size: "12,742 km in diameter",
        distance: "149.6 million km from the Sun",
        rotationPeriod: "24 hours"
    },
    mars: {
        name: "Mars",
        size: "6,779 km in diameter",
        distance: "227.9 million km from the Sun",
        rotationPeriod: "1.03 Earth days"
    },
    jupiter: {
        name: "Jupiter",
        size: "139,820 km in diameter",
        distance: "778.5 million km from the Sun",
        rotationPeriod: "9.93 Earth hours"
    },
    saturn: {
        name: "Saturn",
        size: "116,460 km in diameter",
        distance: "1.43 billion km from the Sun",
        rotationPeriod: "10.7 Earth hours"
    },
    uranus: {
        name: "Uranus",
        size: "50,724 km in diameter",
        distance: "2.87 billion km from the Sun",
        rotationPeriod: "17.24 Earth hours"
    },
    neptune: {
        name: "Neptune",
        size: "49,244 km in diameter",
        distance: "4.50 billion km from the Sun",
        rotationPeriod: "16 Earth hours"
    }
};


// Function to dynamically create buttons for planets
function createPlanetButtons() {
    const planetButtonsDiv = document.getElementById('planetButtons');
    
    Object.keys(celestialData).forEach(planetKey => {
        const button = document.createElement('button');
        button.innerText = celestialData[planetKey].name;
        button.classList.add('planet-button');
        button.onclick = () => displayPlanetInfo(celestialData[planetKey]);
        planetButtonsDiv.appendChild(button);
    });
}

// // Function to display the information in the info box
// function displayPlanetInfo(data) {
//     const infoBox = document.getElementById('infoBox');
//     if (!infoBox) return;  // Ensure infoBox exists

//     infoBox.style.display = 'block';
//     infoBox.innerHTML = `<h1>${data.name}</h1>
//                          <p><strong>Size:</strong> ${data.size}</p>
//                          <p><strong>Distance from Sun:</strong> ${data.distance || 'N/A'}</p>
//                          <p><strong>Rotation Period:</strong> ${data.rotationPeriod || 'N/A'}</p>
//                          `;
// }


// Function to display the information in the info box
// function displayPlanetInfo(data) {
//     const infoBox = document.getElementById('infoBox');
//     if (!infoBox) return;  // Ensure infoBox exists

//     infoBox.style.display = 'block';

//     // Add planet data and close button (cross icon)
//     infoBox.innerHTML = `
//         <div id="infoHeader">
//             <h1>${data.name}</h1>
//             <span id="closeInfoBox" style="cursor:pointer;">&#10005;</span> <!-- Cross icon -->
//         </div>
//         <p><strong>Size:</strong> ${data.size}</p>
//         <p><strong>Distance from Sun:</strong> ${data.distance || 'N/A'}</p>
//         <p><strong>Rotation Period:</strong> ${data.rotationPeriod || 'N/A'}</p>
//     `;

//     // Add event listener to close the info box
//     document.getElementById('closeInfoBox').onclick = () => {
//         infoBox.style.display = 'none';
//     };
// }


// Function to display the information in the info box
function displayPlanetInfo(data) {
    const infoBox = document.getElementById('infoBox');
    if (!infoBox) return;  // Ensure infoBox exists

    infoBox.style.display = 'block';

    // Add planet data and close button (cross icon)
    infoBox.innerHTML = `
        <div id="infoHeader" style="position: relative;">
            <h1>${data.name}</h1>
            <span id="closeInfoBox" style="position: absolute; top: 10px; right: 10px; font-size: 20px; cursor:pointer;">&#10005;</span> <!-- Cross icon -->
        </div>
        <p><strong>Size:</strong> ${data.size}</p>
        <p><strong>Distance from Sun:</strong> ${data.distance || 'N/A'}</p>
        <p><strong>Rotation Period:</strong> ${data.rotationPeriod || 'N/A'}</p>
    `;

    // Add event listener to close the info box
    document.getElementById('closeInfoBox').onclick = () => {
        infoBox.style.display = 'none';
    };
}



// Call the function to create buttons after the DOM has loaded
window.onload = createPlanetButtons;


// Function to project the 3D planet position to 2D screen coordinates
function toScreenPosition(obj, camera) {
    const vector = new THREE.Vector3();
    
    // Get object's position in world space and project to screen
    obj.updateMatrixWorld(); // Ensure the object's world matrix is updated
    vector.setFromMatrixPosition(obj.matrixWorld);
    vector.project(camera); // Project the vector using the camera

    // Convert normalized coordinates to screen space
    const widthHalf = 0.5 * window.innerWidth;
    const heightHalf = 0.5 * window.innerHeight;

    return {
        x: (vector.x * widthHalf) + widthHalf,
        y: -(vector.y * heightHalf) + heightHalf
    };
}






// Update displayPlanetInfo to position the box relative to the planet
// function displayPlanetInfo(data, planetObject) {
//     const infoBox = document.getElementById('planetInfoBox');
//     if (!infoBox) return;

//     // Set info box content
//     infoBox.innerHTML = `<h1>${data.name}</h1>
//                          <p><strong>Size:</strong> ${data.size}</p>
//                          <p><strong>Distance from Sun:</strong> ${data.distance || 'N/A'}</p>
//                          <p><strong>Rotation Period:</strong> ${data.rotationPeriod || 'N/A'}</p>`;
    
//     // Show the box and update its position
//     infoBox.style.display = 'block';

//     // Update the position of the info box based on the planet's position
//     const screenPos = toScreenPosition(planetObject, camera);
//     infoBox.style.left = `${screenPos.x}px`;
//     infoBox.style.top = `${screenPos.y}px`;
// }

// // Update the button event to pass the planet object for positioning
// function createPlanetButtons() {
//     const planetButtonsDiv = document.getElementById('planetButtons');
    
//     Object.keys(celestialData).forEach(planetKey => {
//         const button = document.createElement('button');
//         button.innerText = celestialData[planetKey].name;
//         button.classList.add('planet-button');
        
//         // Pass the planet object along with the data to position the info box
//         button.onclick = () => displayPlanetInfo(celestialData[planetKey], planets[planetKey].planet);
//         planetButtonsDiv.appendChild(button);
//     });
// }




















// Start Animation
animate();


// Window Resize Handling
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
// Set Background Image
const backgroundTexture = textureLoader.load('galaxy.jpg'); // Replace with the path to your image
scene.background = backgroundTexture;


function setCameraView(view) {
    switch(view) {
        case 'top':
            camera.position.set(0, 100, 0);
            camera.lookAt(0, 0, 0);
            break;
        case 'front':
            camera.position.set(0, 39, 100);
            camera.lookAt(0, 0, 0);
            break;
        default:
            camera.position.set(0, 50, 100);
            camera.lookAt(0, 0, 0);
    }
    controls.update();
}


