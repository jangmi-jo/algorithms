/*
buy and sell a stock at most twice
given an array, find the maxProfit

Since we can only buy second time after sell the before one,
1) go through the arr and make the left array
2) go through the arr from back and make the right
3) we got the single buy-sell max as right[0]
4) go through the left, right and add two for each time(for day i, left[i] + right[i+1])
5) that represent max profit can be made with buy-sell twice
*/

const buySellStock = (arr) => {
  const left = [];
  const right = [];
  let leftM = arr[0], rightM = arr[arr.length - 1];
  let leftP = 0, rightP = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] < leftM) { leftM = arr[i]; }
    if (arr[i] - leftM > leftP) {
      leftP = arr[i] - leftM;
    }
    left.push(leftP);
    let j = arr.length - 1 - i;
    if (arr[j] > rightM) { rightM = arr[j]; }
    if (rightM - arr[j] > rightP) {
      rightP = rightM - arr[j];
    }
    right.unshift(rightP);
  }
  let maxProfit = right[0];
  for (let i=0; i<arr.length-1; i++) {
    if (left[i] + right[i+1] > maxProfit) {
      maxProfit = left[i] + right[i+1];
    }
  }
  return maxProfit;
};

console.log(buySellStock([12, 11, 13, 9, 12, 8, 14, 13, 15]));
