'use strict';
const Node = require('./node-07.test')
class Linked_List {
    constructor() {
        this.head = null,
            this.tail = null,
            this.nodesNum = 0
    }

    addMethod(value) {
        let node = new Node(value)



        if (this.head == null) {
            this.head = node
            return
        }

        let current = this.head

        while (current.next !== null) {
            current = current.next
        }

        current.next = node
        node.previous = current
        this.tail = node
        this.nodesNum++
    }
   
    kth_FromEnd(k) {

        if (k > this.nodesNum) {
            return ('k is greater than the length of the linked list')
        } else if (k < 0) {
            return (' not a positive integer')
        }

        let curr = this.tail
        

        for(let i =0;i<k;i++){
            curr = curr.previous
        }


        if (curr === this.head) {
            return ('k and the length of the list are the same')
        } else if (curr === this.tail) {
            return ('linkedlist is of a size 1')
        } else {
            return 'success Path';

        }

    }
    middleNode() {
        let middleNodeIndex = this.nodesNum / 2
        let integer_Index = parseInt(middleNodeIndex)

        if (integer_Index !== middleNodeIndex) {
            middleNodeIndex = integer_Index + 1
        }

        let current = this.head
        for (let i = 0; i < middleNodeIndex; i++) {
            current = current.next
        }

        return current.value;
    }

}



let TestList = new Linked_List();

TestList.addMethod(1)
TestList.addMethod(2)
TestList.addMethod(10)
TestList.addMethod(15)
TestList.addMethod(5)
TestList.addMethod(142)

describe('Testing Challenge 07 ', () => {
    test('It should check the k-th value from the end of a linked list', () => {


        expect(TestList.kth_FromEnd(142)).toStrictEqual('k is greater than the length of the linked list');
        expect(TestList.kth_FromEnd(3)).toStrictEqual('success Path');
        expect(TestList.kth_FromEnd(1548)).toStrictEqual('k is greater than the length of the linked list');
        expect(TestList.kth_FromEnd(5)).toStrictEqual('k and the length of the list are the same');
        expect(TestList.kth_FromEnd(-1)).toStrictEqual(' not a positive integer');
        expect(TestList.kth_FromEnd(0)).toStrictEqual('linkedlist is of a size 1');


    });
    test('Stretch Goal -> It should return the value in the middle of the list ', () => {

        expect(TestList.middleNode()).toBe(15);

        let StringList = new Linked_List();

        StringList.addMethod('a')
        StringList.addMethod('b')
        StringList.addMethod('c')
        StringList.addMethod('d')
        StringList.addMethod('e')

        expect(StringList.middleNode()).toBe('c');


    });
});
