export class Logo extends Phaser.GameObjects.Sprite {
    body!: Phaser.Physics.Arcade.Body; //always add this to physics enabled gameobject

    constructor(params) {
        super(params.scene, params.x, params.y, params.asset);

        this.init();
    }

    init() {
        this.addToScene();
        this.enablePhysics();

        this.setScale(0.5);
        this.body.setBounce(1, 1);
        this.body.setVelocity(200)
        this.body.setCollideWorldBounds(true);
        this.body.allowGravity = false;
    }

    addToScene() {
        this.scene.add.existing(this);
    }

    enablePhysics() {
        this.scene.physics.world.enable(this);
    }
}