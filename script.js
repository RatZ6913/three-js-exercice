import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.querySelector('#canva');
const renderer = new THREE.WebGLRenderer({antialias: true, canvas});

const fov = 50; // Field ov view
const aspect = 2; // the canvas default
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 50; // Taille
camera.position.z = 128;
renderer.setSize( window.innerWidth, window.innerHeight );
const scene = new THREE.Scene();

const controls = new OrbitControls( camera, renderer.domElement );

// SOLEIL 
const sunGeometry = new THREE.SphereGeometry(6);
const sunTexture = new THREE.TextureLoader().load('/sun.jpeg');
const sunMaterial = new THREE.MeshBasicMaterial({map: sunTexture});
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
const solarSystem = new THREE.Group();
solarSystem.add(sunMesh);
scene.add(solarSystem);

// TERRE 
const earthGeometry = new THREE.SphereGeometry(4);
const earthTexture = new THREE.TextureLoader().load('/earth.jpeg');
const earthMaterial = new THREE.MeshBasicMaterial({map: earthTexture});
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
const solarSystem2 = new THREE.Group();
solarSystem.add(earthMesh);
solarSystem2.add(earthMesh);
solarSystem2.position.x = 25;
scene.add(solarSystem2);


const marsGeometry = new THREE.SphereGeometry(5);
const marsTexture = new THREE.TextureLoader().load('/mars.jpeg');
const marsMaterial = new THREE.MeshBasicMaterial({map: marsTexture});
const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
const solarSystem3 = new THREE.Group();
solarSystem3.add(marsMesh);
solarSystem3.position.x = 50;
scene.add(solarSystem3);

const venusGeometry = new THREE.SphereGeometry(3);
const venusTexture = new THREE.TextureLoader().load('/venus.jpeg');
const venusMaterial = new THREE.MeshBasicMaterial({map: venusTexture});
const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
const solarSystem4 = new THREE.Group();
solarSystem4.add(venusMesh);
solarSystem4.position.x = -50;
scene.add(solarSystem4);

const mercuryGeometry = new THREE.SphereGeometry(5);
const mercuryTexture = new THREE.TextureLoader().load('/mercury.png');
const mercuryMaterial = new THREE.MeshBasicMaterial({map: mercuryTexture});
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
const solarSystem5 = new THREE.Group();
solarSystem5.add(mercuryMesh);
solarSystem5.position.x = -10;
scene.add(solarSystem5);

const jupiterGeometry = new THREE.SphereGeometry(8);
const jupiterTexture = new THREE.TextureLoader().load('/jupiter.webp');
const jupiterMaterial = new THREE.MeshBasicMaterial({map: jupiterTexture});
const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
const solarSystem6 = new THREE.Group();
solarSystem6.add(jupiterMesh);
solarSystem6.position.x = -85;
solarSystem6.rotation.x = 2;
scene.add(solarSystem6);

const neptuneGeometry = new THREE.SphereGeometry(4);
const neptuneTexture = new THREE.TextureLoader().load('/neptune.jpg');
const neptuneMaterial = new THREE.MeshBasicMaterial({map: neptuneTexture});
const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
const solarSystem7 = new THREE.Group();
solarSystem7.add(neptuneMesh);
solarSystem7.position.x = -25;
scene.add(solarSystem7);

const uranusGeometry = new THREE.SphereGeometry(3.5);
const uranusTexture = new THREE.TextureLoader().load('/uranus.jpg');
const uranusMaterial = new THREE.MeshBasicMaterial({map: uranusTexture});
const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);
const solarSystem8 = new THREE.Group();
solarSystem8.add(uranusMesh);
solarSystem8.position.x = 80;
scene.add(solarSystem8);


const asteroideGeometry = new THREE.SphereGeometry(5,5);
const asteroideTexture = new THREE.TextureLoader().load('/asteroide.jpg');
const asteroideMaterial = new THREE.MeshBasicMaterial({map: asteroideTexture});
const asteroideMesh = new THREE.Mesh(asteroideGeometry, asteroideMaterial);
const solarSystem9 = new THREE.Group();
solarSystem9.add(asteroideMesh);
solarSystem9.position.x = -100;
solarSystem9.position.y = 40;
scene.add(solarSystem9);


function animate() {
    requestAnimationFrame( animate );

    solarSystem.rotation.y += 0.01;
    solarSystem.rotation.x += 0.01;
    solarSystem.position.x = 0.10;
    solarSystem.position.y = 0.10;
    solarSystem.position.z = 0.10;

    solarSystem2.rotation.y += 0.04;
    solarSystem2.rotation.x += 0.04;
    // solarSystem2.position.y += 0.02;
    // solarSystem2.position.x += 0.02;

    // solarSystem3.position.y += 0.02;
    // solarSystem3.position.x += 0.02;
    solarSystem3.rotation.y += 0.06;
    solarSystem3.rotation.x += 0.06;

    solarSystem4.rotation.y += 0.05;
    solarSystem4.rotation.x += 0.05;
    // solarSystem4.position.y += 0.02;
    // solarSystem4.position.x += 0.02;

    solarSystem5.rotation.y += 0.01;
    solarSystem5.rotation.x += 0.05;
    // solarSystem5.position.y += 0.01;
    // solarSystem5.position.x += 0.05;

    // solarSystem6.position.y += 0.02;
    // solarSystem6.position.x += 0.02;
    solarSystem6.rotation.x += 0.07;
    solarSystem6.rotation.x += 0.07;

    // solarSystem7.position.y += 0.02;
    // solarSystem7.position.x += 0.02;
    solarSystem7.rotation.y += 0.08;
    solarSystem7.rotation.x += 0.08;

    // solarSystem8.position.y += 0.02;
    // solarSystem8.position.x += 0.02;
    solarSystem8.rotation.y += 0.10;
    solarSystem8.rotation.x += 0.10;

    solarSystem9.position.y -= 0.04;
    solarSystem9.position.x += 0.08;

    solarSystem9.position.y -= 0.04;
    solarSystem9.position.x += 0.08;

    renderer.render( scene, camera );
}

animate();
