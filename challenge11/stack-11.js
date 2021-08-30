'use strict';
const Node = require('./node-11')
class Stack {
    constructor() {
        this.top = null
    }
    push(val) {
      
        let node = new Node(val)
        if(this.top==null){
            this.top=node
            return(`${this.top.value} NULL`)
        }
        node.next=this.top
        this.top=node

        let current = this.top
        let result = ''
        while (current !== null) {
            result = result + `${current.value} `
            current = current.next
        }
        result = result + 'NULL'
        return result
    }
   
    pop() {
       
        if (this.top == null || this.top == undefined) {
            return ('Empty')
        }
        let current = this.top
        let previous = current
        if (current.next == null) {
            let eleValue = current.value
            this.top = null
            return (eleValue)
        }
        while (current.next !== null) {
            previous = current
            current = current.next
        }
        let eleValue = current.value
        previous.next = null
        return (eleValue)
    }
    peek() {
        if(this.top==null){
            return(false)
            }  
            return(true) 
    }
    
        
    }
   module.exports=Stack;