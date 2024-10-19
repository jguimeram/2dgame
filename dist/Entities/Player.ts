import { Entity } from "./Entity.js";
import { Vector2 } from "../Vectors/Vector2.js";
import { Keyboard } from "../Control/Device.js";

export class Player extends Entity{

   constructor(pos: Vector2, color:string, radius: number){
        super(pos,color,radius)
    }

    setDeviceControl(device: Keyboard): void {
    this.device = new Keyboard        
    }

    getDevice(){
        return this.device
    }
}


