/*
buy and sell a stock at most twice
given an array, find the maxProfit

=> partials
[ 0,  0,  2, 0,  3, 0,  6,  0,  2]
[ 0,  0,  2, 0,  3, 0,  6,  5,  7]
[12, 11, 13, 9, 12, 8, 14, 13, 15]
=> 10
*/


const buySellStock = (arr) => {
  // time: O(n) where n is the length of arr
  // space: O(1)
  //             [min, max]
  let maxProfit = [0, 0];
  let tempProfit = 0;
  let min = arr[0];
  for (let i=1; i<arr.length; i++) {
    if (arr[i] < min) { min = arr[i]; }
    if (arr[i] - min > maxProfit[0]) {
      maxProfit = arr[i] - min;
    } else {
      min = arr[i];
    }
  }
  return maxProfit;
};
