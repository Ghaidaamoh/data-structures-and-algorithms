'use strict';

const Node = require('./Node_trees')

class BinaryTree {
    constructor(root) {
        this.root = root
    }


    add(value) {
        let node = new Node(value);

        if (this.root == null) {
            this.root = node;
        } else {
            let current = this.root
            while (current !== null) {
                if (current.value > value) {
                    if (current.left !== null) {
                        current = current.left
                    } else {
                        current.left = node
                        return('added')
                    }
                } else {
                    if (current.right !== null) {
                        current = current.right
                    } else {
                        current.right = node
                        return('added')

                    }
                }
            }

        }
    }

    maximumValue() {

        let result = root.value
        let recursive = (node) => {

            if (node.value > result) {
                result = node.value
            }

            if (node.left) recursive(node.left);
            if (node.right) recursive(node.right);
        }

        recursive(this.root);

        return result;
    }

}


/* ------------------------------------------------------------------
           Testing Part of Challenge 16
------------------------------------------------------------------ */


let myRoot = new Node(10)
let myTree = new BinaryTree(myRoot)

myTree.add(5)
myTree.add(2)
myTree.add(20)
myTree.add(15)



let myRoot2 = new Node(50)
let myTree2 = new BinaryTree(myRoot2)

myTree2.add(50)
myTree2.add(25)
myTree2.add(70)
myTree2.add(85)

describe('Testing tree maximum Value Challenge 16 ', () => {
    test('It should check the maximum value in the tree :', () => {

        
        expect(myTree.maximumValue()).toStrictEqual(20);
        expect(myTree2.maximumValue()).toStrictEqual(85);


    });
});
