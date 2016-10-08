
const balanced = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (['{', '[', '('].includes(str[i])) {
      stack.push(str[i]);
    } else {
      let last = stack[stack.length - 1];
      switch (str[i]) {
        case '}':
          if (last !== '{') {
            return false;
          } else {
            stack.pop();
          }
          break;
        case ']':
          if (last !== '[') {
            return false;
          } else {
            stack.pop();
          }
          break;
        case ')':
          if (last !== '(') {
            return false;
          } else {
            stack.pop();
          }
          break;
      }
    }
  }
  return stack.length ? false : true;
};

console.log(balanced('{{}('));
