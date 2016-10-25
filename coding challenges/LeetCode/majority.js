const majorityElement = (nums) => {
  // make count hash
  // time: O(n)
  // slightly more optimized version
  let hash = {};
  for (let i=0; i<nums.length; i++) {
    hash[nums[i]] = (hash[nums[i]] || 0) + 1;
    if (hash[nums[i]] > nums.length / 2) {
      return nums[i];
    }
  }
  //
  // let hash = {};
  // nums.forEach((n) => {
  //   hash[n] = (hash[n] || 0) + 1;
  // });
  // let res = [];
  // Object.keys(hash).forEach((k) => {
  //   if (hash[k] > nums.length / 2) {
  //     res.push(Number(k));
  //   }
  // });
  // return res[0];
};

console.log(majorityElement([1]));
