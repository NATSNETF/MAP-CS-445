setTimeout(() => console.log('setTimeout results'), 2000);//asynchronous
const promise = new Promise((resolve) =>{ resolve(`Promise results`); //asynchronous it is promise
console.log("inside promise excttutor.."); // 
//inside this new promise ,,,, when we start printing it will show all synchronos
});
console.log('Code starts');
promise.then(console.log);
console.log('I love JS');

// Code starts
// I love JS
// Promise results
// setTimeout results
//
//inside promise excutor
//code start
//i love
//resolve
//settimeout

//why promise result comes before setTimeOut