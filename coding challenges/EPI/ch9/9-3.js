/*
check well formed parens

1) keep open, close set and map
2) go through the str
3) if current chr is open, push it to stack
4) if it's close, compare the stack's peak and current
5) if they match, we can remove it since they are valid
6) if not, there's no way the str is valid
7) after all, if there's remaining things in stack,
which means there were more opening parens, that's not valid
*/

const open = new Set('(', '{', '[');
const close = new Map();
close.set(')', '(');
close.set('}', '{');
close.set(']', '[');


const isWellFormed = (str) => {
  // time, space: O(n) where n is the length of str
  if (str.length % 2) { return false; }
  let stack = [];
  for (let i=0; i<str.length; i++) {
    if (open.has(str[i])) {
      stack.push(str[i]);
    } else {
      if (stack[stack.length - 1] === close.get(str[i])) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
