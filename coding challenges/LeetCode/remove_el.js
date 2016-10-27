const removeElement = (arr, val) => {
  // similar to move zero to the end
  // time: O(n)
  // space: O(1)
  let count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[count] = arr[i];
      count++;
    }
  }
  return count;
};
