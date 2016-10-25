// Triple steps
// given n stairs a child can run up 1, 2, or 3 steps
// how many possible ways to go up the stairs


// for optimizing,
// make memo to store paths when we first call with certain n
let memo = {};

const tripleSteps = (n) => {
  // choices => n - 1, n - 2, n - 3
  // n is the left stairs, when n === 0, return 1
  if (n === 0) { return 1; }
  if (n < 0) { return 0; }
  let paths = 0;
  [1, 2, 3].forEach((i) => {
    if (memo[n-i]) {
      paths += memo[n-i];
    } else {
      let newMemo = tripleSteps(n - i);
      memo[n - i] = newMemo;
      paths += newMemo;
    }
  });
  return paths;
};

console.log(tripleSteps(20));
