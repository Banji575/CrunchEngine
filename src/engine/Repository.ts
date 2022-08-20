import { Entity } from "./Entity"

export class Repositoty<T>{
    private repo: T[] = []
    test: string
    constructor() {
        this.test = 'test'
    }
    add(obj: T) {
        this.repo.push(obj)
    }

    getList(): T[] {
        return this.repo
    }

    get(index:number){
        return this.repo[index]
    }

}