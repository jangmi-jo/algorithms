const longestValidParentheses = (s) => {
  // go through the s
  // keep max, stack
  // push s[i] into stack
  let max = 0, stack = [];
  let local = 0;
  for (let i=s.indexOf('('); i<=s.length; i++) {
    if (s[i] === ')' && stack[stack.length - 1] === '(') {
      local += 2;
      stack.pop();
    } else {
      max = max < local ? local : max;
      if (stack.length !== 0) {
        local = 0;
      }
      stack.push(s[i]);
    }
  }
  return max;
};

console.log(longestValidParentheses("()(())"));
