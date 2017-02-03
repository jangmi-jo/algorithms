/*
search a sorted array for first occurrence of k

given a sorted array and a key
return the index of first occurrence

we can use binary search but we want to find the first one
so, don't return when we found the k
if the middle el is bigger than or equal to k,
move the bound to the left
when the loop is over, check if the last found index's el is same as k
if it is, return the index if it's not, return -1
*/

const firstOccurrence = (arr, k) => {
  // time: O(logn), space: O(1)
  let i = 0;
  let j = arr.length;
  while (i < j) {
    let mid = Math.floor((i + j) / 2);
    if (k <= arr[mid]) {
      j = mid;
    } else {
      i = mid + 1;
    }
  }
  return arr[i] === k ? i : -1;
};

const e = [-14, -10, 2, 108, 108, 243, 285, 285, 285, 401];
console.log(firstOccurrence(e, 401));
