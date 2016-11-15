// given list of words, columns, rows
//
// keep a result
// make a empty array for each row
// add one word if we add that, it doesn't violate the columns limit
// (has words length + space)
// once it violates the limit, join it and add it to result


// [Do, Run], 9, 2
const listOfWords = (words, c, r) => {
  // time, space: O(r * c)
  if (words.length === 0) { return []; }
  let res = [];
  let idx = 0;
  for (let i=0; i<r; i++) {
    let row = [];
    let col = 0;
    let spaces = 0;
    while (col + words[idx].length + spaces <= c) {
      row.push(words[idx]);
      col += words[idx].length;
      idx = (idx + 1) % words.length;
      spaces = row.length;
    }
    res.push(row.join(' '));
  }
  return res;
};

console.log(listOfWords(["Do", "Run"], 9, 2));
