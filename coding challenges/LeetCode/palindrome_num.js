
const palindrome = (n) => {
  if (n < 0) { return false; }
  let c = 1;
  while (n / 10 > c) {
    c *= 10;
  }
  while (n > 0) {
    let first = Math.floor(n / c);
    let last = n % 10;
    if (first !== last) {
      return false;
    }
    n = Math.floor(n % c / 10);
    c /= 100;
  }
  return true;
};

console.log(palindrome(123121));
