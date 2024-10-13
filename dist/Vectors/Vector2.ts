export class Vector2{
    constructor(public x: number, public y:number){}

    public add(x:number, y:number){
        return new Vector2(this.x + x, this.y + y)
    }

    public sub(x:number, y:number){
        return new Vector2(this.x - x, this.y - y)
    }

    public mult(scalar:number){
        return new Vector2(this.x * scalar, this.y * scalar)
    }

    public div(scalar:number){
        return new Vector2(this.x / scalar, this.y / scalar)
    }

    public mag():number{
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    public norm(){
        const l = this.mag()
        return new Vector2(this.x / l, this.y / l)
    }

    public clone(){
        return new Vector2(this.x, this.y)
    }


}