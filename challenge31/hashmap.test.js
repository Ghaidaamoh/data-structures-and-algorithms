'use strict';

function repeatedWord(str) {
    
    const arr = str.split(' '); 
    let array = [];
    for (let i = 0; i < arr.length; i++) {
      let found = arr[i];
      const Reapeted = array.includes(found);
  
      if (Reapeted) return found;
      array.push(found);
    }
    return "no repeated !";
}


const p1 = "Once upon a time, there was a brave princess who...";
const p2 = "Once upon a time";
const ghaidaa = "believe";

describe("Repeated Word Test", () => {
  it("finds the first word to occur more than once in a string", () => {
    expect(repeatedWord(p1)).toBe("a");
  });
  it("finds the no repeated words", () => {
    expect(repeatedWord(p2)).toBe("no repeated !");
  });
});