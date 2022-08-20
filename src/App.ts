import * as THREE from 'three'
import { Entity } from './engine/Entity'
import { BasicEvents } from './engine/EventSystem/BasicEvents'
import { EventSystem } from './engine/EventSystem/EventSystem'
import { entityType, Factory } from './engine/Factory'
import { Loader } from './engine/Loader'
import { Repositoty } from './engine/Repository'
import { State } from './engine/State'
import { StatesManager } from './engine/StateManager'

export interface IgameConfig {
    root: HTMLElement,
    width: number,
    height: number,
    states: State[]
}


export class App {
    renderer: THREE.WebGL1Renderer
    objectFactory: Factory
    repository: Repositoty<Entity>
    statesRepo: Repositoty<State>
    scene: THREE.Scene
    mainCamera: THREE.Camera
    loader: Loader
    stateManager: StatesManager
    eventSystem: EventSystem

    constructor(public conifg: IgameConfig) {
        this.renderer = this.#createRenderer()
        this.loader = this.#createLoader()
        this.#init()
        //  this.scene = this.getScene()
    }

    async #init() {
        this.conifg.root.append(this.renderer.domElement)
        this.objectFactory = new Factory()
        this.repository = new Repositoty<Entity>()
        this.statesRepo = new Repositoty<State>()

        const basicEvents = new BasicEvents()
        this.eventSystem = new EventSystem(basicEvents)


        this.conifg.states.forEach(state => {
            this.statesRepo.add(state)
        })
        this.stateManager = new StatesManager(this.statesRepo)
        await this.#sceneInit()
        this.startUpdate()
    }
    #createLoader() {
        return new Loader()
    }

    async #sceneInit() {
        const state = this.stateManager.currentState
        state.app = this;
        if (state.preload)
            await state.preload()

        if (state.init) {
            state.init()
        }
        if (state.create)
            state.create()

    }

    on(name: string, callback: () => void, context: Object) {
        this.eventSystem.registerEvent(name, callback, context)
    }
    fire(name: string) {
        this.eventSystem.triggeredEvent(name)
    }

    #createRenderer() {
        this.renderer = new THREE.WebGL1Renderer()
        this.renderer.setSize(this.conifg.width, this.conifg.height)
        return this.renderer
    }

    getScene() {
        return this.stateManager.currentState
    }

    create(type: entityType, config: any) {
        return this.objectFactory.create(type, config)
    }

    add(entity: Entity) {
        if (!this.getScene()) return

        if (entity instanceof THREE.Camera) {
            this.mainCamera = entity
        }
        this.repository.add(entity)
        this.#entityInit(entity)
        if (entity instanceof THREE.Object3D) {

            this.getScene().add(entity)
        }
        if (entity instanceof THREE.Group) {
            console.log(entity)
            // this.scene.add(entity)
        }
    }



    #entityInit(entity: Entity) {

        entity.init ? entity.init() : null
        entity.create()
    }

    #animLoop() {
        if (!this.stateManager.getMainCamera) return
        const camera = this.stateManager.getMainCamera

        if (this.stateManager.currentState.update)
            this.stateManager.currentState.update()

        this.renderer.render(this.getScene(), camera)
        this.repository.getList().forEach(entity => entity.update())
    }

    startUpdate() {

        this.renderer.setAnimationLoop(this.#animLoop.bind(this))
    }

    load(url: URL) {
        return this.loader.load(url)
            ?.then(model => {
                return model

            })
    }
}