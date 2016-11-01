const countNumbersWithUniqueDigits = (n) => {
  // each range, we know how many unique numbers
  // starting digit can't be 0 then we will get all the unique nums
  // in that 10 ** (n-1) <= num < 10 ** n
  // add the previous one
  // time: O(n)
  // space: O(n)
  let map = new Map();
  map.set(0, 1);
  let i = 1;
  while (i <= n) {
    let count = 1;
    for (let j=0; j<i; j++) {
      if (j === 0) {
        count *= 9;
      } else {
        count *= (10 - j);
      }
    }
    map.set(i, count + map.get(i-1));
    i++;
  }
  return map.get(n);
};


console.log(countNumbersWithUniqueDigits(3));
