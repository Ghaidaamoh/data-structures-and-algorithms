"use strict";
const Node = require("./node-14.test");

class Stack {
  constructor() {
    this.top = null;
    this.max = null;
  }

  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
      this.max = node.value;
      return;
    }
    if (node.value > this.max) {
      this.max = node.value;
    }
    node.next = this.top;
    this.top = node;
    return;
  }

  pop() {
    if (!this.top) {
      throw "empty stack";
    }
    if (this.top.value == this.max) {
      let oldTop = this.top;
      this.top = this.top.next;
      if (!this.top) {
        this.max = null;
        return oldTop.value;
      }
      this.max = this.top.value;
      let current = this.top;
      while (current) {
        if (current.value > this.max) {
          this.max = current.value;
        }
        current = current.next;
      }
      return oldTop.value;
    }
    let oldTop = this.top;
    this.top = this.top.next;
    return oldTop.value;
  }
  peek() {
    if (!this.top) {
      throw "empty stack";
    }

    return this.top.value;
  }

  isEmpty() {
    if (!this.top) {
      return true;
    }

    return false;
  }
}

let newStack = new Stack();

newStack.push(1);
newStack.push(5);
newStack.push(3);
newStack.push(2);
newStack.push(9);
newStack.pop();
console.log(newStack.max);

describe("Stack", () => {
    it("Can successfully push onto a stack", () => {
      let newStack = new Stack();
      newStack.push(1);
  
      expect(newStack.top.value).toEqual(1);
    });
    it(" successfully push multiple values onto a stack  ", () => {
      let newStack = new Stack();
      newStack.push(1);
      newStack.push(2);
  
      expect(newStack.top.value).toEqual(2);
    });
    it(" successfully pop off the stack", () => {
      let newStack = new Stack();
      newStack.push(1);
      newStack.push(2);
      newStack.pop();
      expect(newStack.top.value).toEqual(1);
    });
    it(" successfully empty a stack after multiple pops", () => {
      let newStack = new Stack();
      newStack.push(1);
      newStack.push(2);
      newStack.pop();
      newStack.pop();
  
      expect(newStack.isEmpty()).toEqual(true);
    });
    it(" successfully peek the next item on the stack", () => {
      let newStack = new Stack();
      newStack.push(1);
  
      expect(newStack.peek()).toEqual(1);
    });
    it(" successfully instantiate an empty stack", () => {
      let newStack = new Stack();
  
      expect(newStack.isEmpty()).toEqual(true);
    });
  
    it(" max return the maximum number in stack", () => {
      let newStack = new Stack();
      newStack.push(2);
      newStack.push(1);
      newStack.push(4);
      newStack.push(3);
      expect(newStack.max).toEqual(4);
      newStack.pop();
      expect(newStack.max).toEqual(4);
      newStack.pop();
      expect(newStack.max).toEqual(2);
    });
  });



module.exports = Stack;