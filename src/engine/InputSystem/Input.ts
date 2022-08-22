import { EventSystem } from "../EventSystem/EventSystem";
import { Mouse } from "./Mouse";

export interface IcompontentEvents {
    [eventName: string]: () => void
}

export class Input {
    isMouseDown: boolean = false
    isMouseUp: boolean = false
    mouse: Mouse

    constructor(private eventSystem: EventSystem) {
        this.mouse = new Mouse()
        this.#init()
    }

    #init() {
        this.#registerInputComponentEvents(this.mouse.getEventsList())
    }


    #registerInputComponentEvents(events:IcompontentEvents) {
       Object.keys(events).forEach(event=>{
        this.eventSystem.registerEvent(event, events[event])
       })
    }

}