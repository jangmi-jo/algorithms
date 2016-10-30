const wordPattern = (ptrn, str) => {
  // time: O(n), space: O(n)
  // Feels like we can do better though..
  let arr = str.split(' ');
  if (arr.length !== ptrn.length) { return false; }
  let patternHash = new Map();
  let values = new Set();
  let res = [];
  for (let i=0; i<ptrn.length; i++) {
    if (patternHash.get(ptrn[i]) === undefined) {
      if (values.has(arr[i])) { return false; }
      patternHash.set(ptrn[i], arr[i]);
      values.add(arr[i]);
      res.push(arr[i]);
    } else if (patternHash.get(ptrn[i]) !== arr[i]) {
      return false;
    } else {
      res.push(patternHash.get(ptrn[i]));
    }
  }
  return res.join(' ') === str;
};

console.log(wordPattern('abba', 'dog dog dog dog'));
