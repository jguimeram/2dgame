import { Render } from "./Render.js";
export class Game {
    canvas;
    ctx;
    WIDTH = 1900;
    HEIGHT = 900;
    start;
    render;
    constructor() {
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = this.WIDTH;
        this.canvas.height = this.HEIGHT;
        this.start = 0;
        this.render = new Render;
    }
    init() {
    }
    loop() {
        const fn = (timestamp) => {
            if (this.start === null) {
                this.start = timestamp;
            }
            let deltatime = (timestamp - this.start) / 1000;
            this.start = timestamp;
            window.requestAnimationFrame(fn);
        };
        window.requestAnimationFrame(fn);
    }
}
