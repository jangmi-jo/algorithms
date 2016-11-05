const searchInsert = (arr, t) => {
  // time: O(n)
  // feels like we can probably do this in O(logn) with bsearch
  for (let i=0; i<arr.length; i++) {
    if (arr[i] >= t) {
      return i;
    }
  }
  return arr.length;
};
