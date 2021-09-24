"use strict";
const Node = require("./node-17");

class Tree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    // root left right
    let result = [];

    let recursive = (node) => {
      result.push(node.value);
      if (node.left) recursive(node.left);
      if (node.right) recursive(node.right);
    };

    recursive(this.root);

    return result;
  }

  postOrder() {
    // left -> right -> root
    let result = [];

    let recursive = (node) => {
      if (node.left) recursive(node.left);
      if (node.right) recursive(node.right);
      result.push(node.value);
    };

    recursive(this.root);

    return result;
  }

  inOrder() {
    // left -> root -> right
    let result = [];

    let recursive = (node) => {
      if (node.left) recursive(node.left);
      result.push(node.value);
      if (node.right) recursive(node.right);
    };

    recursive(this.root);

    return result;
  }

  breadthFirst() {
    let array = [this.root];
    let result = [];

    let recursive = () => {
      if (array.length > 0) {
        let node = array.shift();
        let value = node.value;
        result.push(value);

        if (node.left == null && node.right == null) {
          recursive();
        }
        if (node.left != null) {
          array.push(node.left);
        }

        if (node.right != null) {
          array3.push(node.right);
        }
        recursive();
      }
    };
    recursive();
    return result;
  }
}


describe("tree", () => {
  let tree = null;
  beforeAll(() => {
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
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new Tree(one);
  });

  it(" successfully instantiate an empty tree", () => {
    // root -> left -> right
    let emptyTree = new Tree();

    expect(emptyTree).toBeInstanceOf(Tree);
  });
  it("successfully instantiate a tree with a single root node", () => {
    // root -> left -> right
    let singleTree = new Tree(new Node(5));
    expect(singleTree).toBeInstanceOf(Tree);
  });
  it("successfully add a left child and right child to a single root node", () => {
    // root -> left -> right
    let twoNodeTree = new Tree(new Node(5));
    twoNodeTree.root.left = new Node(4);
    expect(twoNodeTree.root.left.value).toEqual(4);
  });
  it(" successfully return a collection from a preorder traversal", () => {
    // root -> left -> right
    let preOrder = tree.preOrder();
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    expect(preOrder).toEqual(expected);
  });
  it(" successfully return a collection from an inorder traversal", () => {
    // root -> left -> right
    let inOrder = tree.inOrder();
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    expect(inOrder).toEqual(expected);
  });
  it(" successfully return a collection from a postorder traversal", () => {
    // root -> left -> right
    let postOrder = tree.postOrder();
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    expect(postOrder).toEqual(expected);
  });
});