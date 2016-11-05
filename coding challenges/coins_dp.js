// to get the distinct ways of making change,
// for each time, we assume we picked a coin (only if the coin is bigger than the target)
// subtract the coin from target and call the function again
// we add the coin into its return value (which should be an array of results)
// and return the the current results
// Also, for distinct ways,
// we drop the coins that is bigger than the current picking coin value
// so we don't have to worry about the cases
// [1, 1, 5], [1, 5, 1], [5, 1, 1]
// since those are all different picking but that's not distinct way
// because we are dropping the coins and the target value,
// it runs super fast!

const makeChange = (coins, t) => {
  if (t === 0) { return [[]]; }
  let res = [];
  coins.forEach((coin, i) => {
    if (t - coin >= 0) {
      let change = makeChange(coins.slice(i), t - coin);
      change.forEach((c) => {
        res.push(c.concat(coin));
      });
    }
  });
  return res;
};

console.log(makeChange([50, 25, 10, 5, 1], 100));
