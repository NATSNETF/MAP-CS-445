function isEven(x){
    return new Promise((resolve,reject)=>{
        if(x%2===0){
            resolve(true)
        }else{
            resolve(false)
        }
    });
    }
    isEven(5).then(message=>console.log(message));
    //or... we can use both sytax
    isEven(4).then(console.log);