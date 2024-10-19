import { Entity } from "./Entity.js";
import { Mouse } from "../Control/Device.js";
export class Boss extends Entity {
    constructor(pos, color, radius) {
        super(pos, color, radius);
    }
    setDeviceControl(device) {
        this.device = new Mouse;
    }
}
