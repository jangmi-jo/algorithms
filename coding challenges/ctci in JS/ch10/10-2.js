const letterMap = new Map();
'qwertyuioplkjhgfdsazxcvbnm'.split('').forEach((c, i) => {
  letterMap.set(c, i+1);
});

const groupAnagram = (arr) => {
  // sort arr with the score first and then sort again with length
  arr.sort((a, b) => getScore(a) - getScore(b));
  arr.sort((a, b) => a.length - b.length);
  return arr;
};

const getScore = (str) => {
  // give each character uniq score
  let score = 0;
  for (let i=0; i<str.length; i++) {
    score += letterMap.get(str[i]);
  }
  return score;
};
