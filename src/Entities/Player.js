import { Entity } from "./Entity.js";
import { Keyboard } from "../Control/Device.js";
export class Player extends Entity {
    constructor(pos, color, radius) {
        super(pos, color, radius);
    }
    setDeviceControl(device) {
        this.device = new Keyboard;
    }
    getDevice() {
        return this.device;
    }
}
