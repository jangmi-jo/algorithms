const isHappy = (n) => {
  // keep doing the process until we found visited number
  // or reaches to 1
  let hash = {};
  hash[n] = true;
  while (true) {
    let digits = n.toString().split('');
    digits = digits.map((i) => Math.pow(Number(i), 2));
    n = digits.reduce((a, e) => a + e);
    if (n === 1) {
      return true;
    } else if (hash[n]) {
      return false;
    }
    hash[n] = true;
  }
};

console.log(isHappy(0));
