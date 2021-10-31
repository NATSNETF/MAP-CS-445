//Re-write the following code using typeScript, try to be as explict as possible and add types to everything you can. when you are done.
//transpile the TS code to JS code and inspect the js code.
//how to convert ---tsc
class University{
    name: string;
    dept:string;
    constructor(name :string, dept:string){
        this.name=name;
        this.dept=dept;
        
    }
    graduation(year: number): void{
        console.log('graduating' + this.dept + " " + year);
        
    }
}
let miu = new University("MIU","MSD");
miu.graduation(2021);