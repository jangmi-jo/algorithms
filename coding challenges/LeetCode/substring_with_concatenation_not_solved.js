let charHash = new Map();
'abcdefghijklmnopqrstuvwxyz'.split('').forEach((c, i) => {
  charHash.set(c, i+1);
});

const buildWordHash = (words) => {
  let wordHash = new Map();
  words.forEach((word) => {
    let val = 0;
    for (let i=0; i<word.length; i++) {
      val += charHash.get(word[i]) * Math.pow(10, (word.length - 1 - i) * 2);
    }
    wordHash.set(val, true);
  });
  return wordHash;
};

const findSubstring = (s, words) => {
  // this could result integer overflow
  let wordHash = buildWordHash(words);
  let totalLen = words.length * words[0].length;
  let wordLen = words[0].length;
  let hashedValue = 0;
  let res = [];
  for (let i=0; i<s.length; i++) {
    if (i < totalLen - 1) {
      hashedValue += charHash.get(s[i]) * Math.pow(10, (totalLen - 1 - i) * 2);
    } else {
      // check if it is the word
      // kind of stuck..
      // how do we check the duplicates..
      // update hashed value
      hashedValue %= Math.pow(10, (totalLen - 1) * 2);
      hashedValue *= Math.pow(10, 2);
    }
  }
};

const checkWithHash = (n, map) => {

};

console.log(findSubstring('barfoothefoobarman', ["foo", "bar"]));
