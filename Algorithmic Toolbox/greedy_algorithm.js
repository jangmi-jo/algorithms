const inputHelper = (input) => {
  return input.split("\n").map((line) => line.split(" ").map(Number));
}

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
// let t1 = inputHelper(`3 50
// 60 20
// 100 50
// 120 30`);
//
// console.log(maximizeValue(t1));

const maximizeRevenue = (a, b) => {
  // time: O(nlogn) for sorting
  // space: O(1)
  a.sort((i, j) => i - j);
  b.sort((i, j) => i - j);
  let maxRevenue = 0;
  for (let i=0; i<a.length; i++) {
    maxRevenue += a[i] * b[i];
  }
  return maxRevenue;
};

// let t2 = inputHelper(`1 3 -5
// -2 4 1`);
//
// console.log(maximizeRevenue(...t2));

const collectSignature = (arr) => {
  // for convenience, I made the count in the segments arr
  // time: O(nlogn)
  // space: O(n) for the worst case
  let countSegments = [0];
  arr.shift();
  arr.sort((a, b) => a[1] - b[1]);
  while (arr.length) {
    let currentSeg = arr.shift();
    arr = arr.filter((seg) => seg[0] > currentSeg[1] || seg[1] < currentSeg[1]);
    countSegments[0]++;
    countSegments.push(currentSeg[1]);
  }
  return countSegments;
};
//
// let t3 = inputHelper(`3
// 1 3
// 2 5
// 3 6`);
//
// console.log(collectSignature(t3));

const maximizePrize = (n) => {

};

console.log(maximizePrize(6));
