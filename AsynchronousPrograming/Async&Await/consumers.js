// let pro = new Promise(function(resolve,reject){
//     const random = Math.random();
//     console.log('random::',random);
//     if(random > 0.5){
//         resolve("done !")
//     }else{
//         reject(new Error("whoops !"));
//     }
// });
// pro.then(function(data){
//     console.log(data);
//     //this always takes resolve
// })
// .catch(err => console.log(err))
// //takes reject

// .finally(()=>console.log('promise is finished'))

let pro = new Promise(function(resolve,reject){
    const random = Math.random();
    console.log('random::',random);
    if(random > 0.5){ // if the number is 0.9099 smth,,,it will resoleve and once it resolve it will go to ".then"---the data inside it will map it
        resolve([1,2,3,4,6])
    }else{
        reject(new Error("whoops !"));
    }
});
pro.then(data => data.map(elem => elem * 2)) // the data is the array [1,2,3,4,6]----- in this case we have return statement it will return another promise
.then(data => console.log(data))