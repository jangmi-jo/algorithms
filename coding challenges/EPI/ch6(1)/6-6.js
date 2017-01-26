/* buy and sell a stock once
given an arr
returns the maximum profit => integer

[12, 11, 13, 9, 12, 8, 14, 13, 15]
keep maxProfit
keep a min
whenever find new min, record maxProfit if we made more

at last, we should check if we found maxProfit
*/

const buySellStock = (arr) => {
  // time: O(n) where n is the length of arr
  // space: O(1)
  let maxProfit = 0;
  let min = arr[0];
  for (let i=1; i<arr.length; i++) {
    if (arr[i] < min) { min = arr[i]; }
    if (arr[i] - min > maxProfit) {
      maxProfit = arr[i] - min;
    }
  }
  return maxProfit;
};

console.log(buySellStock([310, 315, 275, 295, 260, 270, 290, 230, 255, 250]));
