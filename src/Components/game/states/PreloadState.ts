import { State } from "../../../engine/State";
import { Camera } from "../../camera";
import { Box } from "../Player";

export class PreloadState extends State {
    camera: Camera;
    constructor() {
        super()
    }

    init() {
        this.camera = new Camera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.add(this.camera)

        this.camera.position.set(-3, 3, -3)
    }


    create() {
        const box = new Box()
        this.addObject(box)
        this.camera.lookAt(box.position)

        this.app?.on('eventTest', () => console.log('test trigger event'), this)


    }

    update() {

    }
}