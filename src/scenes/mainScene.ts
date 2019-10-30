import { Logo } from "../objects/Logo";
import { GameState } from "../misc/GameState";

import { config } from "../misc/Config";

export class MainScene extends Phaser.Scene {
    state: GameState; //game state

    logo: Phaser.GameObjects.Sprite; //logo sprite
    titleText: Phaser.GameObjects.Text; //title text on canvas

    constructor() {
        super("MainScene");
    }

    preload(): void {
        this.load.pack("preload", "./src/assets/pack.json", "preload");
    }

    init(): void {
        this.state = new GameState();
    }

    create(): void {
        this.logo = new Logo({
            scene: this,
            x: 300,
            y: 200,
            asset: "logo"
        });

        this.state.set("isLogoOk", true);

        this.createTitle();
    }

    createTitle() {
        this.titleText = this.add.text(
            config.width as number / 2,
            50,
            "phaser3-typescript-boilerplate",
            {
                fontFamily: "Connection, Verdana, Calibri",
                fontSize: "26px",
                color: "#fff"
            }
        ).setOrigin(0.5);
    }
}
