/*
search a cyclically sorted distinct array
return a smallest element in the given array

basically, search for an element which is smaller than the one before
do that with binary search
when the array is not rotated, there's no el like above since the smallest one is at the first
so return 0 if it's not found

*/

const search = (arr) => {
  if (arr.length === 0) { return; }
  // time: O(logn), space: O(1)
  let i = 0;
  let j = arr.length;
  while (i < j) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] < arr[mid - 1]) {
      return mid;
    } else if (arr[0] < arr[mid]) {
      i = mid + 1;
    } else {
      j = mid;
    }
  }
  return 0;
};

const e = [203, 220, 234, 279, 368, 378, 478, 550, 631, 103];

console.log(search(e));
