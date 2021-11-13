class Subject{
    constructor(){
        this.observers ={}
    }
    on(event, fn){
        if(this.observers[event]){
            this.observers[event].push(fn); // if eat exist then push
        }else{
            this.observers[event]= [fn]; // if not exist then we register, ={}..but we use [] b/c eat is in []
        }

    }
    emit(event, message){
        if(this.observers[event]){
            this.observers[event].forEach(fn => fn(message));
        }

    }
}
const subject = new Subject();
subject.on('eat', console.log); // register an observer
subject.on('study', console.log); // register an observer

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit('study', 'cs445');
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445