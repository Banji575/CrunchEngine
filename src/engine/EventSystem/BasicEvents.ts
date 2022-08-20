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