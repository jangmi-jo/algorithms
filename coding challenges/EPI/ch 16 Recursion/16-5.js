/*
generate strings of matched parens
given a number, return all possible matched parens

the base case would be when the number is 0, return empty string
in func, get the n-1 strings and add additional parens on them
and make a new set with them
I used Set to discard duplicated strings

Seems like there's another way to solve it faster.
*/

const matchedParens = (n) => {
  if (n === 0) {return [""];}
  const res = new Set();
  matchedParens(n-1).forEach((str) => {
    res.add(`(${str})`);
    res.add(`${str}()`);
    res.add(`()${str}`);
  });
  return res;
};

// console.log(matchedParens(3));

const anotherway = (left, right = left, res = [], str = "") => {
  // seems way better. No need to worry about duplicates
  if (left === 0 && right === 0) {
    res.push(str);
  }
  if (left < right) {
    anotherway(left, right - 1, res, str + ")");
  }
  if (left > 0) {
    anotherway(left - 1, right, res, str + "(");
  }
  return res;
};

console.log(anotherway(3));
