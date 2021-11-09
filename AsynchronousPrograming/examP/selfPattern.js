
const counter = { 
    count: 0,
    incrementPeriodically() {
        self= this;

    // what will happen if we replace the arrow function with a regular one? 
    setInterval(function() { console.log(++self.count); }, 1000); }
    
    //setInterval(function(){console.log(++this.count)},1000);}
    }; 
    counter.incrementPeriodically();