'use strict';
const Node = require('./node-13')
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
    stackLength(){
        let current = this.top
        let total = 0
        while(current !== null){
            total++
            current=current.next
        }
        return total
    }
  
    }
    module.exports=Stack;