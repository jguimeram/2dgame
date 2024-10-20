import { InterfaceDevice } from "./Device.js";


export class Mouse implements InterfaceDevice {

    public constructor() {
        document.addEventListener('mousedown', this.press);
        document.addEventListener('mouseup', this.press);
    }

    public press(e: MouseEvent): void {
        console.log(e);
    }
    public release(e: MouseEvent): void {
        console.log(e);
    }

}
