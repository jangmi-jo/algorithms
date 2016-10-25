const romanHash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const romanToInt = (s) => {
  let res = 0;
  for (let i=0; i<s.length; i++) {
    if (i === s.length - 1 || romanHash[s[i]] >= romanHash[s[i+1]]) {
      res += romanHash[s[i]];
    } else {
      res -= romanHash[s[i]];
    }
  }
  return res;
};

console.log(romanToInt('IV'));
