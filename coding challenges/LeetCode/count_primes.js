
const isPrime = (n) => {
  if (n <= 1) { return false; }
  if (n === 2) { return true; }

  for (let i=2; i<=Math.sqrt(n); i++) {
    if (n % i === 0) { return false; }
  }
  return true;
};

const countPrimes = (n) => {
  // time: O(n*sqrt(n))
  let count = 0;
  for (let i=2; i<=n; i++) {
    if (isPrime(i)) { count++; }
  }
  return count;
};
