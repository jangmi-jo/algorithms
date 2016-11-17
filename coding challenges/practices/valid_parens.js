// keep a stack
// push a chr if it's opening
// if it is closing one, check it the top of the stack
// is it's pair. if it is, we pop it
// if it is not, return false

let map = {};
map[")"] = "(";
map["]"] = "[";
map["}"] = "{";


const validParens = (str) => {
  // time: O(n), space: O(n)
  let stack = [];
  for (let i=0; i<str.length; i++) {
    if (['(', '[', '{'].includes(str[i])) {
      stack.push(str[i]);
    } else {
      if (map[str[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
