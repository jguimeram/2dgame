export class Game {
    canvas;
    ctx;
    WIDTH = 1900;
    HEIGHT = 900;
    start;
    constructor() {
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = this.WIDTH;
        this.canvas.height = this.HEIGHT;
        this.start = 0;
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
