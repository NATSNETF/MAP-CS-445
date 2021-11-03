console.log("start");
[1, 2, 3].forEach(i => console.log(i));
//in line 2 it is a callback
console.log(`Finish`);
////////////////////////////////////////////
//what is callback?
// 1.callback is a function that is to be excuted after another function has finished excuting ...
//2.in java script function can take function as arguments, and can be returned by other functions
//functions that can do this are called higher order function.
//3.any function that is passed as an argument is called function.
// not all callback is asynchronous....
console.log('');

console.log(`Start`);
[1, 2, 3].forEach(i => setTimeout(() => console.log(i)), 0);// this line is asynchronous

console.log(`Finish`);
//