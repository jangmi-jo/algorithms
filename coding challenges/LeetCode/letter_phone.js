const numHash = new Map();
numHash.set('2', 'abc'.split(''));
numHash.set('3', 'def'.split(''));
numHash.set('4', 'ghi'.split(''));
numHash.set('5', 'jkl'.split(''));
numHash.set('6', 'mno'.split(''));
numHash.set('7', 'pqrs'.split(''));
numHash.set('8', 'tuv'.split(''));
numHash.set('9', 'wxyz'.split(''));

const letterCombinations = (digits) => {
  // recursive and very expensive process
  if (digits.length === 1) { return numHash.get(digits); } else if (digits.length === 0) {
    return [];
  }
  let res = [];
  let first = numHash.get(digits[0]);
  let prev = letterCombinations(digits.slice(1));
  prev.forEach((a) => {
    first.forEach((b) => {
      res.push(b.concat(a));
    });
  });
  return res;
};

console.log(letterCombinations('2'));
