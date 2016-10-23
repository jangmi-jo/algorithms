// I tried from 1 to 12 and
// see when can I know for sure about winning

const canWinNim = (n) => {
  // time: O(1), space: O(1)
  return n % 4;
};

console.log(canWinNim(4));
