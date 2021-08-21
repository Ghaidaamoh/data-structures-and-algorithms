'use strict';
const Node=require('./node-05.test')
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
        while (current !== null) {
            if (current.val === value){
                return true
            }
            current = current.next
        }
        return false
    }
    toStringMethod(){
        let current = this.head
        let result = ''
        while(current !== null){
            result = result + `{ ${current.val} } -> `
            current = current.next
        }
        result = result + 'NULL'
        return result
    }
}

describe('Testing Linked List ', () => {
    test('It should check the Lined List with my values :', () => {
        let Node1 = new Node('a')
        let Node2 = new Node('b')
        let Node3 = new Node('c')
        let list = new Linked_List()
        list.addMethod(Node1)
        list.addMethod(Node2)
        list.addMethod(Node3)
        expect(list.head).toStrictEqual(Node1);
         expect(list.toStringMethod()).toStrictEqual('{ a } -> { b } -> { c } -> NULL');
        expect(list.includesMethod('c')).toStrictEqual(true);
        expect(list.includesMethod('f')).toStrictEqual(false);
    });
});