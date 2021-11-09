let myPromise = new Promise(function(resolve,reject){
    console.log("A");
    resolve( { name:"assad"})
    console.log("B");
})
myPromise.then(function(message){console.log(message); return "i am first return from .then"})
.then(function(message){console.log(message)});
