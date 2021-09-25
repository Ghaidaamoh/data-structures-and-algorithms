"use strict";
const LinkedList = require('./LinkedList')
class Hashmap {
    constructor(size) {
        this.size = size;
        this.storage = new Array(size);
    }
    hash(key) {
        // hashing algorithm
        return key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0) * 599 % this.size;
        // return the value of the hashed key
    }
    //This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
    add(key, value) {
        const hash = this.hash(key);
        //we need to store this key in our map (array)
        // we need to check if a value already exist in the index
        //if there is nothing in this location //create new linked list and  add to it 
        if (!this.storage[hash]) {
            const a = new LinkedList();
            //store key and value /  //-> {name: mahmoud}
            a.append({ [key]: value });
            this.storage[hash] = a;
        } else {
            this.storage[hash].append({ [key]: value });
        }
    }
    //Returns: Value associated with that key in the table
    get(key) {
        const hash = this.hash(key);
        if (this.storage[hash]) {
            let currentNode = this.storage[hash].head;
            while (currentNode) {
                if (currentNode.value[key]) {
                    return currentNode.value[key];
                    ;
                }
                currentNode = currentNode.next;
            }
        } else {
            return null;
        }
    }
    //Returns: Boolean, indicating if the key exists in the table already or not .
    contains(key) {
        const hash = this.hash(key);
        if (this.storage[hash]) {
            let currentNode = this.storage[hash].head;
            while (currentNode) {
                if (currentNode.value[key]) {
                    return true;
                }
                currentNode = currentNode.next;
            }
        } else {
            return false;
        }
    }
}

describe("HASH TABLE challenge30", () => {
    let hashTable;
    beforeAll(() => {
      hashTable = new Hashmap(5000);
      hashTable.add("name", "ghaidaa");
      hashTable.add("age", "24");
      hashTable.add("job", "Full Stack Developer");
    });
    it("It Should check the key/value in your hashtable results ", () => {
      const hash1 = hashTable.hash("name");
      const hash2 = hashTable.hash("age");
      const hash3 = hashTable.hash("job");
      expect(hashTable.storage[hash1].head.value).toEqual({ name: "ghaidaa" });
      expect(hashTable.storage[hash2].head.value).toEqual({age: "24" });
      expect(hashTable.storage[hash3].head.value).toEqual({ job: "Full Stack Developer" });
      expect(hashTable.storage[hash3].head.value["job"]).toEqual("Full Stack Developer");
    });
    it("It Should be check the retrieving based on a key returns the value stored", () => {
      expect(hashTable.get("name")).toEqual("ghaidaa");
      expect(hashTable.get("age")).toEqual("24");
      expect(hashTable.get("job")).toEqual("Full Stack Developer");
    });
    it("It Should Successfully returns null for a key that does not exist in the hashtable", () => {
      expect(hashTable.get("test1")).toBeNull();
      expect(hashTable.get("test2")).toBeNull();
    });
    it("It Should handle a collision within the hashtable", () => {
      hashTable.add("lolo", "meme");
      const hash3 = hashTable.hash("job");
      expect(hashTable.storage[hash3].head.value).toEqual({
        job: "Full Stack Developer",
      });
    });
    it("It Should retrieve a value from a bucket within the hashtable that has a collision", () => {
      hashTable.add("lolo", "meme");
      expect(hashTable.get("job")).toEqual("Full Stack Developer");
      expect(hashTable.get("lolo")).toEqual("meme");
    });
    it("It should hash a key to an in-range value", () => {
      const hashINRange = hashTable.hash("name");
      expect(hashINRange).toBeLessThan(hashTable.storage.length);
      expect(hashINRange).toBeLessThan(5000);
    });
    it("It Should test the hash if it contains a key or not", () => {
      expect(hashTable.contains("name")).toBeTruthy();
      expect(hashTable.contains("test")).toBe(false);
    });
  });