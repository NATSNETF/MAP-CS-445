//in asynchronous function the regular ...try and catch is not able to catch the error

//synchronous function
function thisthrow(){
    throw new Error("thrown from thisThrows()");
}
try {
    thisthrow();
}catch(e){
    console.log(e);
}finally{
    console.log("we do cleanup here");
}

//asynchronous function....not able to catch
async function thisthrow(){
    throw new Error("thrown from thisThrows()");
}
try {
    thisthrow();////it is asynch it's going to happen in the future that is why we can not catch the error
}catch(e){
    console.log(e);
}finally{
    console.log("we do cleanup here");
}
// the line above will show error

//how to handle it
//1.by using await inside async function
//2.chain async function call with a.catch() call

//1. await
async function thisThrow(){
    throw new Error("throw from thisThrows()");
}
async function foo(){
    try{
        await thisThrow();
    }catch(e){
        console.log('inside catch....');
    }
}
foo();
//2.  .catch()
thisThrow().then(console.log)
.catch(data => console.log('inside catch....'))
.finally(()=> console.log('inside finally....'));