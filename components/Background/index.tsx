import {Component} from 'react'
import * as THREE from 'three';
import Skybox from './clases/Skybox';
import Renderer from './Renderer';

export default class Background extends Component {

    //se ejecuta cuando el componente recien se carga
    componentDidMount(): void {

        new Renderer
    }

    render(){
        return <canvas id="bg"/>
    }

}