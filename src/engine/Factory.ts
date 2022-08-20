import * as THREE from 'three'

export enum entityType {
    camera
}

export class Factory {
    constructor() {

    }

    create(type:entityType, config:any){
        switch(type){
            case entityType.camera:
            const {fov, aspect, far, near} = config
                return new THREE.PerspectiveCamera(fov, aspect, far, near)
        }
    }
}