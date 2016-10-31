

const findNthDigit = (n) => {
  let i = 0;
  while (9 * (i+1) * Math.pow(10, i) < n) {
    i++;
  }
  for (let j=0; j<i; j++) {
    n -= 9 * (j+1) * Math.pow(10, j);
  }
  let num = Math.floor(n / (i+1)) - 1;
  let digit = n % i;
};

console.log(findNthDigit(11));
