"use strict";
class Tree {
  constructor(node = null) {
    this.root = node;
  }
  preOrder() {
    // root - left - right
    let str = "";
    function preOrderTraverse(node) {
      str = `${str}${node.value} > `;
      if (node.left) {
        preOrderTraverse(node.left);
      }
      if (node.right) {
        preOrderTraverse(node.right);
      }
    }
    preOrderTraverse(this.root);
    return str;
  }
  inOrder() {
    //  left - root - right
    let str = "";
    function inOrderTraverse(node) {
      if (node.left) {
        inOrderTraverse(node.left);
      }
      str = `${str}${node.value} > `;
      if (node.right) {
        inOrderTraverse(node.right);
      }
    }
    inOrderTraverse(this.root);
    return str;
  }
  postOrder() {
    //  left - right - root
    let a = "";
    function inOrderTraverse(node) {
      if (node.left) {
        inOrderTraverse(node.left);
      }
      if (node.right) {
        inOrderTraverse(node.right);
      }
      a = `${a}${node.value} > `;
    }
    inOrderTraverse(this.root);
    return a;
  }
  //finMax - challange 16
  finMax() {
    //traverse the tree by preorder method.
    // root - left - right
    let maxVal;
    function preOrderTraverse(node) {
      if (maxVal) {
        if (node.value > maxVal) {
          maxVal = node.value;
        }
      } else {
        maxVal = node.value;
      }
      if (node.left) {
        preOrderTraverse(node.left);
      }
      if (node.right) {
        preOrderTraverse(node.right);
      }
    }
    preOrderTraverse(this.root);
    return maxVal;
  }
}
module.exports = Tree;