let hash = {};

const changes = (n, coins) => {
  if (n === 0) { return [[]]; }
  let ways = [];
  coins.forEach((coin) => {
    if (n - coin >= 0) {
      if (hash[n - coin] === undefined) {
        hash[n - coin] = changes(n - coin, coins).map((change) => {
          console.log(coin);
          return change.concat(coin);
        });
      }
      ways = ways.concat(hash[n - coin]);
    }
  });
  console.log(hash);
  return ways;
};


console.log(changes(4, [3, 2, 1]));
// console.log(changes(10, [2, 5, 3, 6]));
