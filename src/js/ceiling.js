import {Actor, CollisionType, Engine, GraphicsGroup, Input, Shape, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Ceiling extends Actor {
    constructor() {
        super({
            width: Resources.Ceiling.width,
            height: Resources.Ceiling.height,
            pos: new Vector(1000, -100)
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Ceiling.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.body.useGravity = false
    }}