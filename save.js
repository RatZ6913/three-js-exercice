import * as THREE from 'three';

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
const boxWidth = 8;
const boxHeight = 8;
const boxDepth = 8;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
const material = new THREE.MeshNormalMaterial();

// Creation CUBE 1 
const cube = new THREE.Mesh( geometry, material );
const group = new THREE.Group();
// group.add(cube)
scene.add(group);
// cube.position.x = -10;

// // Creation CUBE 2

// const cube2 = new THREE.Mesh( geometry, material );
// const group2 = new THREE.Group();
// group.add(cube2)
// scene.add(group2)
// cube2.position.x = 0;


// // Creation CUBE 3
// const cube3 = new THREE.Mesh( geometry, material );
// const group3 = new THREE.Group();
// group.add(cube3)
// scene.add(group3)
// cube2.position.x = 10;


const SphereGeometry = new THREE.SphereGeometry( 10, 30, 10 );
const materiaSphere = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( SphereGeometry, materiaSphere );

// sphere
scene.add(sphere);
group.add(sphere)
sphere.position.x = -15;
sphere.position.y = 20;

const sphere2 = new THREE.Mesh( SphereGeometry, materiaSphere );
scene.add(sphere2);
group.add(sphere2)
sphere2.position.x = 15;
sphere2.position.y = 25;

const sphere3 = new THREE.Mesh( SphereGeometry, materiaSphere );
scene.add(sphere3);
group.add(sphere3)
sphere3.position.x = 40;
sphere3.position.y = -20;

function animate() {
    requestAnimationFrame( animate );

    // cube.rotation.x += 0.15;
    // cube.rotation.y += 0.15;

    // cube2.rotation.x += 0.10;
    // cube2.rotation.y += 0.10;

    // cube3.rotation.x += 0.05;
    // cube3.rotation.y += 0.05;

    sphere.rotation.x += 0.02;
    sphere.rotation.Y += 0.02;

    sphere2.rotation.x += 0.02;
    sphere2.rotation.Y += 0.02;

    sphere3.rotation.x += 0.02;
    sphere3.rotation.Y += 0.02;

    renderer.render( scene, camera );
}

animate();
