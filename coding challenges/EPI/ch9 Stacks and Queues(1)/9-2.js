/*
RPN Calculator

given a string, calculate it

1) keep a stack
2) when we see a number, push it to stack
3) not number, pop two nums and do the operation and push it back
4) return the result
*/

const operation = new Map();

operation.set('+', (a, b) => a + b);
operation.set('-', (a, b) => a - b);
operation.set('*', (a, b) => a * b);
operation.set('/', (a, b) => a / b);


const rpnCalculator = (str) => {
  // time: O(n) where n is the length of str
  // space: O(1) since in any circumstance, we have maximum 2 nums in stack
  const nums = [];
  str = str.split(',');
  for (let i=0; i<str.length; i++) {
    if (operation.has(str[i])) {
      if (nums.length < 2) { return false; }
      let a = nums.pop();
      let b = nums.pop();
      nums.push(operation.get(str[i])(a, b));
    } else {
      if (isNaN(Number(str[i]))) { return false; }
      nums.push(Number(str[i]));
    }
  }
  if (nums.length > 1) { return false; }
  return nums[0];
};

console.log(rpnCalculator('1,1,+,-2,*'));
