import {Actor, Vector} from 'excalibur';
import {Resources} from './resources.js';

export class Kirbo2Select extends Actor {
    constructor() {
        super({
            width: Resources.Kirbo2.width,
            height: Resources.Kirbo2.height
        });
        this.pos = new Vector(600, 320);
        this.scale = new Vector(0.5, 0.5);

    }

    onInitialize(engine) {
        this.game = engine;
        this.graphics.use(Resources.Kirbo2.toSprite());
    }
}