import { Entity } from "../../../engine/Entity";
import { State } from "../../../engine/State";
import { Camera } from "../../camera";
import { Box } from "../Player";

export class PreloadState extends State {
    camera: Camera;
    box: Entity
    isSetScale: boolean = false

    constructor() {
        super()
    }

    init() {
        this.camera = new Camera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.add(this.camera)

        this.camera.position.set(-3, 3, -3)
    }


    create() {
        this.box = new Box()
        this.addObject(this.box)
        this.camera.lookAt(this.box.position)

        // this.app?.on('eventTest', () => console.log('test trigger event'), this)




    }


    moveBox() {
        this.box.scale.x += .04
        this.box.rotateX(0.2)
    }

    update() {

    }
}