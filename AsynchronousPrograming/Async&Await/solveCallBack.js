// //how async and await solve callback hell issuue
// function multiplyBy10Async(num, callback) {
//         setTimeout(callback, 3000, num * 10); //async...settimeout is async
//     //num * 10 ... is sending argument to callback
// }
//     // multiplyBy10Async(10, (num)=> console.log(num));
//     function withCallback() {
//         multiplyBy10Async(5, (num1) => {
//             multiplyBy10Async(num1, (num2) => {
//                 console.log(num2);
//             });
//         });
//     }
//     withCallback();
    ////////////////////////////////////////

    function multiplyBy10Async(num, callback) {
            setTimeout(callback, 1000, num * 10);
        }
        function multiplyBy10Promise(num) {
            return new Promise(function(resolve, reject) {
                multiplyBy10Async(num, (result) => resolve(result));
            });
        }
        async function withAsyncAndAwait() {
            let res1 = await multiplyBy10Promise(5);
            let res2 = await multiplyBy10Promise(res1);
            console.log(res2);
        }
        withAsyncAndAwait();
        