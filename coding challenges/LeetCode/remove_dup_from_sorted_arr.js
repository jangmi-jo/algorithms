const removeDuplicates = (arr) => {
  // same as move zeroes to the end
  // time: O(n)
  // space: O(1)
  let count = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] !== arr[i-1]) {
      arr[count] = arr[i];
      count++;
    }
  }
  return count;
};
