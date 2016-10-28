const getHint = (secret, guess) => {
  // time: O(n) where n is the length of string
  // space: O(n)
  let exact = 0, match = 0;
  let hash = new Map();
  for (let i=0; i<secret.length; i++) {
    hash.set(secret[i], (hash.get(secret[i]) || 0) + 1);
  }

  for (let i=0; i<guess.length; i++) {
    if (hash.get(guess[i]) >= 1) {
      hash.set(guess[i], hash.get(guess[i]) - 1);
      match++;
    }
  }

  for (let i=0; i<guess.length; i++) {
    if (secret[i] === guess[i]) {
      exact++;
      match--;
    }
  }
  return `${exact}A${match}B`;
};

console.log(getHint('1807', '7810'));
