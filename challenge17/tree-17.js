const Node = require('./node-17')
class BinaryTree{
    constructor(root){
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
                        return('inserted')
                    }
                } else {
                    if (current.right !== null) {
                        current = current.right
                    } else {
                        current.right = node
                        return('inserted')
                    }
                }
            }
        }
    }
}
module.exports = BinaryTree