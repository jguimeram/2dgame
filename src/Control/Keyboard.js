export class Keyboard {
    keys = {};
    constructor() {
        document.addEventListener('keydown', this.press.bind(this));
        document.addEventListener('keyup', this.press.bind(this));
    }
    press(e) {
        console.log(e);
    }
    release(e) {
        console.log(e);
    }
}
