import * as THREE from 'three'
import { App } from '../App'
import { Entity } from '../engine/Entity'
const floorModel = new URL('.././assets/models/Floor_Standard.fbx', import.meta.url)

export class Tile extends THREE.Group implements Entity {
    model
    constructor(public app: App) {
        super()
    }
    async init() {
        const model = await this.app.load(floorModel)
        if (model)
            this.app.scene.add(model)
        model?.scale.set(.005, .005, .005)
        console.log(this)
    }
    create() {

    }
    update() { }
}