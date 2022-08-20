import * as THREE from 'three'
import { App } from '../../App';
import { Entity } from '../../engine/Entity';

export class Ground extends THREE.Mesh implements Entity {
    constructor(public app:App) {
        super(
            new THREE.PlaneGeometry(10, 10),
            new THREE.MeshStandardMaterial({ color: 'white' })
        )

    }

    create() {
        this.rotateX(-0.5 * Math.PI)
    }
    update() {

    }
}