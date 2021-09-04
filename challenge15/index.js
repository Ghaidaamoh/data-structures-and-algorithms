"use strict";

const Node = require("./node-15");
const BST = require("./bst");

let bst = new BST(new Node(2));
bst.add(5);
bst.add(14);
bst.add(1);
bst.add(7);
bst.add(9);
console.log(bst.contains(14));