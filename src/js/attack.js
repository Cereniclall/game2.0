import {Actor, CollisionType, Engine, Input, Shape, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Demon2} from './demon2.js';
import {Enemy} from './enemy.js';

export class Attack extends Actor {
    constructor(posX, posY) {
        super({
            width: Resources.Attack.width,
            height: Resources.Attack.height
        })
        this.pos = new Vector(posX + 100, posY);
        this.scale = new Vector(0.5, 0.5)
        this.vel = new Vector(1000, 0);
        this.on('collisionstart', (event) => this.hitSomething(event));
        this.anchor.setTo(0.5,0.5)


    }

    onInitialize(engine) {
        super.onInitialize(engine)
        this.graphics.use(Resources.Attack.toSprite())
    }

    hitSomething(event) {
        if (event.other instanceof Enemy) {
            this.kill();
        }
    }
}