// idea: keep i, j start/end idxs and local sum
// move j when sum is smaller than s
// move i when sum exceeds s and record the min length j - i

const minSubArrayLen = (arr, s) => {
  // time: O(n) where n is the length of arr
  // space: O(1)
  let i = 0, j = 0, sum = arr[0];
  let len = undefined;
  while (i < arr.length || j < arr.length) {
    if (sum < s && j < arr.length) {
      j++;
      sum += arr[j];
    } else {
      if (sum >= s) {
        let newL = j - i + 1;
        len = !len || len > newL ? newL : len;
      }
      sum -= arr[i];
      i++;
    }
  }
  return len ? len : 0;
};

console.log(minSubArrayLen([1, 4, 4], 4));
