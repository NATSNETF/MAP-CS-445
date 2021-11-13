//points Decorator pattern extends ( docorates) an object,s behavior dynamically
//the ability to add  new behavior at runTime,,,,

class User{
    constructor(name){
        this.name = name;
    }
    log(){
        console.log("user: " + this.name);
    }
}
var user = new User("Kelly");
user.log();
//it display only name... but what if we want thier addres

class DecoratedUser{
    constructor(user,street,city){
        this.user = user;
        this.name = user.name;
        this.street = street;
        this.city = city;
    }
    log(){
        console.log("Decored User: " + this.name + "," + this.street + "," + this.city);
    }
}

var decorated = new DecoratedUser(user, "broadway ", "New York ");
decorated.log();