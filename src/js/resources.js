import {ImageSource, Sound, Resource, Loader} from 'excalibur'
import kirboImage from '../images/kirbo.png'
import kirbo2Image from '../images/kirbo2.png'
import kirbo3Image from '../images/kirbo3.png'
import kirbo4Image from '../images/kirbo4.png'
import groundImage from '../images/ground.png'
import backgroundImage from '../images/background.png'
import demon2Image from '../images/demon2.png'
import ceilingImage from '../images/ceiling.png'
import demonImage from '../images/demon.png'
import playImage from '../images/play.png'
import homeImage from '../images/home.png'
import attackImage from '../images/attack.png'

const Resources = {
    Kirbo: new ImageSource(kirboImage),
    Kirbo2: new ImageSource(kirbo2Image),
    Kirbo3: new ImageSource(kirbo3Image),
    Kirbo4: new ImageSource(kirbo4Image),
    Ground: new ImageSource(groundImage),
    Background: new ImageSource(backgroundImage),
    Demon2: new ImageSource(demon2Image),
    Ceiling: new ImageSource(ceilingImage),
    Demon: new ImageSource(demonImage),
    Play: new ImageSource(playImage),
    Home: new ImageSource(homeImage),
    Attack: new ImageSource(attackImage),
}

// met deze for loop hoef je niet alles handmatig in de loader te zetten
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }