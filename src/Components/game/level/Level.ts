import { Entity } from "../../../engine/Entity";
import * as THREE from 'three'

export interface IPath {
    points: THREE.Vector3[]
}

export class Level {
    constructor(public scene: THREE.Scene) {

    }

    createPath(entity: THREE.Object3D, path: IPath) {
        path.points.forEach(poits => {
            const obj = entity.clone()
            this.scene.add(obj)
            obj.position.set(poits.x, poits.y, poits.z)

        })

    }
}