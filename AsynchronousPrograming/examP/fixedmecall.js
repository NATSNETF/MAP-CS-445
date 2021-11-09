// we can fixed by chenge to arrow function or bind or call


const a = {
    name: '',
    log: function () {
        this.name = 'Hello';
        console.log(this.name); // "Hello " 
        const setFrench = function(newname) { // fix by ()=>
        this.name = newname;
    } // add . bind(a)
    setFrench('Bonjour'); // add setFrench(a,"Bonjour");
    console.log(this.name); // "Hello" 
}
}
a.log();