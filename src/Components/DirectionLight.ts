import * as THREE from 'three'
import { App } from '../App'
import { Entity } from '../engine/Entity'

export class DirectionLigth extends THREE.DirectionalLight implements Entity {
    constructor(public app:App) {
        super()
    }

    create() {
        this.position.y = 5
        this.position.z = 2
        this.position.x = 2
    }
    update() {

    }
}