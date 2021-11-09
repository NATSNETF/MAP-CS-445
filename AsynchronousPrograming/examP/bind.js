function fn(){
    console.log(this.name)
}
const data ={name : ' assad '}
const clone = fn.bind(data);//  clone = function(){console.log(data.name)}

clone.call({name : "mike "})//  assad
//////