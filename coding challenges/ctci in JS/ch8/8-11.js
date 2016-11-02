// try store actual ways in set
const coins = [25, 10, 5, 1];
let coinHash = new Map();

const numOfWays = (n) => {
  // If we do this, it counts all the possible duplicates too
  // ex) for 7, [1, 1, 5], [1, 5, 1], [5, 1, 1] are counted
  if (n === 0) { return 1; }
  if (n < 0) { return 0; }
  let ways = 0;
  coins.forEach((c) => {
    if (n - c < 0) { return; }
    if (coinHash.get(n - c) === undefined) {
      coinHash.set(n - c, numOfWays(n - c));
    }
    ways += coinHash.get(n - c);
  });
  return ways;
};

console.log(numOfWays(10));
