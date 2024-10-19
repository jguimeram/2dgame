export class Entity {
    velocity;
    position;
    color;
    radius;
    device;
    constructor(pos, color, radius) {
        this.position = pos;
        this.color = color;
        this.radius = radius;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    setDeviceControl(device) {
        this.device = device;
    }
}
