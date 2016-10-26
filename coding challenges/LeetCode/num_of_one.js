const hammingWeight = (n) => {
  // time: O(logn), space: O(1)
  let count = 0;
  while (n > 0) {
    if (n % 2) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  return count;
};

console.log(hammingWeight(11));
