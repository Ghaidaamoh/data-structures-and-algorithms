"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

describe("Node", () => {
    it(" create new node using constructor(value)", () => {
      let newNode = new Node(100);
      expect(newNode.value).toEqual(100);
      expect(newNode.next).toBeNull();
    });
})
module.exports = Node;