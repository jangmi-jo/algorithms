/*
convert from Roman to Decimal
given Roman num string, return integer

1) keep a map key as roman string, val as decimal
2) keep a res start from 0
3) go through the string
4) see the value, see the next one's value
5) if the next one is bigger, it's the subtraction
*/

const map = new Map();
[['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]].forEach((el) => {
  map.set(el[0], el[1]);
});

const romanToDec = (str) => {
  // time: O(n) where n is length of string
  // space: O(1)
  let res = 0;
  let i=0;
  while (i < str.length) {
    let a = map.get(str[i]);
    let b = map.get(str[i+1]);
    if (a < b) {
      res += b - a;
      i += 2;
    } else {
      res += a;
      i++;
    }
  }
  return res;
};


['LIX', 'LVIIII', 'XXXXXIIIIIIIII'].forEach((n) => {
  console.log(romanToDec(n));
});
