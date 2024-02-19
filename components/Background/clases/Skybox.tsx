import * as THREE from 'three';

export default class Skybox {
    constructor(scene) {
        const skyGeometry = new THREE.SphereGeometry(360,25,25);
        const loader = new THREE.TextureLoader();
        const texture = loader.load("/img/custom-sky.png");
        const imgMaterial = new THREE.MeshPhongMaterial({map:texture});
        const skybox = new THREE.Mesh(skyGeometry, imgMaterial);
        scene.add(skybox);
        skybox.material.side = THREE.BackSide

    }
}