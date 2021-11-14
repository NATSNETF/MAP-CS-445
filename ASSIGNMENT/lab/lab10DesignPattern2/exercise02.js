//implement Decorator pattern
class User{
    constructor(name){
        this.name = name;
    }
}
class DecoratedUser{
    constructor(user, street,city){
        this.user=user;
        this.name=user.name;
        this.street=street;
        this.city=city;

    }

loger(){
    console.log("Decored User: " + this.name + "," + this.street + "," + this.city);
}
}
const user = new User("mario")
var decorated = new DecoratedUser(user, "broadway ", "New York ");
decorated.loger();
