'use strict';
const Node = require('./node-17')
const Tree = require('./tree-17')

let breadthFirst = (tree) => {
    let result = [];
    let recursive = (node) => {
        result.push(node.value);
        if (node.left) recursive(node.left);
        if (node.right) recursive(node.right);
    }
    recursive(tree.root);
    return result;
}


let myRoot = new Node(3)
let myTree = new Tree(myRoot)
myTree.add(4)
myTree.add(5)
myTree.add(6)
myTree.add(7)
myTree.add(8)
let myRoot2 = new Node('g')
let myTree2 = new Tree(myRoot2)
myTree2.add('a')
myTree2.add('r')
myTree2.add('j')
myTree2.add('b')
myTree2.add('n')
describe('Testing Code challenge 17', () => {
    test(' take a tree and return a list of all values in the tree, in the order they were encountered ', () => {
        expect(breadthFirst(myTree)).toStrictEqual( [3, 4, 5, 6, 7, 8]);
        expect(breadthFirst(myTree2)).toStrictEqual( ["g", "a", "b", "r", "j", "n"]);
    });
});