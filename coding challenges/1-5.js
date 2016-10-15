// one away
// input : str1, str2
// insert, remove, replace
// check if one away from each other(or same)
// 'pale', 'ple'
// 'pale', 'bake'

const oneAway = (str1, str2) => {
  // time: O(n)
  // space: O(n)
  let operation = false;
  if (str1.length === str2.length) {
    for (let i=0; i<str1.length; i++) {
      if (str1[i] !== str2[i]) {
        if (operation) {
          return false;
        } else {
          operation = true;
        }
      }
    }
  } else {
    if (str1.length > str2.length) {
      let temp = str1;
      str1 = str2;
      str2 = temp;
    }
    if (str2.length - str1.length > 1) { return false; }
    for (let i=0; i<str1.length; i++) {
      if (str1[i] !== str2[i]) {
        if (operation) {
          return false;
        } else {
          str2 = str2.slice(0, i) + str2.slice(i+1);
          operation = true;
        }
      }
    }
  }
  return true;
};

console.log(oneAway('pale', 'bake'));
