/*
team photo day
given two arrays return boolean whether
the arrays can be arranged back and forth
first row's each elements are all smaller than second row's elements

sort both of them and check a and b, b and a
*/

const check = (front, back) => {
  // time: O(n)
  for (let i=0; i<front.length; i++) {
    if (front[i] >= back[i]) {
      return false;
    }
  }
  return true;
};

const teamPhoto = (a, b) => {
  // time: O(nlogn) where n is the length of a
  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);
  return check(a, b) || check(b, a);
};

const a = [1, 2, 3];
const b = [2, 3, 4];

console.log(teamPhoto(a, b));
