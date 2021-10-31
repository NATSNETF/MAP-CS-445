//re-write the following code using typescript class syntax. try to be as explicit
//and add types to everything you can. when you are done transpile the TS code to JS and inspect the JS code
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log(this.name + "is saying: tooooooooor !");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk(); // BMW is saying Toooott
console.log(car.acceleration); //0
car.accelerate(60);
console.log(car.acceleration); //60
