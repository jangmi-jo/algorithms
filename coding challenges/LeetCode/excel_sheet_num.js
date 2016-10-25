const letters = {};
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("").forEach((ch, i) => {
  letters[ch] = i+1;
});


const titleToNumber = (s) => {
  // convert from last letter
  let num = 0;
  for (let i=s.length - 1; i>=0; i--) {
    num += letters[s[i]] * (Math.pow(26, s.length - 1 - i));
  }
  return num;
};

console.log(titleToNumber('AAA'));
