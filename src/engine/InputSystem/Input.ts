import { EventSystem } from "../EventSystem/EventSystem";
import { Keyboard } from "./Keyboard";
import { Mouse } from "./Mouse";

export interface IInputDevice {
    getEventsList: () => IcompontentEvents
}

export interface IcompontentEvents {
    [eventName: string]: () => void
}

export class Input {
    isMouseDown: boolean = false
    isMouseUp: boolean = false
    mouse: Mouse
    keyboard: Keyboard

    constructor(private eventSystem: EventSystem, private devises: IInputDevice[]) {
        this.#init()
    }

    #init() {
        this.devises.forEach(device => {
            if (device instanceof Mouse)
                this.mouse = device
            if (device instanceof Keyboard)
                this.keyboard = device
            this.#registerInputComponentEvents(device.getEventsList())
        })

    }


    #registerInputComponentEvents(events: IcompontentEvents) {
        Object.keys(events).forEach(event => {
            this.eventSystem.registerEvent(event, events[event])
        })
    }

}