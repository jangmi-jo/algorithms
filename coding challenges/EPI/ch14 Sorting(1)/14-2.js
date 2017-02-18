/*
merge two sorted arrays
given two sorted arrays of integers
first array has enough empty entries at the end
common problem!

iterate from both end
fill first array from the end with bigger element

*/

const mergeTwo = (a, b) => {
  // assume that a has length of both
  // time: O(a), space: O(1)
  let aIdx = a.length - 1;
  let bIdx = b.length - 1;
  for (let i=a.length + b.length - 1; i >= 0; i--) {
    if (a[aIdx] > b[bIdx]) {
      a[i] = a[aIdx];
      aIdx--;
    } else {
      a[i] = b[bIdx];
      bIdx--;
    }
  }
  return a;
};

const a = [5, 13, 17];
const b = [3, 7, 11, 19];
console.log(mergeTwo(a, b));
