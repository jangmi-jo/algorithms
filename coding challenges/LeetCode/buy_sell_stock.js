const maxProfit = (arr) => {
  // go through the arr
  // keep min, max
  // if min is undefined, set current to min
  // when max is undefined
  // if current - min > max - min, we update max
  // else update total and set min, max undefined
  // time: O(n)
  // space: O(1)
  let total = 0;
  let min, max;
  for (let i=0; i<arr.length; i++) {
    if (min === undefined || (max === undefined && arr[i] < min)) {
      min = arr[i];
    } else if (max === undefined || arr[i] - min > max - min) {
      max = arr[i];
    } else {
      total += max - min;
      min = arr[i];
      max = undefined;
    }
  }
  if (max - min > 0) { total += max - min; }
  return total;
};

console.log(maxProfit([3, 2, 9, 1, 1]));

// [3, 2, 9, 1, 1]
