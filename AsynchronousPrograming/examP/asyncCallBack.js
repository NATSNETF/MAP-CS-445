// //asynch callback
// //func1 calling back asynchronously
// console.log('this code is tricking us');
// function func1(func2){
//     console.log('func1 prints 1');
//     setTimeout(func2,1000);
// }
// function func3(){
//     console.log('func3 prints 3');
// }
// func1(function func2(){
//     console.log('func2 prints 2');
// });
// func3();


function printOne() {
	setTimeout(function() {
		console.log('One');
	}, 1000);
}

function printTwo() {
	setTimeout(function() {
		console.log('Two');
	}, 2000);
}

function printThree() {
	setTimeout(function() {
		console.log('Three');
	}, 3000);
}

console.log('Start');

printOne();
printThree();
printTwo();

console.log('End');
console.log('2nd example below .......................');
function printOne() {
	console.log('One');
}

function printTwo() {
	console.log('Two');
}

function printThree() {
	console.log('Three');
}

console.log('Start');

setTimeout(printOne, 1000);
setTimeout(printThree, 3000);
setTimeout(printTwo, 2000);

console.log('End');
