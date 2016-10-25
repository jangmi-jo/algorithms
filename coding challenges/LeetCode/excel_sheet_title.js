const numbers = {};
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("").forEach((ch, i) => {
  numbers[i+1] = ch;
});


const convertToTitle = (n) => {
  let res = [];
  while (n > 26) {
    if (n % 26 === 0) {
      res.push(numbers[26]);
      n = n - 26;
    } else {
      res.push(numbers[n % 26]);
    }
    n = Math.floor(n / 26);
  }
  res.push(numbers[n]);
  res.reverse();
  return res.join("");
};

convertToTitle(52);
