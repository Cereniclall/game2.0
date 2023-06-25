import { Actor, Vector, GraphicsGroup } from 'excalibur';
import { Resources } from './resources.js';
import { Game } from './game.js';

export class Background extends Actor {
    game;
    offset;

    onInitialize(engine) {
        // first background
        this.backgroundImage = Resources.Background.toSprite();
        this.offset = this.backgroundImage.width;
        this.game = engine;

        this.members = [
            {
                graphic: this.backgroundImage,
                pos: new Vector(0, 0),
            },
            {
                graphic: this.backgroundImage,
                pos: new Vector(this.backgroundImage.width, 0),
            }
        ];

        const group = new GraphicsGroup({
            members: this.members
        });

        this.graphics.anchor = new Vector(0, 0);
        this.graphics.add(group);
        this.pos = new Vector(0, 0);
        this.vel = new Vector(-500, 0);
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0);
            this.game.currentScene.spawnEnemy();
        }
        if (this.pos.x < -0) {
            this.game.currentScene.updateScoreLabel();
        }

    }
}