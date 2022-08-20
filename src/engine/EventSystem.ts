import { Entity } from "./Entity";

export interface IEvents {
    [key: string]: IEvent,
}

export interface IEvent {
    callback: { (): void }[],
}

export class EventSystem {
    events: IEvents = {}
    constructor() {

    }

    registerEvent(name: string, callback: () => void, context: Object) {
       // console.log('add event', name, callback)
        if (this.events.name) {
            this.events.name.callback.push(callback.bind(this))
            return
        }

        this.events.name = { callback: [callback.bind(this)] }
    }

    triggeredEvent(name: string) {
        if (this.events.name) {
            this.events.name.callback.forEach(callback => {
                callback()
            })
        }
    }
}