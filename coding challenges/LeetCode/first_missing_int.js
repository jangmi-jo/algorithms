// XOR if it's positive
// XOR from 1 through max
// keep max

const firstMissingPositive = (arr) => {
  let max = 0;
  let res = 0;
  arr.forEach((n) => {
    if (n > 0) { res ^= n; }
    max = max < n ? n : max;
  });
  for (let i=1; i<=max; i++) {
    res ^= i;
  }
  return res === 0 ? max+1 : res;
};

console.log(firstMissingPositive([3,4,-1,1]));
