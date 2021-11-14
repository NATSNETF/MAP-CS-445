//implement Strategy pattern to choose between different logging algorithms , choosing between
//making the strategy ready

class Info{
    logging(msg){
        console.info(msg);
    }
}
class Warn{
    logging(msg){
        console.warn(msg);
    }
}
class Error{
    logging(msg){
        console.error(msg);
    }
}
class Table{
    logging(msg){
        console.table(msg);
    }
}

// after we made them ready we create a stategy ready
class Strategy{
    setStrategy(loggingMethod){
        this.loggingmethod = loggingMethod;
    }
    logging(msg){
        this.loggingMethod.logging(msg);
    }
}

const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);
