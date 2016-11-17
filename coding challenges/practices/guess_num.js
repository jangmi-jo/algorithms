// make AI guessing function!
// given a API guess(num) => returns [-1, 0, 1]

const guessAI = (n) => {
  // O(logn)
  let i = 1, j = n + 1;
  while (true) {
    let m = Math.floor((i + j) / 2);
    let currentG = guess(m);
    if (currentG === 0) {
      return m;
    } else if (currentG === -1) {
      j = m;
    } else {
      i = m + 1;
    }
  }
};
