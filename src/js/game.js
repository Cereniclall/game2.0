import '../css/style.css';
import {Actor, Engine, Label, Physics, Vector} from 'excalibur';
import {Resources, ResourceLoader} from './resources.js';
import {RunKirbo} from './runKirbo.js';
import {Start} from './start.js';
import {GameOver} from './gameover.js';
import {Pause} from './pause.js';

export class Game extends Engine {

    constructor() {
        super({
            width: 1450,
            height: 780,
        });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        localStorage.setItem('scores', '[]');
        this.addScene('start', new Start());
        this.addScene('runKirbo', new RunKirbo());
        this.addScene('gameover', new GameOver());
        this.addScene('pause', new Pause());
        // this.showDebug(true);
        this.goToScene('start');


    }

    onPreUpdate(_engine, _delta) {
        console.log(this.currentScene.actors.length);
    }
}

new Game();