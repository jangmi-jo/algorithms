/*
compute the integer sqrt

given a nonnegative integer
return the largest integer whose sqrt is less than or equal to the given number

usual bsearch
*/


const integerSqrt = (n) => {
  // time: O(logn), space: O(1)
  if (n <= 0) { return false; }
  let i = 1;
  let j = n + 1;
  while (i < j) {
    let mid = Math.floor((i + j) / 2);
    if (Math.pow(mid, 2) === n) {
      return mid;
    } else if (Math.pow(mid, 2) > n) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return i;
};

console.log(integerSqrt(16)); // 4
console.log(integerSqrt(300)); // 17
