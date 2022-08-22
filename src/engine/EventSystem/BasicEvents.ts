import { IBasicEvents, ISystemEvent } from "./EventSystem";



export class BasicEvents implements IBasicEvents {
    constructor() {

    }
    getEventsList(): ISystemEvent[] {
        return [
            {
                nameInGame: 'click',
            },
            {
                nameInGame: 'mousemove'
            },
            {
                nameInGame: 'mousedown'
            },
            {
                nameInGame: 'mouseup'
            },
            {
                nameInGame: 'keypress'
            },
            {
                nameInGame: 'keydown'
            },
            {
                nameInGame:'keyup'
            }
        ]
    }


}

// ,
// {
//     nameInGame: 'mousedown'
// },
// {
//     nameInGame: "mouseup"
// },
// {
//     nameInGame: "mousemove"
// }