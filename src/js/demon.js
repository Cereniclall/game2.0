import {Actor, CollisionType, Engine, Input, Shape, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Kirbo} from "./kirbo.js";
import {Enemy} from './enemy.js';
import {Ground} from './ground.js';
import {Game} from './game.js';

export class Demon extends Enemy {
    constructor(posX, posY) {
        super({
        })
        this.pos = new Vector(posX, posY);
        this.scale = new Vector(0.1, 0.1)
        this.anchor.setTo(1,1)


        // this.on('collisionstart', (event) => this.hitSomething(event));
    }

    onInitialize(engine) {
        super.onInitialize(engine)
        this.graphics.use(Resources.Demon.toSprite())
    }


}