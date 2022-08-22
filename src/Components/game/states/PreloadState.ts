import { Entity } from "../../../engine/Entity";
import { State } from "../../../engine/State";
import { Camera } from "../../camera";
import { Box } from "../Player";

export class PreloadState extends State {
    camera: Camera;
    box: Box
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


    }

    update() {
        if(this.app?.input.keyboard.key === 'f'){
            console.log(this.box.move())
        }
    }
}