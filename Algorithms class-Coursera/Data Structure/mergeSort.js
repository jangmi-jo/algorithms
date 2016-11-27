const mergeSort = (arr, comparator = (a, b) => a - b) => {
  // time: O(nlogn)
  // space: O(n)
  if (arr.length <= 1) { return arr; }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid, arr.length), comparator);
  return merge(left, right, comparator);
};

const merge = (a, b, comparator) => {
  let res = [];
  while (a.length && b.length) {
    if (comparator(a[0], b[0]) < 0) {
      res.push(a.shift());
    } else {
      res.push(b.shift());
    }
  }
  return res.concat(a, b);
};
