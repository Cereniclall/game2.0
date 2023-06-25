import {Actor, CollisionType, Engine, Label, Physics, Scene, Vector} from 'excalibur';
import {Resources, ResourceLoader} from './resources.js';

export class Play extends Actor {
    constructor() {
        super({
            width: Resources.Play.width,
            height: Resources.Play.height
        });
        this.graphics.use(Resources.Play.toSprite());
        this.scale = new Vector(0.1, 0.1);
        this.pos = new Vector(750, 500);
    }
}