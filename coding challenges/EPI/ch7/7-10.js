/*
Compute all valid IP addresses
given a string of numbers. return all possible IP addresses

I thought we could use recursion but since we know the valid address needs 4 groups of nums
Just use 3 nested loops would be fine

*/

const isValid = (str, s, e) => {
  let num = e ? str.slice(s, e) : str.slice(s);
  if (num === '' ||
      Number(num) < 0 ||
      Number(num) > 255) {
    return false;
  } else {
    return num;
  }
};

const allValidIPs = (str) => {
  // time: O(1) since no matter what, this will run 3 ** 3 = 9 times (each for loop will take 3)
  const res = [];
  for (let a=0; a<3; a++) {
    let first = isValid(str, 0, a+1);
    if (!first) { continue; }
    for (let b=a+1; b<a+4; b++) {
      let second = isValid(str, a+1, b+1);
      if (!second) { continue; }
      for (let c=b+1; c<b+4; c++) {
        let third = isValid(str, b+1, c+1);
        if (!third) { continue; }
        let fourth = isValid(str, c+1);
        if (!fourth) { continue; }
        res.push([first, second, third, fourth].join('.'));
      }
    }
  }
  return res;
};

console.log(allValidIPs('19216811'));
