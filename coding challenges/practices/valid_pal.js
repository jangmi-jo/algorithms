// ignore the cases, white space or whatever other chars
// iterate through the chars length - 1 => i
// compare the str[i] === str[length -1 - i]
//
// time: O(n), space: O(n)
// same to use the regex time/space

// keep i, j pointers
// start from both end
// move the pointer to the next one until it is a char
// Red rum, sir, is murder
// first do the upper/lower
// space will be O(1)

const validPal = (s) => {
  // time: O(n), space: O(1)
  s = s.toLowerCase();
  s = s.replace(/[^a-z]/g, '');
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) { return false; }
    i++;
    j--;
  }
  return true;
};

console.log(validPal('Red rum, sir, is murder'));
