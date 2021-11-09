//change isPrime function below that takes in a single number parameter and return a new promise using setTimeout and 
//after 500 millisecounds. the promise with eather resolve or reject.
//if the input is prime number, the promise resolve with{prime:true},
//if the input is not a prime number, it reject with {prime:false}

const isPrime = num => new Promise((resolve, reject) => { //creating new promise ....take two parameter 
    setTimeout(function(){
        for(let i =2, s = Math.sqrt(num); i <= s; i++)
    if(num % i===0) reject({prime:false});
    resolve({prime:num > 1});
    // return num > 1;

    },5000);

});

console.log('start');
isPrime(3)
.then(res => console.log(res))
.catch(err => console.log(err));
console.log('end');