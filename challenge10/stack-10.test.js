'use strict';
const Node = require('./node-10')
class Stack {
    constructor() {
        this.top = null
    }
    push(val) {
      
        let node = new Node(val)
        if(this.top==null){
            this.top=node
            return('done')
        }
        node.next=this.top
        this.top=node
        return('insert new node')
    }
   
    pop() {
        if(this.top==null){
        return('exception it is empty')
        }
     let node=this.top
      this.top =node.next  
      return(node.value)
    }
    peek() {
        if(this.top==null){
            return('exception it is empty')
            }  
            return(this.top.value) 
    }
    isEmpty(){
        if(this.top==null){
            return(true)
            } 
            return(false)  
    }
        
    }
    let stacknode = new Stack()
    describe('Challenge 10 ', () => {
        test('It should check Stack Methods', () => {
            expect(stacknode.push('a')).toStrictEqual('done');
            expect(stacknode.isEmpty()).toStrictEqual(false);
            expect(stacknode.push('g')).toStrictEqual('insert new node');
            expect(stacknode.pop()).toStrictEqual('g');
            expect(stacknode.pop()).toStrictEqual('a');
            expect(stacknode.pop()).toStrictEqual('exception it is empty');
            expect(stacknode.peek()).toStrictEqual('exception it is empty');
            expect(stacknode.isEmpty()).toStrictEqual(true);
        });
    });
