// 1 * 2 * 3 * 4 * 5 * 6 * ...  * n


// before n
// want to count 5, 10, 15, 20, 25...
const trailingZeroes = (n) => {
  // time: O(logn)
  // space: O(1)
  let count = 0;
  while (n >= 5) {
    count += Math.floor(n / 5);
    if (Math.floor(n / 5) >= 5) {
      n = Math.floor(n / 5);
    } else {
      n %= 5;
    }
  }
  return count;
};
