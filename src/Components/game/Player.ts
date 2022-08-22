import * as THREE from 'three'
import { Entity } from '../../engine/Entity'

export class Box extends THREE.Mesh implements Entity {
    constructor() {
        super(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 'red' })
        )
    }


    create() {
        this.position.set(4.5, 0.5, 4.5)

    }

    move() {
        const pos = this.position.clone()
        pos.x += .1
        this.position.set(pos.x, pos.y, pos.z)
    }

    update() {

    }

}