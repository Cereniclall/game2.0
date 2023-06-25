import {Actor, Vector} from 'excalibur';
import {Resources} from './resources.js';

export class Kirbo4Select extends Actor {
    constructor() {
        super({
            width: Resources.Kirbo4.width,
            height: Resources.Kirbo4.height
        });
        this.pos = new Vector(1200, 320);
        this.scale = new Vector(0.5, 0.5);
    }


    onInitialize(engine) {
        this.game = engine;
        this.graphics.use(Resources.Kirbo4.toSprite());
    }
}