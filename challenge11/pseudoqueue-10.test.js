'use strict';
const Stack = require('./stack-11')
class pseudoqueue {
    constructor() {
        this.stack1=new Stack(),
        this.stack2=new Stack()
    }
    enqueue(value){
        this.stack1.push(value);
        
        return('insert')
}

dequeue(){
    if(this.stack2.peek()){
        
            this.stack2.push(this.stack1.pop())
        
    }
    return this.stack2.pop()
}
}