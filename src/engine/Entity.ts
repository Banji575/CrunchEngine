import { App } from "../App"

export interface Entity extends THREE.Object3D {
    init?: () => void
    create: () => void
    update: () => void
}
