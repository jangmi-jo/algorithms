
const missingNumber = (arr) => {
  // time: O(n), space: O(1)
  let res = arr.reduce((a, b) => a ^ b);
  for (let i=0; i<arr.length + 1; i++) {
    res ^= i;
  }
  return res;
};

console.log(missingNumber([0, 1, 3]));
