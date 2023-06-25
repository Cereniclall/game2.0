import {Actor, CollisionType, Engine, Input, Shape, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Kirbo} from "./kirbo.js";
import {Enemy} from './enemy.js';
import {Ground} from './ground.js';
import {Game} from './game.js';

export class Demon2 extends Enemy {
    constructor(posX, posY) {
        super({
        })
        this.pos = new Vector(posX, posY);
        this.scale = new Vector(0.20, 0.30)
        // this.anchor.setTo(1, 1)
    }

    onInitialize(engine) {
        super.onInitialize(engine)
        this.graphics.use(Resources.Demon2.toSprite())
    }


}