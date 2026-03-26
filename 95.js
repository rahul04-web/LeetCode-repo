// write a car class with properties like make , model and method like start and stop

class car{
    constructor(make, model, isrunnig){
        this.make=make,
        this.model=model,
        this.isrunnig=isrunnig
    }
    start(){
        if(this.isrunnig){
        console.log(`${this.make} ${this.model} is already running`)
        }else{
            this.isrunnig=true
            console.log(`${this.make} ${this.model} started`)
        }
    }
    stop(){
        if(!this.isrunnig){
        console.log(`${this.make} ${this.model} is already stopped`)
        }else{
            this.isrunnig=false
            console.log(`${this.make} ${this.model} stopped`)
        }
    }
    getCarDetailes(){
        console.log(`${this.make} ${this.model}`)
    }
}
let myCar = new car('Suzuki','Swift')
myCar.getCarDetailes()

myCar.stop()
myCar.start()