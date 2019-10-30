//prototype GameState class
export class GameState {
    log: any;
    isLogoOk: boolean;

    constructor() {
        this.init();
    }

    public init() {
        this.isLogoOk = false;
        this.log = [];
    }

    public get(key) {
        const value = this[key];
        this.logEntry(key, value, "Get");
        return value;
    }

    public set(key, value) {
        this.logEntry(key, value, "Set");
        this[key] = value;
    }

    private logEntry(key, value, type) {
        this.log.push({
            timestamp: Date.now(),
            content: `${type} ${key} with value ${value}`
        });
    }
}