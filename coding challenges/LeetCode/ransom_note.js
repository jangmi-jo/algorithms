const canConstruct = (a, b) => {
  // build a hash with magazine letters as key
  // and their count as value
  // time: O(n + m) where n is a's length
  // m is b's length
  let magazineMap = {};
  for (let i=0; i<b.length; i++) {
    if (magazineMap[b[i]] === undefined) {
      magazineMap[b[i]] = 0;
    }
    magazineMap[b[i]]++;
  }
  for (let i=0; i<a.length; i++) {
    if (magazineMap[a[i]] === undefined) {
      return false;
    } else {
      magazineMap[a[i]]--;
      if (magazineMap[a[i]] < 0) { return false; }
    }
  }
  return true;
};

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'bb'));
console.log(canConstruct('aa', 'aab'));
