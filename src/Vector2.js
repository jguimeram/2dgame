export class Vector2 {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(x, y) {
        return new Vector2(this.x + x, this.y + y);
    }
    sub(x, y) {
        return new Vector2(this.x - x, this.y - y);
    }
    mult(scalar) {
        return new Vector2(this.x * scalar, this.y * scalar);
    }
    div(scalar) {
        return new Vector2(this.x / scalar, this.y / scalar);
    }
    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    norm() {
        const l = this.mag();
        return new Vector2(this.x / l, this.y / l);
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
}
