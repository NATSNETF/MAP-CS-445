//create a method named new reverse() method... which will reverse elements in an Array.
//make sure this method is available for only Array objects which means can call like code below.in the code below this new reverse(). method runs synchronously
/*console.log('start');
[1,2,4,7].newReverse();
console.log('end');
//out put [7.4.2.1]

*/

Array.prototype.newReverse= function(){
    //reverse in-place
    let i=0;
    let j=this.length -1;
    while(i < j){
        const temp = this[i];
        this[i] = this[j];
        this[j]=temp;
        i++;
        --j;
    }
    console.log(this);
};
console.log('start');
[1,2,4,7].newReverse();
console.log('end');
//out put [7.4.2.1]
// other way using auxiliary array reverse

Array.prototype.newReverse2 = function(){
    const revArray = [];
    let s = this.length -1;
    while( s >= 0){
        revArray.push(this[s]);
        --s;
    }
    console.log(revArray);
};
console.log('otherReverse');
['dimiana','merina','naxa'].newReverse2();
console.log('endingReverse');