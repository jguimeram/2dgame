import { Entity } from "./Entity.js";
import { Vector2 } from "../Vectors/Vector2.js";
import { Mouse } from "../Control/Device.js";

export class Boss extends Entity{

   constructor(pos: Vector2, color:string, radius: number){
        super(pos,color,radius)
    }

    setDeviceControl(device: Mouse): void {
    this.device = new Mouse        
    }
}

