import {Actor, Vector, GraphicsGroup} from 'excalibur';
import {Resources} from './resources.js';
import {Game} from './game.js';


export class StartBackground extends Actor {
    game;
    offset;

    onInitialize(engine) {
        const backgroundImage = Resources.Background.toSprite();
        this.offset = backgroundImage.width;
        this.game = engine;

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: backgroundImage,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: backgroundImage,
                    pos: new Vector(backgroundImage.width, 0),
                }
            ]
        });

        this.graphics.anchor = new Vector(0, 0);
        this.graphics.add(group);
        this.pos = new Vector(0, 0);
        this.vel = new Vector(-100, 0);
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0);
        }
    }
}