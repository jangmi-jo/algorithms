// string rotation
// isSubString => checks if one str is a sub str of another
// given 2 strings,
// check if s2 is a rotation of s1 using only one call
// to isSubString

// waterbottle => erbottlewat

const isSubString = (s1, s2) => {
  console.log('isSubString called');
  if (s1.indexOf(s2) !== -1 || s2.indexOf(s1) !== -1) {
    return true;
  } else {
    return false;
  }
};

const stringRotation = (s1, s2) => {
  // time: O(n)
  if (s1.length !== s2.length) { return false; }
  s1 += s1;
  return isSubString(s1, s2);
  // time : O(n**2)
  // for (let i=0; i< s1.length; i++) {
  //   s1 = s1.slice(1) + s1[0];
  //   if (s1 === s2) {
  //     return true;
  //   }
  // }
  // return false;
};

console.log(stringRotation('waterbottle', 'erbottlewat'));
