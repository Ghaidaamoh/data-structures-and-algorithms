'use strict';
const Node = require('./node-10')
class Queue {
    constructor() {
        this.front = null,
        this.back=null
    }
    enqueue(val) {
      
        let node = new Node(val)
        if(this.front==null){
            this.front=node
            this.back=node
            return('done')
        }
        this.back.next=node
        this.back=node
        return('insert new node')
    }
   
    dequeue() {
        if(this.front==null){
        return('exception it is empty')
        }
     let node=this.front
      this.front =node.next  
      return(node.value)
    }
    peek() {
        if(this.front==null){
            return('exception it is empty')
            }  
            return(this.front.value) 
    }
    isEmpty(){
        if(this.front==null){
            return(true)
            } 
            return(false)  
    }
        
    }
    
    let queue = new Queue()
    describe('Challenge 10_Queue ', () => {
        test('It should check Stack Methods', () => {
            expect(queue.enqueue('a')).toStrictEqual('done');
            expect(queue.isEmpty()).toStrictEqual(false);
            expect(queue.enqueue('g')).toStrictEqual('insert new node');
            expect(queue.dequeue()).toStrictEqual('a');
            expect(queue.dequeue()).toStrictEqual('g');
            expect(queue.dequeue()).toStrictEqual('exception it is empty');
            expect(queue.peek()).toStrictEqual('exception it is empty');
            expect(queue.isEmpty()).toStrictEqual(true);
        });
    });