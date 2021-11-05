Array.prototype.newReverseAsync = function(){
    new Promise((resolve,reject)=>{
        let i=0;
    let j=this.length -1;
    while(i < j){
        const temp = this[i];
        this[i] = this[j];
        this[j]=temp;
        i++;
        --j;
    }
    resolve(this);
    }).then(console.log);
};
console.log('start');
[1,2,4,7].newReverseAsync();
console.log('end');