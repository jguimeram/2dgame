import { InterfaceDevice } from "./Device.js";


export class Keyboard implements InterfaceDevice {

    public keys: Record<string, boolean> = {}

    public constructor() {
        document.addEventListener('keydown', this.press.bind(this))
        document.addEventListener('keyup', this.press.bind(this))
    }
    public press(e: KeyboardEvent): void {
        console.log(e)
    }
    public release(e: KeyboardEvent): void {
        console.log(e)
    }


}

