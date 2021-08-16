'use strict';
let insertShiftArray = (arr, item) => {
    let saverarr = arr
    let atMiddle = saverarr.length / 2
    let integernum = parseInt(atMiddle)
    if (integernum < atMiddle) {
        atMiddle = parseInt(atMiddle) + 1
    }
 
    let shiftedarr = []
    for (let i = 0; i < arr.length + 1; i++) {
      if (i < atMiddle) {
        shiftedarr.push(arr[i])
      } else if (i == atMiddle) {
        shiftedarr.push(item)
      } else if (i > atMiddle) {
        shiftedarr.push(arr[i - 1])
      }
    }
    return shiftedarr
  }
  
  describe('Testing Code challenge 2', () => {
    test('It should return an array with the new value added at the middle index.', () => {
      expect(insertShiftArray([5, 3, 2, 10, 1, 6, 4, 30, 88], 7)).toStrictEqual([5, 6, 4, 10, 0, 7, 6, 4, 10, 78]);
      expect(insertShiftArray([2, 4, 6, -8], 5)).toStrictEqual([2, 4, 5, 6, -8]);
      expect(insertShiftArray([42, 8, 15, 23, 42], 16)).toStrictEqual([42, 8, 15, 16, 23, 42]);
    });
  });