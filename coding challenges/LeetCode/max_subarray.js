const maxSubArray = (arr) => {
  // time: O(n)
  // space: O(1)
  let max = arr[0];
  let local = arr[0];
  for (let i=1; i<arr.length; i++) {
    // drop if the last sum is 0
    if (local < 0) {
      local = 0;
    }
    // add current element
    local += arr[i];
    // if that's bigger than max, update max
    // by doing this we can get the each negative element bigger than max like [-2, -1, -2]
    if (local > max) {
      max = local;
    }
  }
  return max ? max : 0;
};
