// idea: arr => [numbers]
// sum of the left/right => does it include the pivot?
// go through the arr, keep left = 0,right = total sum
// as we go, add/subtract the el accordingly
// compare if left === right
// return the first one

// [1, 2, 3, 4, 0, 6]
// left = 6
// right = 6
const pivotIndex = (arr) => {
  // time: O(n) where n is the length of arr
  // space: O(1)
  if (arr.length === 0) { return -1; }
  let left = 0, right = arr.reduce((a, e) => a + e, 0);
  for (let i=0; i<arr.length; i++) {
    right -= arr[i];
    if (left === right) { return i; }
    left += arr[i];
  }
  return -1;
};
