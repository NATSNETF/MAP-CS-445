// console.log('start');

// async function f(){
//     return 1;
// }
// async function g(){
//     let result = await f();
//     console.log(result);
// }
// g();
// console.log('finish');


//how await works...await is like .then....await keyboard only works in async function
console.log('nijmir');

function foo(){
    return 'done';
}
async function bar(){
    console.log('አብ ዊስቲ bar');
    let result = await foo();// after await all the stetment will be on hold
    console.log(result);//this is async...this will come first
    console.log('ተወድአ');//this is async
    }
    bar();
    console.log('end story');
    
