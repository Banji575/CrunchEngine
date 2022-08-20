import * as THREE from 'three'
import { App } from '../App'
import { Entity } from '../engine/Entity'

export class Camera extends THREE.PerspectiveCamera implements Entity {
    constructor(fov: number, aspect: number, near: number, far: number) {
        super(fov, aspect, near, far)
    }

    create() {
        this.position.set(2, 5, 7.5)
    }

    update() {

    }
}