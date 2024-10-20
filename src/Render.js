import { Player } from "./Entities/Player.js";
import { Boss } from "./Entities/Boss.js";
import { Vector2 } from "./Vectors/Vector2.js";
import { Keyboard } from "./Control/Keyboard.js";
export class Render {
    player;
    boss;
    keyboard;
    setParameters() {
        this.player = new Player(new Vector2(300, 300), "red", 75);
        this.boss = new Boss(new Vector2(1200, 300), "yellow", 150);
        return [this.player, this.boss];
    }
    setControllers() {
        this.keyboard = new Keyboard;
        this.player.setDeviceControl(this.keyboard);
    }
    draw(ctx) {
        this.player.draw(ctx);
        this.boss.draw(ctx);
    }
}
