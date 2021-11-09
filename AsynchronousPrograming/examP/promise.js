let myPromise = function(name,age){
    return  new Promise(function(resolve,reject){
        if(name=="assad"&&age ==40){
            resolve({status : "It is assad"})
        }else{
            reject({status:'It is not assad'})
        }
})
}
// we can use console log if  we don't return from .then else use function(){console.log}
myPromise('assad',4).then(console.log).catch(console.log);