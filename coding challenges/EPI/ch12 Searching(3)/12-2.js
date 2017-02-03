/*
search a sorted array for entry equal to its index

given sorted array of distinct integers
return an index that the el and index is same
(if many, just one of them)

this should still work with normal binary search
just a bit difference, it doesn't have target

*/

const solution = (arr) => {
  // time: O(logn), space: O(1)
  let i = 0;
  let j = arr.length;
  while (i < j) {
    let mid = Math.floor((i + j) / 2);
    if (mid === arr[mid]) {
      return mid;
    } else if (mid < arr[mid]) {
      i = mid + 1;
    } else {
      j = mid;
    }
  }
  return -1;
};

const e = [-2, 0, 2, 3, 6, 7, 9];
const t = [1, 2, 3, 4, 5, 7, 11, 12, 13];

console.log(solution(t));
