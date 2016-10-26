const maxProfit = (prices) => {
  // set min, max
  // draw table and try with example
  // see the pattern
  // time: O(n), space: O(1)
  if (prices.length === 0) { return 0; }
  let max = prices[0];
  let min = prices[0];
  let prof = max - min;
  for (let i=1; i<prices.length; i++) {
    if (prices[i] - min > prof) {
      prof = prices[i] - min;
      max = prices[i];
    } else {
      if (prices[i] < min) {
        min = prices[i];
      }
    }
  }
  return prof;
  // time: O(n**2), space: O(1)
  // for (let i=0; i<prices.length; i++) {
  //   for (let j=i+1; j<prices.length; j++) {
  //     if (prices[j] - prices[i] > max) {
  //       max = prices[j] - prices[i];
  //     }
  //   }
  // }
};

maxProfit([7, 6, 4, 3, 1]);
