
'use strict';
class Node {
    constructor(value){
        this.value = value,
        this.next = null,
        this.previous = null
    }
}


describe('Testing node', () => {
    test(' return the next node ', () => {
        
        const testNext= new Node (30,null)
        const testHead= new Node (10,testNext)
        testHead.next=testNext
        expect(typeof testHead.next).toStrictEqual('object');
        expect( testHead.next.value).toStrictEqual(30);
    });
});

module.exports=Node;