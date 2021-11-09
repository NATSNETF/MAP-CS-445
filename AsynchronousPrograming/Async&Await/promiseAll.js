console.log('start');
Promise.all([
    new Promise((resolve,reject)=>setTimeout(()=>resolve(1),1000)),
    new Promise((resolve,reject)=>setTimeout(()=>resolve(3),3000)),
    new Promise((resolve,reject)=>setTimeout(()=>resolve('hello'),2000))
]).then(console.log);
console.log('end');