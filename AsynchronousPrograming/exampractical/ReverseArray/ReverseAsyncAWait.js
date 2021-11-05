//Array-reverse-async-with-awaot.js

//we use Array.Prototype to have a this method  to extend 
// Array.prototype.newReverseAsync = async function(){
//     console.log(await reverseArrayInPlaceAsyncHelp);
// }
 function reverseArrayInPlaceAsyncHelp(array){
    let i =0;
    let j=array.length-1;
    while(i < j){
        const temp=array[i];
        array[i]=array[j];
        array[j]=temp;
        i++;
        --j;
    }
    return array;
}
async function rev(){
    console.log('end');
    let result = await reverseArrayInPlaceAsyncHelp([2,3,4,8]);//8,4,3,2
    console.log(result);
    console.log('end');
}
rev();
