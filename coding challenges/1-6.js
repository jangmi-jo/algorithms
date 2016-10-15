// String compression

// input : 'aabcccccaaa'
// output: 'a2b1c5a3'

const stringCompression = (str) => {
  // time: O(n)
  // space: O(n)
  let count = 1, res = [], current = str[0];
  for (let i=1; i<=str.length; i++) {
    if (str[i] === current) {
      count++;
    } else {
      res.push(current);
      res.push(count);
      current = str[i];
      count = 1;
    }
  }
  let result = res.join("");
  return result.length >= str.length ? str : result;
};

console.log(stringCompression('abcde'));
