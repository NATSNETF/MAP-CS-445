//synch- callBack example.
//vallBacks in synchronous functions
//if a function's code excutes in a top to buttom, left to right fashion, sequentially. and waiting until one code
//has finished before the next line begins, then the code is said to be excuting synchronously
function func1(func2){
    console.log('func1 prints 1');

func2();
}
function func3(){
    console.log('func3 print 3');
}
func1(function func2 (){
console.log('func2 prints 2');
});
func3();