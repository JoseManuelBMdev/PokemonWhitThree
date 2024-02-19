import {AmbientLight, HemisphereLight} from 'three';

export default class Luces {
    constructor(scene) {
        const ambientLight = new AmbientLight(0xffffff, 0.8);
        const hemisphereLight = new HemisphereLight(0xffffff,0.8);
        ambientLight.add(hemisphereLight)
        scene.add(ambientLight);
    }
}