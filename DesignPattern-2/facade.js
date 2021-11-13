//the mortgage Object is the facade in the simple code.it presents a simple interface to the client with only a single method :
//apply for but underneath this simple API lies considerable complexity
class Bank {
    verify(name,amount){
        //complex logic....
        return true;
    }
}
class Credit{
    get(name){
        return true;
    }
}
class Background{
    check(name){
        return true;
    }
}
class Mortagage {
    name;
    constructor(name){
        this.name = name;
    }
    applyFor(amount){
        //access multiple subsystems...
        var result ="approved";
        if(!new Bank().verify(this.name,amount)){
           result ="denied"; 
        }
        else if(!new Credit().get(this.name)){
            result = "denied";
        }else if (!new Background().check(this.name)){
            result ="denied";
            return this.name + "has been " + result + "for a " + amount + "mortgage";
        }
    }
   
}
let mortgage = new Mortagage("joan Templeton");
let result = new mortgage.applyFor("$100,000");
console.log(result);