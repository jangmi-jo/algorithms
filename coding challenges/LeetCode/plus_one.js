const plusOne = (arr) => {
  // time: O(n)
  // space: O(1)
  let carry;
  arr[arr.length - 1]++;
  for (let i=arr.length - 1; i>=0; i--) {
    if (carry) {
      arr[i] += 1;
      carry = undefined;
    }
    if (arr[i] > 9) {
      carry = true;
      arr[i] %= 10;
    }
  }
  if (carry) {
    arr.unshift(1);
  }
  return arr;
};


plusOne([1, 2, 9]);
