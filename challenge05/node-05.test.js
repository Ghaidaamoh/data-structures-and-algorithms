
'use strict';
class Node {
    constructor(val){
this.val=val,
this.next=null
    }
}

describe('Testing node', () => {
    test(' return the next node ', () => {
        
        const testNext= new Node (30,null)
        const testHead= new Node (10,testNext)
        testHead.next=testNext
        expect(typeof testHead.next).toStrictEqual('object');
        expect( testHead.next.val).toStrictEqual(30);
    });
});

module.exports=Node;