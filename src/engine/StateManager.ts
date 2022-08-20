import { State } from "./State";
import { Repositoty } from './Repository'
import * as THREE from 'three'
import { Scene } from "three";

// export interface IgameConfig {
//     states: THREE.Scene[]
// }

export class StatesManager {
    currentState: State
    countState: number = 1
    constructor(private repo: Repositoty<State>) {
        this.#init()
    }

    #init() {
        this.currentState = this.repo.get(this.countState - 1)

    }

    register(states: State[]) {

    }

    get getMainCamera() {
        return this.currentState.camera
    }


}