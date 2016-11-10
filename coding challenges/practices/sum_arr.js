// left = 0, right = total sum
// at first iterate through the arr once => total sum
// go through the arr one more time,
// subtract the el from right
// add it to left
// if left === right, return the index
//
// time/space = O(N)

const sumArr = (arr) => {
  // time: O(n)
  // space: O(1)
  let left = 0;
  let right = arr.reduce((a, e) => a + e, 0);
  for (let i=0; i<arr.length; i++) {
    right -= arr[i];
    if (left === right) { return i; }
    left += arr[i];
  }
  return -1;
};

let arr = [-1, 3, -4, 5, 1, -6, 2, 1];
console.log(sumArr(arr));
