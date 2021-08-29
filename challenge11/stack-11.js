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

        let current = this.head
        let result = ''
        while (current !== null) {
            result = result + `{ ${current.value} } `
            current = current.next
        }
        result = result + 'NULL'
        return result
    }
   
    pop() {
       
     let curr=this.top
     while (curr.next !=null) {
        curr=curr.next 
     }
      let val =curr.value
      curr=null
      return(val)
    }
    peek() {
        if(this.top==null){
            return(false)
            }  
            return(true) 
    }
    
        
    }
    