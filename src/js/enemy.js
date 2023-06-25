import {Actor, CollisionType, Engine, Input, Shape, Vector} from 'excalibur';
import {Resources} from './resources.js';
import {Kirbo} from './kirbo.js';
import {Deathfloor} from './deathfloor.js';

export class Enemy extends Actor {
    constructor() {
        super({
            width: 100,
            height: 600,
            vel: new Vector(-500, 1000)
        });
        this.body.collisionType = CollisionType.Active
        this.body.useGravity = true;
        this.on('collisionstart', (event) => this.hitSomething(event));
        this.on('enterviewport', () => {
            this.on('exitviewport', () => this.kill())
        });
    }

    onPostUpdate(_engine, _delta) {
        if (this.pos.x < -100) {
            this.kill()
        }
    }

    hitSomething(event) {
        this.vel = new Vector(-500, 1000)
        if (event.other instanceof Kirbo) {
            this.kill()
        }
        if (event.other instanceof Deathfloor) {
            this.kill()
        }
    }
}