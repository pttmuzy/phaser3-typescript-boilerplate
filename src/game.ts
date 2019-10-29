import "phaser";
import { MainScene } from "./scenes/MainScene";
import { config } from "./config"

// game class
export class Game extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        config.scene = [
            MainScene
        ]
        super(config);
    }
}

// when the page is loaded, create our game instance
window.addEventListener("load", () => {
    var game = new Game(config);
});
