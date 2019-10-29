import { Logo } from "../objects/Logo";

export class MainScene extends Phaser.Scene {
    private logo: Phaser.GameObjects.Sprite;

    constructor() {
        super({
            key: "MainScene"
        });
    }

    preload(): void {
        this.load.pack("preload", "./src/assets/pack.json", "preload");
    }

    init(): void {

    }

    create(): void {
        this.logo = new Logo({
            scene: this,
            x: 300,
            y: 200,
            asset: "logo"
        });
    }
}
