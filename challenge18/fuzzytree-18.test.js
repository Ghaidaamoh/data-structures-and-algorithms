'use strict';

const Tree = require('./tree-18');
const Node = require('./node-18');

function FizzBuzzTree(gTree){

    if (!gTree.root)
    return 'tree is empty';
    
    let result = [];

    const traverse = (node)=>{

        if(node.value %3 == 0){
            result.push(node.value = 'Fizz');

        }else if (node.value % 5 == 0 ){
            result.push(node.value = 'Buzz');


        }else if (node.value %3 == 0 && node.value % 5 == 0 ){
            result.push(node.value = 'FizzBuzz');

        }else{
            result.push(`${node.value}`) 
        }
        
        if (node.left) 
        traverse(node.left)

        if (node.right) 
        traverse(node.right)
      
    }
    traverse(gTree.root);
    return result;
}

let tree = null;

describe('Binary Tree', ()=>{

    beforeAll(()=> {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        // create a tree and pass root to it
        tree = new Tree(one);
    });

    it('constructor', ()=>{
        const newTree = new Tree();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1);
    });

    it('preOrder', ()=> {
        let expectedOutput = [1,2,6,7,8,9,3,4,5];
        let preOrder = tree.preOrder();
        expect(preOrder).toEqual(expectedOutput);
    });

    it('inOrder', ()=> {
        let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrder = tree.inOrder();
        expect(inOrder).toEqual(expectedOutput);
    });

    it('postOrder', ()=> {
        let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrder = tree.postOrder();
        expect(postOrder).toEqual(expectedOutput);
    });

});

describe('Fizz Buzz Tree',()=>{

    beforeAll(()=> {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);

        one.left = two;
        one.right = three;
        two.left = five;
        three.right = four;
        // create a tree and pass root to it
        tree = new Tree(one);
    });

    
    it('constructor', ()=>{
        const newTree = new Tree();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1);
    });

    it('having left and right', ()=>{
        const newTree = new Tree();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1);
        expect(tree.root.left.value).toEqual(2);
        expect(tree.root.right.value).toEqual(3);
    });
    
    it('finding the fizz buzz in the tree', ()=>{
        let output=  [
        '1',
        '2',
        'Buzz',
        'Fizz',
        '4'
      ]

        let expected = FizzBuzzTree(tree);
        expect(expected).toEqual(output);
    });

})
