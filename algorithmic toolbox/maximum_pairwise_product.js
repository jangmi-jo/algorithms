
const maximumPairwiseProduct = (n, arr) => {
  // first idea
  // sort modifies the original array
  // sorting function takes two arguments and returns
  // negative, zero, positive
  // arr.sort((a, b) => a - b);
  // sort takes O(nlogn) so time complexity is O(nlogn)
  // return arr[n - 1] * arr[n - 2];

  // second idea
  let maxes = [0, 0];
  // go through the arr once. O(n)
  arr.forEach((el) => {
    if (el > maxes[0]) {
      maxes[0] = el;
      maxes.sort((a, b) => a - b);
      // sorting takes O(1) since we have always 2 elements
      // compares once
    }
  });
  return maxes.reduce((a, e) => a * e);
};

let arr = '4 6 2 6 1'.split(" ").map(Number);
let n = 10;

console.log(maximumPairwiseProduct(n, arr));
