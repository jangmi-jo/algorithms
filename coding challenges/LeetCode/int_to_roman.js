const romanHash = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I'
};

const intToRoman = (n) => {
  let res = "";
  let keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  while (n > 0) {
    keys = keys.filter((k) => k <= n);
    for (let i=0; i<keys.length; i++) {
      if (n >= keys[i]) {
        n -= keys[i];
        res += romanHash[keys[i]];
        break;
      }
    }
  }
  return res;
};

console.log(intToRoman(3999));
