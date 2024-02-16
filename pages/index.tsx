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

        //adds
        scene.add(cube);


        //producción
        renderer.setSize(window.innerWidth,window.innerHeight);

        function animate(){
            cube.rotation.z += .005;


            renderer.render(scene, camera)
            requestAnimationFrame(animate)
        }
        
        animate()
        
    },[])
    return <canvas id="bg"/>
}

export default HomePage;