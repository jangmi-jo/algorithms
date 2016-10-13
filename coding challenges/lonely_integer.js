// Can use XOR operator

const lonelyInteger = (a) => {
  // space O(n)
  let hash = {};
  // time O(n)
  a.forEach((n) => {
    if (hash[n]) {
      delete hash[n];
    } else {
      hash[n] = true;
    }
  });
  return Object.keys(hash)[0];
};

console.log(lonelyInteger('1 1 2'.split(" ").map(Number)));
