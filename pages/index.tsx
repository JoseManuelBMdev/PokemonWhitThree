import { log } from "console";
import { useEffect } from "react";
import * as THREE from 'three';


function HomePage(){
    useEffect(()=>{
        
        //instancias
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGL1Renderer({
            antialias: true,
            alpha:false,
            canvas:document.getElementById("bg")
        });
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight,0.1,1000);
        camera.position.set(0,0,5);

        //desarrollo
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({
            color:0xffffff
        });
        const cube = new THREE.Mesh(geometry, material);

        //crear skybox

        const skyGeometry = new THREE.SphereGeometry(360,25,25);
        const loader = new THREE.TextureLoader();
        const texture = loader.load("/img/custom-sky.png");
        const imgMaterial = new THREE.MeshPhongMaterial({map:texture});
        const skybox = new THREE.Mesh(skyGeometry, imgMaterial);
        scene.add(skybox);
        skybox.material.side = THREE.BackSide

        //luz
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        const hemisphereLight = new THREE.HemisphereLight(0xffffff,0.8);
        ambientLight.add(hemisphereLight)
        scene.add(ambientLight);

        //adds
        scene.add(cube);


        //producción
        renderer.setSize(window.innerWidth,window.innerHeight);

        function animate(){
            cube.rotation.y += .005;


            renderer.render(scene, camera)
            requestAnimationFrame(animate)
        }
        
        animate()
        
    },[])
    return <canvas id="bg"/>
}

export default HomePage;