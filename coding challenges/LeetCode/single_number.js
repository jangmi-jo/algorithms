// XOR operates n ^ n = 0
// if we go through all the numbers in arr,
// if that all has same num twice, those nums will be crossed out

const singleNumber = (nums) => {
  // time: O(n), space: O(1)
  return nums.reduce((a, e) => a ^ e);
};

console.log(singleNumber([3, 4, 5, 4, 3]));
