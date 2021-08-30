'use strict';
const Stack = require('./stack-11')
class pseudoqueue {
    constructor() {
        this.stack1=new Stack(),
        this.stack2=new Stack()
    }
    enqueue(value){
      let ele=  this.stack1.push(value);
        
        return(ele)
}

dequeue(){
    if(this.stack1.peek()){
        if(this.stack1.top !== null || this.stack1.top !== undefined){
            let eleValue = this.stack1.pop()
            this.stack2.push(eleValue)
            return(eleValue)
        }
        return('Empty')
    }
}
}
let queue = new pseudoqueue()
describe('Challenge 11_pseudoqueue ', () => {
    test('It should check enqueue Method :', () => {
        expect(queue.enqueue('a')).toStrictEqual('a NULL');
        expect(queue.enqueue('b')).toStrictEqual('b a NULL');
        expect(queue.enqueue('c')).toStrictEqual('c b a NULL');
    });
    test('It should check dequeue Method :', () => {
        expect(queue.dequeue()).toStrictEqual('a');
        expect(queue.dequeue()).toStrictEqual('b');
        expect(queue.dequeue()).toStrictEqual('c');
    });
});