import { Logo } from "../objects/Logo";
import { GameState } from "../misc/GameState";

export class MainScene extends Phaser.Scene {
    logo: Phaser.GameObjects.Sprite;
    state: GameState;

    constructor() {
        super({
            key: "MainScene"
        });
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
    }
}
