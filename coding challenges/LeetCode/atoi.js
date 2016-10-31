
const myAtoi = (s) => {
  let nums = {};
  for (let i=0; i<10; i++) { nums[i] = i; }
  let res = 0;
  for (let i=0; i<s.length; i++) {
    if (nums[s[i]] !== undefined) {
      res += nums[s[i]];
    } else if (s[i] !== ' ') {
      res += s[i].charCodeAt(0);
    }
  }
  return res;
};

console.log(myAtoi('abc'));
