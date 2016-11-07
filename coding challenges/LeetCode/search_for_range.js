// build bsearch
// find target
// if not found, return [-1, -1]
// once found, check left
// check right

// [5, 7, 7, 8, 8, 10]
// increment the checking index multiple by 2
// once found, check from the last checked index
// [8, 8, 8, 8, 8, 8]

const searchRange = (arr, t) => {
  // time: O(n) where n is the length of arr
  // all elements are target
  let s = 0;
  let e = arr.length;
  while (s < e) {
    let mid = Math.floor((s + e) / 2);
    if (arr[mid] === t) {
      let left = mid;
      let right = mid;
      while (arr[left-1] === t) {
        left--;
      }
      while (arr[right+1] === t) {
        right++;
      }
      return [left, right];
    } else if (arr[mid] > t){
      e = mid;
    } else {
      s = mid + 1;
    }
  }
  return [-1, -1];
};
