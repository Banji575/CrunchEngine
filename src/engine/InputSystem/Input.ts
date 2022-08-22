import { EventSystem } from "../EventSystem/EventSystem";

export class Input {
    constructor(private eventSystem: EventSystem) {
        this.#init()
    }

    #init() {
        this.eventSystem.registerEvent('mousedown', this.#mouseHundler, this)
    }

    #mouseHundler() {
        console.log('mousedown')
    }
}