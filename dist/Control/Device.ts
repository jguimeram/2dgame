export class Keyboard implements InterfaceDevice{

    public constructor(){
        document.addEventListener('keydown', this.press)
        document.addEventListener('keyup', this.press)
    }
    public press(e:Event):void{
        console.log(e)
    }
    public release(e:Event):void{
        console.log(e)
    }


}

export class Mouse implements InterfaceDevice{

    public constructor(){
        document.addEventListener('mousedown', this.press)
        document.addEventListener('mouseup', this.press)
    }

    public press(e:Event):void{
        console.log(e)
    }
    public release(e:Event):void{
        console.log(e)
    }

}

export interface InterfaceDevice{
    press(e:Event):void
    release(e:Event):void

 }