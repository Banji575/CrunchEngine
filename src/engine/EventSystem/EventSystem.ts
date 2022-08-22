import { Entity } from "../Entity";

export interface IEvents {
    [key: string]: IEvent | null,
}

export interface IEvent {
    callback: { (params:any): void }[],
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
        if (this.events[name]) {
          //  console.log('register event', this.events.name)
            this.events[name]?.callback.push(callback.bind(context))
            return
        }

        this.events[name] = { callback: [callback.bind(context)] }
    }

    registerSystemEvents(systemEvent: ISystemEvent) {
        const nameInSystem = systemEvent.nameInSystem ? systemEvent.nameInSystem : systemEvent.nameInGame

        window.addEventListener(nameInSystem, (evt) => {

            this.triggeredEvent(systemEvent.nameInGame, evt)
        })
    }

    triggeredEvent(name: string, evt?:any) {
      //  console.log('triggered name', this.events[name])
        if (this.events[name]) {
            this.events[name]?.callback.forEach(callback => {
                callback(evt)
            })
        }
    }
}