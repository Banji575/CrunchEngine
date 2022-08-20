import { Group } from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export class Loader {
    private fbxLoader: FBXLoader
    constructor() {
        this.#init()
    }
    #init() {
        this.fbxLoader = new FBXLoader()
    }

    load(url: URL) {
        const type = url.pathname.split('.')[url.pathname.split('.').length - 1]
        switch (type) {
            case 'fbx':
                return this.#fbxLoader(url)
        }
    }

    #fbxLoader(url: URL) {
        return new Promise<Group>((res, rej) => {
            this.fbxLoader.load(url.href, fbx => {
                return res(fbx)
            })
        })
    }
}