
const combinationSum = (candidates, t) => {
  if (t === 0) { return [[]]; }
  let res = [];
  candidates.forEach((coin, i) => {
    if (t - coin >= 0) {
      let change = combinationSum(candidates.slice(i), t - coin);
      change.forEach((c) => {
        res.push(c.concat(coin));
      });
    }
  });
  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
