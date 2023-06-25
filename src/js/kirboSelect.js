import {Actor, Vector} from 'excalibur';
import {Resources} from './resources.js';

export class KirboSelect extends Actor {
    constructor() {
        super({
            width: Resources.Kirbo.width,
            height: Resources.Kirbo.height
        });
        this.pos = new Vector(300, 320);
        this.scale = new Vector(0.5, 0.5);

    }

    onInitialize(engine) {
        this.game = engine;
        this.graphics.use(Resources.Kirbo.toSprite());
    }
}