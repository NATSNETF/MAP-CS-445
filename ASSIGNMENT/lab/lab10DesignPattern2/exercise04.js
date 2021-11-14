//Create a memoized version of the following fibonacci() recursive method to improve its performance.
const fibonacci =(function(){
//to store map..
const memo = new Map();

function f(n){
    let value;
    if(memo.has(n)){
        value = memo.get(n);
    }else{
        if(n <= 1){
            value = n;
        }else {
            value = f(n - 1) + f(n - 2);
        }
        memo.set(n,value);
    }
    return value;

}
return f;
})();
//function is returning function
console.log(fibonacci(8));