'use strict';
const node=require('./node-05.test')
class Linked_List{
    constructor(){
        this.head=null
    }
    addMethod(node) {
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
    includesMethod(value) {
        let current = this.head
        while (current !== undefined) {
            if (current.val == value)
                return true
        }
        return false
    }
    toStringMethod(){
        let current = this.head
        let result = ''
        while(current !== undefined){
            result = result + `{ ${current.value} } -> `
        }
        result = result + 'NULL'
        return result
    }
}

describe('Testing Linked List ', () => {
    test('It should check the type of of the Node and its value', () => {
        let Node1 = new Node('a')
        let Node2 = new Node('b')
        let Node3 = new Node('c')
        let list = new List()
        list.addMethod(Node1)
        list.addMethod(Node2)
        list.addMethod(Node3)
        expect(list.head).toStrictEqual(Node1);
        expect(list.toStringMethod()).toBe('');
   
    });
});