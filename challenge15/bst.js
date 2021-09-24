"use strict";
const Tree = require("./trees.test");
const Node = require("./node-15");
class BST extends Tree {
  add(value) {
    let node = new Node(value);

    if (this.root == null) {
      this.root = node;
    } else {
      this.getLocation(this.root, node);
    }
  }

  getLocation(currNode, node) {
    if (node.value < currNode.value) {
      if (currNode.left == null) {
        currNode.left = node;
      } else {
        this.getLocation(currNode.left, node);
      }
    } else {
      if (currNode.right == null) {
        currNode.right = node;
      } else {
        this.getLocation(currNode.right, node);
      }
    }
  }

  contains = (value) => (this.preOrder().indexOf(value) > 0 ? true : false);
}

module.exports = BST;