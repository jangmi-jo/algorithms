/*
compute all possible strings for phone keypad

given string of numbers, return all possible words for that

1) build the number-chars map
2) base case: when string length is 0, return ['']
3) get the result from string.slice(1)
4) for each result, add the string[0]'s chars and return

we could do this without recursion like,
go through the string, add all the chars in result
for next number, get the current result and add the chars to those and add them to result
*/

const numToChars = new Map();
['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'].forEach((el, i) => {
  numToChars.set(`${i+2}`, el.split(''));
});

const computeAllPossible = (str) => {
  if (str.length === 0) { return ['']; }
  let prev = computeAllPossible(str.slice(1));
  let res = [];
  numToChars.get(str[0]).forEach((c) => {
    prev.forEach((r) => {
      res.push(c + r);
    });
  });
  return res;
};

console.log(computeAllPossible('25'));
