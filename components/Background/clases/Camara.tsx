import {PerspectiveCamera} from 'three';

export default class Camara extends PerspectiveCamera{
    constructor() {
        super(50, window.innerWidth/window.innerHeight,0.1,1000)
        this.position.set(0,0,5);
    }
}