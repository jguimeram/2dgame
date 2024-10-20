export class Mouse {
    constructor() {
        document.addEventListener('mousedown', this.press);
        document.addEventListener('mouseup', this.press);
    }
    press(e) {
        console.log(e);
    }
    release(e) {
        console.log(e);
    }
}
