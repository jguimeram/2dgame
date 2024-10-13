export class Game{
    public canvas: HTMLCanvasElement
    public ctx: CanvasRenderingContext2D
    private  WIDTH: number = 1900
    private  HEIGHT: number = 900
    private start: number | null

    constructor(){
        this.canvas = document.getElementById('game') as HTMLCanvasElement
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
        this.canvas.width = this.WIDTH
        this.canvas.height = this.HEIGHT
        this.start = 0
    }

    init(){
        
    }

    loop(){
        const fn = (timestamp:number) =>{
            if(this.start === null){
                this.start = timestamp
            }
            let deltatime = (timestamp - this.start) / 1000;
            this.start = timestamp            
            window.requestAnimationFrame(fn)
        }
        window.requestAnimationFrame(fn)
    }

}