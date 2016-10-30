const isValid = (s) => {
  // time, space: O(n)
  let stack = [];
  let hash = {};
  hash[')'] = '(';
  hash[']'] = '[';
  hash['}'] = '{';
  for (let i=0; i<s.length; i++) {
    if (['(', '[', '{'].includes(s[i])) {
      stack.push(s[i]);
    } else if (hash[s[i]]) {
      if (hash[s[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
