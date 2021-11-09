console.log('hello');
function hello() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('I am adam.');
    }, 0);
  });
}
async function async_msg() {
  try {
    let msg = await hello();
    console.log(msg);
  }
  catch(e) {
    console.log('Error!', e);
  }
  console.log('hello again');
}
async_msg(); //output - I am adam
console.log('my name is adam');