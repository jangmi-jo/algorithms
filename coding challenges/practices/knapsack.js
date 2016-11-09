// exactly same as coin problem
// keep discarding the things you processed
// assume we select that item
// if it meets the limit, returns the sum of the items

// how can we deal with similar problem,
// pick the most value with less than or equal to the limit
// since in here, we only return when the limit hits exactly 0


// this works for the exact sum to limit
const knapsack = (weights, values, limit, sum) => {
  if (limit === 0) { return sum; }
  // if the limit <= 0, return the sum
  let max = 0;
  for (let i=0; i<weights.length; i++) {
    if (limit - weights[i] >= 0) {
      // if the limit - weight[i] < 0,
      // get the sum and subtract the weight
      // and see if that's bigger than max
      let localSum = knapsack(weights.slice(i+1), values.slice(i+1), limit - weights[i], sum + values[i]);
      // if (limit - weights[i] < 0) {
      //   localSum -= weights[i];
      // }
      max = max < localSum ? localSum : max;
    }
  }
  return max;
};

console.log(knapsack([1, 5, 2, 4], [15, 10, 9, 25], 8, 0));
