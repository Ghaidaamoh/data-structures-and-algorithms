'use strict';
function insertionSort(arr){
    
    for(let i=1;i<arr.length;i++){
        let j = i-1;
        let temp = arr[i];
        while(j>=0 & temp<arr[j]){
            arr[j+1]=arr[j];
            j = j-1;
        }
        arr[j+1]=temp
    }
    return(arr)
}

describe('Code challenge 26', () => {
    test('should sort an array ', () => {
        expect(insertionSort([20, 18, 12, 8, 5, -2])).toStrictEqual([-2, 5, 8, 12, 18, 20]);
        expect(insertionSort([5, 12, 7, 5, 5, 7])).toStrictEqual([5, 5, 5, 7, 7, 12]);
        expect(insertionSort([2, 3, 5, 7, 13, 11])).toStrictEqual([2, 3, 5, 7, 11, 13]);
    });
});
