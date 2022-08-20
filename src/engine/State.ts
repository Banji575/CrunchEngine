import * as THREE from 'three'
import { Mesh } from 'three'
import { App } from '../App'
import { Entity } from './Entity'
export interface IState {
    camera?: THREE.Camera
    preload?: () => Promise<boolean>,
    init?: () => void,
    create?: () => void,
    update?: () => void
    addObject: (entity: Entity) => void,
    app?: App

}


export class State extends THREE.Scene implements IState {
    app?: App
    constructor() {
        super()

    }


    camera?: THREE.Camera
    preload?: (() => Promise<boolean>)
    init?(): void
    create?(): void
    update?(): void
    addObject(entity: Entity): void {
        this.add(entity)
        this.app?.add(entity)
    }

}