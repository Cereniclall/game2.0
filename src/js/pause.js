import '../css/style.css';
import {Actor, CollisionType, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector} from 'excalibur';
import {StartBackground} from './startBackground.js';
import {Home} from './homeImage.js';
import {Play} from './playImage.js';
import {Sound} from 'excalibur';
import {Background} from './background.js';
import {Kirbo} from './kirbo.js';
import {setSprite} from './kirbo.js';
import {kirbo3Select} from './kirbo3Select.js';
import {Kirbo2Select} from './kirbo2Select.js';
import {KirboSelect} from './kirboSelect.js';
import {Kirbo4Select} from './kirbo4Select';
import {Resources} from './resources.js';


export class Pause extends Scene {
    game;


    onInitialize(engine) {
        this.game = engine;

        // add elements
        const gameOverbackground = new StartBackground();
        this.add(gameOverbackground);

        const headerLabel = new Label({
            text: 'Paused',
            pos: new Vector(670, 100),
            color: Color.Yellow,
            font: new Font({
                family: 'impact',
                size: 50,
                unit: FontUnit.Px
            })
        });
        this.add(headerLabel);

        const pickSpriteLabel = new Label({
            text: 'Change your character',
            pos: new Vector(600, 200),
            color: Color.Yellow,
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(pickSpriteLabel);

        const toggleKirboSpriteButton = new KirboSelect({
            pos: new Vector(300, 320),
            width: 200,
            height: 50,
        });
        this.add(toggleKirboSpriteButton);

        toggleKirboSpriteButton.on('pointerup', () => {
            setSprite(1); // change sprite to 1
        });

        const toggleKirbo2SpriteButton = new Kirbo2Select({
            pos: new Vector(600, 320),
            width: 200,
            height: 50,
        });
        this.add(toggleKirbo2SpriteButton);

        toggleKirbo2SpriteButton.on('pointerup', () => {
            setSprite(2); // change sprite to 2
        });

        const toggleKirbo3SpriteButton = new kirbo3Select({
            pos: new Vector(900, 320),
            width: 200,
            height: 50,
        });
        this.add(toggleKirbo3SpriteButton);

        toggleKirbo3SpriteButton.on('pointerup', () => {
                setSprite(3); // change sprite to 3
            }
        );

        const toggleKirbo4SpriteButton = new Kirbo4Select({
            pos: new Vector(1200, 320),
            width: 200,
            height: 50,
        });
        this.add(toggleKirbo4SpriteButton);

        toggleKirbo4SpriteButton.on('pointerup', () => {
            setSprite(4); // cahnge sprite to 4
        });


        const backButton = new Play({
            text: 'Back',
            pos: new Vector(600, 400),
            width: 200,
            height: 50
        });
        this.add(backButton);

        backButton.on('pointerup', () => {
            engine.goToScene('runKirbo'); // Keer terug naar de hoofdscene wanneer de knop wordt ingedrukt
        });
    }

}