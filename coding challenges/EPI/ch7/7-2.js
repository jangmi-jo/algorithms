/*
base conversion
given string, base1, base2
base1 is the base of the string
base2 is the target base of the result

check if it's negative!
keep a digit map for higher bases
1) convert string to decimal with base1
2) convert the decimal with base2
*/

const strToNum = new Map();
const numToStr = new Map();
'0 1 2 3 4 5 6 7 8 9 A B C D E F'.split(' ').forEach((n, i) => {
  numToStr.set(i, n);
  strToNum.set(n, i);
});

const baseConversion = (s, b1, b2) => {
  let negative;
  if (s[0] === '-') {
    negative = true;
    s = s.slice(1);
  }
  let num = 0;
  for (let i=0; i<s.length; i++) {
    num += strToNum.get(s[i]) * Math.pow(b1, s.length-1-i);
  }
  s = "";
  while (num > 0) {
    s = numToStr.get(num % b2) + s;
    num = Math.floor(num / b2);
  }
  return negative ? '-' + s : s;
};


console.log(baseConversion('615', 7, 13));
