'use strict';
const Node = require('./node-06.test')
class Linked_List {
    constructor() {
        this.head = null
    }
   
    append(val) {
        let node = new Node(val)

        if (this.head == null) {
            this.head = node
            return
        }
        let current = this.head
        while (current.next !== null) {
            current = current.next
        }
        current.next = node
    }
    insert_before(value, newVal){
        let newNode = new Node(newVal)
       let current = this.head
       if(current.val===value){
           newNode.next=current
           this.head=newNode
           return("Success")
       }
        while(current !== null){
            if(current.next.val === value){
                newNode.next = current.next
                current.next = newNode
                return("Success")
            }
            current = current.next
        }
        return('No change, method exception')
    }
    insert_after(value, newVal){
        let newNode = new Node(newVal)
       let current = this.head
        while(current !== null){
            if(current.val === value){
                newNode.next = current.next
                current.next = newNode
                return("Success")
            }
            current = current.next
        }
        return('No change, method exception')
    }
}

describe('Testing Linked List ', () => {
    test('Code 06', () => {
        let Node1 = new Node('a')
        let Node2 = new Node('b')
        let Node3 = new Node('c')
        let list = new Linked_List()
        list.addMethod(Node1)
        list.addMethod(Node2)
        list.addMethod(Node3)
        expect(list.head).toStrictEqual(Node1);
        expect(list.insert_before('a','d')).toStrictEqual('Success');
        expect(list.insert_after('b','e')).toStrictEqual('Success');
        expect(list.toStringMethod()).toStrictEqual('{ d } -> { a } -> { b } -> { e } -> { c } -> NULL');
    });
});
