let denominations = [10, 5, 1];

const changeMoney = (n) => {
  let i = 0, count = 0;
  // time : O(n)
  // space : O(1)
  while (n !== 0) {
    if (n < denominations[i]) {
      i++;
    } else {
      n -= denominations[i];
      count++;
    }
  }
  return count;
};

//
// [2, 28, 13, 7, 100].forEach((m) => {
//   console.log(changeMoney(m));
// });

const maximizeValue = (arr) => {
  // O(nlogn) for sorting, O(n) for while loop.
  // time: O(nlogn)
  // space: O(1)
  let maxWeight = arr.shift()[1];
  let value = 0;
  // sort the arr by the value
  arr.sort((a, b) => b[0]/b[1] - a[0]/a[1]);
  while (maxWeight) {
    let currentItem = arr.shift();
    if (currentItem[1] <= maxWeight) {
      maxWeight -= currentItem[1];
      value += currentItem[0];
    } else {
      value += currentItem[0] / currentItem[1] * maxWeight;
      maxWeight = 0;
    }
  }
  return value;
};
//
// let t1 = `3 50
// 60 20
// 100 50
// 120 30`.split("\n").map((line) => line.split(" ").map(Number));

// console.log(maximizeValue(t1));
