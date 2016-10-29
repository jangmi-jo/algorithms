
const recursiveMul = (a, b, res = 0) => {
  // time, space: O(b) where b is smaller number
  if (a < b) {
    [a, b] = [b, a];
  }
  if (b === 0) { return res; }
  res += a;
  b--;
  return recursiveMul(a, b, res);
};


console.log(recursiveMul(10, 2));
