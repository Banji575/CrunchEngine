import * as THREE from "three";
import { App } from "./App";
import { Camera } from "./Components/camera";
import { DirectionLigth } from "./Components/DirectionLight";
import { Ground } from "./Components/game/Ground";
import { Level } from "./Components/game/level/Level";
import { path } from "./Components/game/level/pathPoint";
import { Box } from "./Components/game/Player";
import { PreloadState } from "./Components/game/states/PreloadState";
import { Tile } from "./Components/Tile";
import { Loader } from "./engine/Loader";



const root = document.body

const app = new App({
    root,
    width: window.innerWidth,
    height: window.innerHeight,
    states: [new PreloadState]
})


// 




// app.add(camera)

// const player = new Box(app)
// const ground = new Ground(app)
// const dLight = new DirectionLigth(app)
// const level = new Level(app.getScene())
//const tile = new Tile(app)

// app.add(player)
// app.add(ground)
// app.add(dLight)
//app.add(tile)
// level.createPath(player, path)

//camera.lookAt(ground.position)