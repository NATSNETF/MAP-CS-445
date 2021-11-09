# Exercise 01
Re-write the following code using TypeScript. Try to be as explicit as possible and add Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.

class University {
    constructor(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    graduation(year) {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

let miu = new University("MIU", "MSD");
miu.graduation(2021);
Exercise 02
Re-write the following code using TypeScript. Try to be as explicit as possible and add Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.

let bankAccount = { 
	money: 2000, 
	deposit(value) { 
		this.money += value; 
	} 
}; 
let myself = { 
	name: "John", 
	bankAccount: bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);


# Exercise 03
Re-write the following code using TypeScript Class syntax. Try to be as explicit as possible and add Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.

class Car {
    constructor(name) {
        this.name = name;
        this.acceleration = 0;
    }
    honk() {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60


# Exercise 04
Re-write the following code using TypeScript Class syntax. Try to be as explicit as possible and add Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.

let baseObject = { 
	width: 0, 
	length: 0 
}; 
let rectangle = Object.create(baseObject); 

rectangle.width = 5; 
rectangle.length = 2; 

rectangle.calcSize = function() { 
	return this.width * this.length; 
}; 

console.log(rectangle.calcSize()); // 10