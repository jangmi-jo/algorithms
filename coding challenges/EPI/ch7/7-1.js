/*
Interconvert string <=> integer

to_s :
1) check if it's negative
2) keep a digit map
3) divide n by 10, modulo by 10 and put each digit in result
4) add negative sign if it is

to_i :
1) check if it's negative and remove negative sign
2) for each digit, get the number from map
3) multiply the digit with 10 ** index
4) add it to result

*/

const strToNum = new Map();

for (let i=0; i<10; i++) {
  strToNum.set(`${i}`, i);
}

const toString = (n) => {
  let negative;
  let res = "";
  if (n < 0) {
    negative = true;
    n *= -1;
  }

  while (n > 0) {
    // type conversion in JS works this way
    res = n % 10 + res;
    n = Math.floor(n / 10);
  }
  return negative ? '-' + res : res;
};

const toInt = (s) => {
  let negative;
  let res = 0;
  if (s[0] === '-') {
    s = s.slice(1);
    negative = true;
  }

  for (let i=0; i<s.length; i++) {
    res += strToNum.get(s[i]) * Math.pow(10, s.length-1-i);
  }
  return negative ? res * (-1) : res;
};
