let bankAcc:{
    money:number,
    deposit(value:any):void
}
={
    money : 2000,
    deposit(value){
        this.money += value;
    }
};
let myself:{
    name:string,
    bankAcc:typeof bankAcc,
    hobbies:string[]
}
={
    name:"naxa",
    bankAcc:bankAcc,
    hobbies:["violin","swimming"]
};
myself.bankAcc.deposit(3000);
console.log(myself);

