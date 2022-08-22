export class Mouse {
    isMouseDown: boolean = false
    isMouseUp: boolean = false
    mouseDown: string = 'mousedown'
    mouseUp: string = 'mouseup'
    mouseMove: string = 'mousemove'

    constructor() { }

    getEventsList() {
        return {
            [this.mouseDown]: this.#mouseDown.bind(this),
            [this.mouseUp]: this.#mouseUp.bind(this)
        }
    }

    #mouseDown() {
        this.isMouseDown = true
    }

    #mouseUp() {
        this.isMouseDown = false
    }


}