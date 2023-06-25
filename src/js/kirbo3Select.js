import {Actor, Vector} from 'excalibur';
import {Resources} from './resources.js';

export class kirbo3Select extends Actor {
    constructor() {
        super({
            width: Resources.Kirbo3.width,
            height: Resources.Kirbo3.height
        });
        this.pos = new Vector(900, 320);
        this.scale = new Vector(0.5, 0.5);

    }

    onInitialize(engine) {
        this.game = engine;
        this.graphics.use(Resources.Kirbo3.toSprite());
    }
}