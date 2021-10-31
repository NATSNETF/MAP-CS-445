//re-write the following code using typescript class syntax. try to be as explicit
//and add types to everything you can. when you are done transpile the TS code to JS and inspect the JS code

class Car{
    name:string;
    acceleration:number;
    constructor(name: string){
        this.name=name;
        this.acceleration=0;
    }
    honk(): void{
        console.log(this.name + "is saying: tooooooooor !");
 
    }
    accelerate(speed: number):void{
        this.acceleration=this.acceleration + speed;
    }
}
let car= new Car("BMW");
car.honk();// BMW is saying Toooott
console.log(car.acceleration);//0
car.accelerate(60);
console.log(car.acceleration);//60

