console.log(0);
console.log(45);
setTimeout(function() {
    console.log(1)
}, 2000);
setTimeout(function() {
    console.log(2)
}, 2000); //Zero delay doesn't actually mean the call back will fire-off after zero milliseconds. 
setTimeout(function() {
    console.log(3)
}); //default delay time is 0
setTimeout(function(){
    console.log(9);
})
console.log(4);
