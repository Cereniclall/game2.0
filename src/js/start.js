import '../css/style.css';
import {Actor, Color, Engine, Label, Physics, Scene, TextAlign, Vector, Input, Font, FontUnit} from 'excalibur';
import {StartBackground} from './startBackground.js';
import {Play} from './playImage.js';

export class Start extends Scene {
    onInitialize(engine) {
        const game = engine;
        const startbackground = new StartBackground();
        this.add(startbackground);

        const startText = new Label({
            text: 'Help Kirbo fight the demons',
            pos: new Vector(520, 250),
            textAlign: TextAlign.Center,
            color: Color.Yellow,
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px
            })
        });
        this.add(startText);

        const startButton = new Play({
            width: 200,
            height: 50,
            anchor: new Vector(0.5, 0.5),
        });
        this.add(startButton);

        const instructions = new Label({
            text: 'Move - < >' +
                '\nJump - SPACEBAR' +
                '\nShoot - X',
            pos: new Vector(660, 320),
            textAlign: TextAlign.Center,
            color: Color.Yellow,
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        });
        this.add(instructions)

        startButton.on('pointerup', () => {
            game.goToScene('runKirbo');
            this.resetGame();
        });
    }

    resetGame() {
        this.engine.goToScene('runKirbo');
    }
}