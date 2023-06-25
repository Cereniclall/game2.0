import {Actor, CollisionType, Engine, Scene, Input, Vector} from 'excalibur';
import {Resources} from './resources.js';
import {Enemy} from './enemy.js';
import {Ground} from './ground.js';
import {Ground2} from './ground2.js';
import {Demon} from './demon.js';
import {Demon2} from './demon2.js';
import {RunKirbo} from './runKirbo.js';
import {Attack} from './attack.js';


let sprite = 1;

export function setSprite(newSprite) {
    sprite = newSprite;
}

export class Kirbo extends Actor {

    game

    constructor(posX, posY) {
        super({
            width: Resources.Kirbo.width,
            height: Resources.Kirbo.height
        });
        this.pos = new Vector(posX, posY);
        this.body.collisionType = CollisionType.Active;
        this.body.useGravity = true;
        this.scale = new Vector(0.8, 0.8);
        this.bullet = new Attack();
    }

    onInitialize(engine) {
        this.game = engine
        this.on('collisionstart', (event) => this.onCollisionStart(event));
        this.on('exitviewport', (event) => this.die(event))
    }

    die(event) {
        this.game.currentScene.resetGame();
        this.kill();
    }
    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space) && this.vel.y === 0) {
            this.jump();
        }

        if (engine.input.keyboard.wasReleased(Input.Keys.Space)) {
            this.fall();
        }

        if (
            this.pos.x < -100 ||
            this.pos.x > 1600 ||
            this.pos.y < -100
        ) {
            this.vel = new Vector(0, 0);
            this.pos = new Vector(750, 450);
        }
    }

    onPostUpdate(engine, delta) {
        if (sprite === 1) {
            this.graphics.use(Resources.Kirbo.toSprite());
        }
        if (sprite === 2) {
            this.graphics.use(Resources.Kirbo2.toSprite());
        }
        if (sprite === 3) {
            this.graphics.use(Resources.Kirbo3.toSprite());
        }
        if (sprite === 4) {
            this.graphics.use(Resources.Kirbo4.toSprite());
        }
    }

    jump() {
        console.log('jump');
        this.vel = this.vel.add(new Vector(0, -600));

    }

    fall() {
        this.vel = this.vel.add(new Vector(0, 100));
    }

    onCollisionStart(event) {
        if (event.other instanceof Demon2) {
            this.game.currentScene.decreaseLives()
            if (this.game.currentScene.lives <= 0) {
                this.kill();
                console.log(this.game.currentScene);
                this.game.currentScene.resetGame();

            }
        }
        if (event.other instanceof Demon) {
            this.kill();
            console.log(this.game.currentScene);
            this.game.currentScene.resetGame();
        }
    }
}