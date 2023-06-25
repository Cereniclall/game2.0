import {Actor, CollisionType, Engine, GraphicsGroup, Input, Shape, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Deathfloor extends Actor {
    constructor() {
        super({
            width: 8000,
            height: Resources.Ceiling.height,
            pos: new Vector(3000, 920)
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Ceiling.toSprite())
        this.body.collisionType = CollisionType.Passive
        this.body.useGravity = false
    }}