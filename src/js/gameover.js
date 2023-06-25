import '../css/style.css';
import { Actor, CollisionType, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector } from 'excalibur';
import { StartBackground } from './startBackground.js';
import { Home } from './homeImage.js';

export class GameOver extends Scene {

    onInitialize(engine) {
        const storedScores = JSON.parse(localStorage.getItem('scores'));

        const gameOverbackground = new StartBackground();
        this.add(gameOverbackground);

        const gameOverText = new Label({
            text: 'You died!',
            pos: new Vector(240, 250),
            textAlign: TextAlign.Center,
            color: Color.Yellow,
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px
            })
        });
        this.add(gameOverText);

        const lastScoreLabel = new Label({
            text: 'SCORE: ' + storedScores,
            pos: new Vector(680, 320),
            color: Color.Yellow,
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px
            }),
            textAlign: TextAlign.Center
        });
        this.add(lastScoreLabel);

        const backButton = new Home({
            x: 750,
            y: 410,
            width: 200,
            height: 50,
            anchor: new Vector(0.5, 0.5),
        });
        this.add(backButton);

        backButton.on('pointerup', () => {
            location.reload();
        });
    }
}