// given two strings
// find the first occurence of the str1 from str2
// if it has a in b, return the index
// if it doesn't, return -1
// required to be better than O(ab)

// rolling hash
// we will use hashing function!
// string comparison takes length of the string
// integer comparison take O(1)
// look up the string with integer


// cat => 30120
let charHash = new Map();
'abcdefghijklmnopqrstuvwxyz'.split('').forEach((c, i) => {
  charHash.set(c, i+1);
});

const hashing = (s) => {
  // return unique integer
  let res = 0;
  for (let i=0; i<s.length; i++) {
    res += charHash.get(s[i]) * Math.pow(10, (s.length - 1 - i) * 2);
  }
  return res;
};

// [1, 11, 5] => 11105
// 110500

const firstOccur = (a, b) => {
  // time: O(a + b)
  // space: O(1)
  let aLen = a.length;
  let target = hashing(a);
  let current;
  for (let i=0; i<b.length; i++) {
    if (i === 0) {
      current = hashing(b.slice(0, aLen));
    } else {
      current %= Math.pow(10, (aLen - 1) * 2);
      current *= Math.pow(10, 2);
      current += charHash.get(b[i+aLen - 1]);
    }
    if (current === target) { return i; }
  }
  return -1;
};

console.log(firstOccur('cat', 'akeiqfsjnfilshcaiehkvp'));
