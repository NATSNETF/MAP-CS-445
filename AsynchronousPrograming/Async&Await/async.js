// // console.log('start');
// //  async function foo(){
// //     return 1;
// //     /*
// //     start
// // Promise { 1 }
// // end
// //     */
// // }
// // console.log(foo());
// // console.log('end');
// console.log('i am so happy with js');
// async function bar(){
//     //when async is add the whole function turns to new promise
//     return 2;
// }
// bar().then(console.log);
// console.log('here we go !!');
// //output
// //i am so happy with js
// //here we go !!
// //2


//this is treated as a promise
console.log('start');
 async function foo(){
    console.log('inside foo');
    return 'done';//resolve ....it is a promise it will be printed last
}
foo().then(console.log);
console.log('end');
