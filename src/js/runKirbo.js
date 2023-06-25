import '../css/style.css';
import {Actor, Color, Engine, Events, Font, FontUnit, Input, Label, Physics, Scene, TextAlign, Vector} from 'excalibur';
import {Kirbo} from './kirbo.js';
import {Ground} from './ground.js';
import {Background} from './background.js';
import {Demon2} from './demon2.js';
import {Ground2} from './ground2.js';
import {Ceiling} from './ceiling.js';
import {Enemy} from './enemy.js';
import {Attack} from './attack.js';
import {Deathfloor} from './deathfloor.js';
import {Demon} from "./demon.js";

export class RunKirbo extends Scene {
    scoreLabel;
    livesLabel;
    lives;
    demonLives = 5;
    scores = [];
    player
    game

    onInitialize(engine) {

        Physics.gravity = new Vector(0, 600);
        this.game = this.engine;

        const background = new Background();
        this.add(background);

        const demon = new Demon(this.generateRandomNumber(1500, 3000), 500)
        this.add(demon);

        const demon2 = new Demon2(this.generateRandomNumber(1500, 3000), 500)
        this.add(demon2);

        this.score = 0;
        this.scoreLabel = new Label({
            text: 'SCORE: ' + this.score,
            pos: new Vector(50, 80),
            color: Color.Yellow,
            font: new Font({
                family: 'impact',
                size: 50,
                unit: FontUnit.Px
            })
        });
        this.add(this.scoreLabel);

        const ground = new Ground();
        this.add(ground);

        const ground2 = new Ground2();
        this.add(ground2);

        const ceiling = new Ceiling();
        this.add(ceiling);

        const deathfloor = new Deathfloor();
        this.add(deathfloor);

        this.player = new Kirbo(250, 600);
        this.add(this.player);

        this.lives = 3;
        this.livesLabel = new Label({
            text: 'LIVES: ' + this.lives,
            pos: new Vector(1300, 80),
            color: Color.Yellow,
            font: new Font({
                family: 'impact',
                size: 50,
                unit: FontUnit.Px
            })
        });
        this.add(this.livesLabel);

        const pause = new Label({
            text: 'Press P to PAUSE',
            pos: new Vector(650, 80),
            color: Color.Yellow,
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(pause);



//move left or right
        engine.input.keyboard.on('down', (evt) => {
            if (evt.key === 'ArrowLeft' || evt.key === 'a') {
                this.player.vel.x = -600; //  -600 pixels/ second left
            } else if (evt.key === 'ArrowRight' || evt.key === 'd') {
                this.player.vel.x = 300; // 300 pixels / second  rechts
            }
        });

// stop moving
        engine.input.keyboard.on('up', (evt) => {
            if (evt.key === 'ArrowLeft' || evt.key === 'ArrowRight' || evt.key === 'a' || evt.key === 'd') {
                this.player.vel.x = 0; // stop movement player
            }
        });
    }

    onPostUpdate(engine, delta) {
        const player = this.actors.find(actor => actor instanceof Kirbo);
        if (engine.input.keyboard.wasPressed(Input.Keys.KeyX)) {
            console.log('attack');
            this.spawnAttack(this.player.pos.x, this.player.pos.y);
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.KeyP)) {
            engine.goToScene('pause'); // pause
        }
    }

    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    spawnEnemy() {
        const randomNumberOfDemon2 = this.generateRandomNumber(1, 5);

        for (let i = 0; i < randomNumberOfDemon2; i++) {
            const demon2 = new Demon2(this.generateRandomNumber(1500, 2000), 500);
            this.add(demon2);
        }


    }

    spawnAttack(posX, posY) {
        // make and add new attack
        const attack = new Attack(posX, posY);
        this.add(attack);

        if (attack.pos.x > 1500) {
            attack.kill();
        }
        attack.on('collisionstart', (event) => {
            if (event.other instanceof Demon2) {
                attack.kill();
                event.other.kill();
                this.score += 1000;
                this.updateScoreLabel();
            }
            if (event.other instanceof Demon) {
                this.demonLives--;
                if (this.demonLives <= 0) {
                    event.other.kill();
                    this.score += 5000;
                    this.updateScoreLabel();
                    this.demonLives = 5;
                }
            }
        });
    }

    decreaseLives() {
        this.lives--;
        this.updateLivesLabel();
    }


    updateScoreLabel() {
        this.score++;
        this.scoreLabel.text = 'SCORE: ' + this.score;
    }

    updateLivesLabel() {
        this.livesLabel.text = 'LIVES: ' + this.lives;
    }

    resetGame() {
        console.log('reset game');
        localStorage.setItem('scores', JSON.stringify(this.score));

        this.score = 0;
        this.lives = 3;
        this.updateScoreLabel();
        this.updateLivesLabel();
        this.demonLives = 5;
        this.add(new Kirbo(250, 600));

        this.game.goToScene('gameover');
    }
}