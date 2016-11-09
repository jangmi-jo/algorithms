let hash = {};
// wow I was so close!!
// we can still use this kind of approach
// only if the problem treats [1, 5], [5, 1] as different cases

const changes = (n, coins) => {
  if (n === 0) { return [[]]; }
  let ways = [];
  coins.forEach((coin) => {
    if (n - coin >= 0) {
      if (hash[n - coin] === undefined) {
        hash[n - coin] = changes(n - coin, coins).map((change) => {
          return change.concat(coin);
        });
      }
      ways = ways.concat(hash[n - coin]);
    }
  });
  return ways;
};

console.log(changes(30, [25, 10, 5, 1]));
// console.log(changes(10, [2, 5, 3, 6]));
