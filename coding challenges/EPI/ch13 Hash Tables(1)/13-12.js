/*
compute all string decompositions

given a sentence and words(array)
find the substrings of the sentence which are the concatenation of all the words (in any order)

ex) amanaplanacanal, [can, apl, ana]
=> aplanacan so return 4
words are equal length and could be duplicated
each must appear once

build a rolling hash
=> convert the string to integer

a => 01
b => 02
c => 03...
z => 26


build a map with words
key as converted integer from the word value as count

get the same length from starting, calculate the integer from it
if it matches with any of the words,
store the index as started index
copy the map and remove the matched word from it
(decrement the count 1 and if it becomes 0, delete)
jump the length of word, match again
if it doesn't match, go back to the started index



*/

const charMap = new Map();
"abcdefghijklmnopqrstuvwxyz".split('').forEach((c, i) => {
  charMap.set(c, i+1);
});

// abc => 10203
const calculate = (str) => {
  let int = 0;
  for (let i=0; i<str.length; i++) {
    int += charMap.get(str[i]) * Math.pow(10, (str.length - 1 - i) * 2);
  }
  return int;
};

const buildMap = (words) => {
  const map = new Map();
  words.forEach((word) => {
    let int = calculate(word);
    map.set(int, (map.get(int) || 0) + 1);
  });
  return map;
};

const stringDecompositions = (sentence, words) => {
  // time: O(mn + k) where n is the length of sentence
  // m is the length of the words
  // k is the length of each word
  let length = words[0].length;
  let int = calculate(sentence.slice(0, length));
  const map = buildMap(words);
  for (let i=1; i<sentence.length - length; i++) {
    if (map.get(int) !== undefined) {
      let currentInt = int;
      let idx = i - 1;
      let tempMap = new Map(map);
      while (tempMap.get(currentInt)) {
        tempMap.set(currentInt, tempMap.get(currentInt) - 1);
        if (tempMap.get(currentInt) === 0) {
          tempMap.delete(currentInt);
        }
        if (tempMap.size === 0) {
          return i-1;
        }
        idx += length;
        currentInt = calculate(sentence.slice(idx, idx + length));
      }
    }
    int %= Math.pow(10, (length - 1) * 2);
    int *= 100;
    int += charMap.get(sentence[i + length - 1]);
  }
};

const sentence = "amanaplanacanal";
const words = ['can', 'apl', 'ana'];

console.log(stringDecompositions(sentence, words)); // 4
