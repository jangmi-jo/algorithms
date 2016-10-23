
const moveZeroes = (nums) => {
  // genius! 
  let idx = 0;
  for (let i=0; i<nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      idx++;
    }
  }
  for (let i=idx; i<nums.length; i++) {
    nums[i] = 0;
  }
  // naive solution
  // let zeroIdx = nums.length - 1;
  // let current = 0;
  // while (current !== zeroIdx) {
  //   if (nums[current] === 0) {
  //     nums.splice(current, 1);
  //     nums.push(0);
  //     zeroIdx--;
  //   } else {
  //     current++;
  //   }
  // }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
