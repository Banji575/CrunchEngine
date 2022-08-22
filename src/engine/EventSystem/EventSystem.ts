import { Entity } from "../Entity";

export interface IEvents {
    [key: string]: IEvent | null,
}

export interface IEvent {
    callback: { (): void }[],
}

export interface ISystemEvent {
    nameInGame: string,
    nameInSystem?: string,
}

export interface IBasicEvents {
    getEventsList: () => ISystemEvent[]
}

export class EventSystem {
    events: IEvents = {}
    constructor(private basicEvents: IBasicEvents) {
        this.#init()
    }

    #init() {
        const eventsArr = this.basicEvents.getEventsList()
        eventsArr.forEach(evt => {
            this.registerSystemEvents(evt)
            this.registerEvent(evt.nameInGame)
        })
    }

    systemEvent() {

    }

    registerEvent(name: string, callback: () => void = () => { }, context: Object = this) {
        if (this.events.name) {
            this.events.name.callback.push(callback.bind(context))
            return
        }

        this.events.name = { callback: [callback.bind(context)] }
    }

    registerSystemEvents(systemEvent: ISystemEvent) {
        const nameInSystem = systemEvent.nameInSystem ? systemEvent.nameInSystem : systemEvent.nameInGame
        console.log(nameInSystem)
        window.addEventListener(nameInSystem, () => {

            this.triggeredEvent(systemEvent.nameInGame)
        })
    }

    triggeredEvent(name: string) {
        console.log('triggered name', name)
        if (this.events.name) {
            this.events.name.callback.forEach(callback => {
                callback()
            })
        }
    }
}