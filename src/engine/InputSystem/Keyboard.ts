import { IInputDevice } from "./Input";

export class Keyboard implements IInputDevice {
    keypress: string = 'keypress'
    keydown: string = 'keydown'
    keyup: string = 'keyup'
    key: string = ''
    constructor() { }

    getEventsList() {
        return {
            // [this.keypress]: this.#keyPress.bind(this),
            [this.keydown]: this.#keyDown.bind(this),
            [this.keyup]: this.#keyUp.bind(this)
        }
    }

    #keyPress() {
        console.log('key press')
    }
    #keyDown(evt) {
        this.key = evt.key

    }

    #keyUp(evt) {
        this.key = ''
        // this.key = evt.key

    }

}