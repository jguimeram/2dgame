import { Entity } from "./Entity.js";
import { Vector2 } from "../Vectors/Vector2.js";


export class Boss extends Entity{
   constructor(pos: Vector2, color:string, radius: number){
        super(pos,color,radius)
    }

}

