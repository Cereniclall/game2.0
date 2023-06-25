import {Actor, CollisionType, Engine, Label, Physics, Scene, Vector} from 'excalibur';
import {Resources, ResourceLoader} from './resources.js';

export class Home extends Actor {
    constructor() {
        super({
            width: Resources.Home.width,
            height: Resources.Home.height
        });
        this.graphics.use(Resources.Home.toSprite());
        this.scale = new Vector(1, 1);
        this.pos = new Vector(750, 410);
    }
}