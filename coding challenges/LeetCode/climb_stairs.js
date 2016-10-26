let hash = {};

const climbStairs = (n) => {
  if (n === 0) { return 1; }
  if (n < 0) { return 0; }
  let ways = 0;
  if (hash[n-1] === undefined) {
    hash[n-1] = climbStairs(n-1);
  }
  if (hash[n-2] === undefined) {
    hash[n-2] = climbStairs(n-2);
  }
  ways += hash[n-1];
  ways += hash[n-2];
  return ways;
};

const climbIter = (n) => {
  // exactly like fibonacci
  // first, make math algorithm and do it recursively
  // Then we see the pattern
  // time: O(n), space: O(n)
  let ways = [0, 1, 2];
  while (ways.length <= n) {
    ways.push(ways[ways.length - 1] + ways[ways.length - 2]);
  }
  return ways[n];
};

console.log(climbIter(5));
