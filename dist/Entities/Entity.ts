import { Vector2 } from "../Vectors/Vector2.js"

export class Entity{

    public velocity: Vector2
    public position: Vector2
    public color: string
    public radius:  number

    constructor(pos: Vector2, color:string, radius: number ){
        this.position = pos
        this.color = color
        this.radius = radius
    }

    draw(ctx: CanvasRenderingContext2D){
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color
        ctx.fill()
    }

}