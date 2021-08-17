'use strict';
let binaryEle = (arr, num) => {
    let upperEle = arr.length - 1;
    let lowerEle = 0;
    let result = -1
    while (lowerEle <= upperEle) {
        let middleEle = (upperEle + lowerEle) / 2;
        let item = parseInt(middleEle)
        if (middleEle > item) {
            middleEle = item + 1
        }
        if (lowerEle === upperEle) {
            lowerEle++
        }
        if (arr[middleEle] === num) {
            result = middleEle
            lowerEle = upperEle + 1
        } else if (arr[middleEle] < num) {
            lowerEle = middleEle + 1
        } else if (arr[middleEle] > num) {
            upperEle = middleEle - 1
        }
    }
    // console.log(result)
    return (result)
}
// binaryEle([4, 8, 15, 16, 23, 42], 15)
// binaryEle([-131, -82, 0, 27, 42, 68, 179], 42)
// binaryEle([11, 22, 33, 44, 55, 66, 77], 90)
// binaryEle([1, 2, 3, 5, 6, 7], 4)

describe('Testing challenge 3', () => {
    test(' return the index of the array’s element that is equal to the value of the search key', () => {
        expect(binaryEle([4, 8, 15, 16, 23, 42], 15)).toStrictEqual(2);
        expect(binaryEle([-131, -82, 0, 27, 42, 68, 179], 42)).toStrictEqual(4);
        expect(binaryEle([11, 22, 33, 44, 55, 66, 77], 90)).toStrictEqual(-1);
        expect(binaryEle([1, 2, 3, 5, 6, 7], 4)).toStrictEqual(-1);
    });
});