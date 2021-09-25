'use strict'
function quickSort(arr, left = 0, right = arr.length - 1) {
    let a;
    if (arr.length > 1) {
        a = partition(arr, left, right);
        if (left < a - 1) {
            quickSort(arr, left, a - 1);
        }
        if (a < right) {
            quickSort(arr, a, right);
        }
    }
    return arr;
}
function partition(arr, left, right) {
    let pivot = arr[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

describe('Testing Code challenge 28', () => {
    test('It should return an array sorted with quick sort', () => {
        expect(quickSort([8, 4, 23, 42, 16, 15])).toStrictEqual([4, 8, 15, 16, 23, 42]);
        expect(quickSort([20, 18, 12, 8, 5, -2])).toStrictEqual([-2, 5, 8, 12, 18, 20]);
        expect(quickSort([5, 12, 7, 5, 5, 7])).toStrictEqual([5, 5, 5, 7, 7, 12]);
        expect(quickSort([2, 3, 5, 7, 13, 11])).toStrictEqual([2, 3, 5, 7, 11, 13]);
    });
});