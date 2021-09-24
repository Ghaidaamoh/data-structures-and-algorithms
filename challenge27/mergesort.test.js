'use strict'
const Stack = require('./Stack')
let myResultsStack = new Stack()

function Mergesort(arr) {

  let a = arr.length
  let left
  let right
  if (a > 1) {
    let mid = a / 2
    left = arr.slice(0, mid)
    right = arr.slice(mid)
    Mergesort(left)
    Mergesort(right)

  }

  if (left && right) {

    Merge(left, right, arr)
    myResultsStack.push(arr)

  }


}

function Merge(left, right, arr) {

  let i = 0
  let j = 0
  let k = 0

  while ((i < left.length) && (j < right.length)) {
    if (left[i] <= right[j]) {
      arr[k] = left[i]
      i = i + 1
    }
    else {
      arr[k] = right[j]
      j = j + 1
    }

    k = k + 1
  }


  if (i == left.length) {
    while (j < right.length) {
      arr[k] = right[j]
      k++
      j++
    }

  }
  else {
    while (i < left.length) {
      arr[k] = left[i]
      k++
      i++
    }
  }

}

function mainMerge(array) {
  Mergesort(array)
  return (myResultsStack.pop())
}

describe('Challenge 27', () => {
  test('mergeSort', () => {
    expect(mainMerge([31, 12, 13, 7, 1997, 3, 11, 9])).toStrictEqual([3, 7, 9, 11, 12, 13, 31, 1997]);
  });

  test('mergeSort', () => {
    expect(mainMerge([8,4,23,42,16,15])).toStrictEqual([4,8,15,16,23,42]);
  });

  test('mergeSort', () => {
    expect(mainMerge([20,18,12,8,5,-2])).toStrictEqual([-2,5,8,12,18,20]);
  });


});


