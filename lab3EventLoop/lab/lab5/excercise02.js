//create a method named removeDuplicateAsync which works only for Array types and removes all duplicates for any array asynchrnously. 
//when you finish. test using the code below:
//notes 
//this.... represent for the array
//set we use it ....b/c dnt allowed any duplicate
//sol 1
Array.prototype.removeDuplicatesAsync = function(){
    let arr = this;
    new Promise(function(resolve,reject){
        resolve([...new Set(arr)]);
    }).then(console.log);
}

//sol2 ... both gives same out put
//using await to remove duplicate..if we use await ..the function is async
//we use this ...b/c it is inside the function

Array.prototype.removeDuplicatesAsync = async function(){
    // let result = await [...new Set(this)];
    // console.log(result);
    console.log(await [... new Set(this)]);
}
console.log('start');
[4,1,5,7,2,3,1,4,6,5,2].removeDuplicatesAsync();
console.log('end');