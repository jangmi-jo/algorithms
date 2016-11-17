// find the target
//  -> once we find it, search for the range from that index
// -> if it's not there, return [-1, -1]

// search the target bsearch
//  [5, 7, 7, 8, 8, 10], t = 8

const searchRange = (arr, t) => {
  // time: O(logn), space: O(1)
  let i = 0, j = arr.length;
  while (i < j) {
    let m = Math.floor((i + j) / 2);
    if (arr[m] === t) {
      let s = m, e = m;
      let n = 0;
      while (arr[s] === t) {
        s = m - Math.pow(2, n);
        n++;
      }
      while (arr[s] !== t) { s++; }
      n = 0;
      while (arr[e] === t) {
        e = m + Math.pow(2, n);
        n++;
      }
      while (arr[e] !== t) { e--; }
      return [s, e];
    } else if (arr[m] < t) {
      i = m + 1;
    } else {
      j = m;
    }
  }
  return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 9));
