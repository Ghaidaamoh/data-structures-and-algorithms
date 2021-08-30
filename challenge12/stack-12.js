'use strict';

class Stack {
    constructor() {
        this.top = null
    }
    push(animal) {
      
        let node = animal
        if(this.top==null){
            this.top=node
            return(`${this.top.name} NULL`)
        }
        node.next=this.top
        this.top=node

        let current = this.top
        let result = ''
        while (current !== null) {
            result = result + `${current.name} `
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
            let eleValue = current.name
            this.top = null
            return (eleValue)
        }
        while (current.next !== null) {
            previous = current
            current = current.next
        }
        let eleValue = current.name
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