const reverse = (n) => {
  // if it's negative, make it positive
  // make negative flag to true
  // make arr of digits
  // get each digit with % and / by 10
  // time: O(d) where d is the number of digits in n
  // space: O(d)
  let negative = n < 0;
  n = n < 0 ? -n : n;
  let digits = [];
  while (n > 0) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }
  let res = 0;
  for (let i=0; i<digits.length; i++) {
    res += digits[i] * Math.pow(10, digits.length - 1 - i);
  }
  return negative ? -res : res;
};
