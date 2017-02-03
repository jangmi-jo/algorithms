/*
test for palindromic permutations
given a string, check if the string can make a palindrome

we can use a Set
go through the string
add char in set if it doesn't have the char
remove char in set if it already has the char
at the end, check the size of the set
if it is 0 or 1, it's possible to make palindrome

*/

const isPossible = (str) => {
  // time: O(n) where n is the length of str
  // space: O(n) when all the characters are distinct
  const set = new Set();
  for (let i=0; i<str.length; i++) {
    if (set.has(str[i])) {
      set.delete(str[i]);
    } else {
      set.add(str[i]);
    }
  }
  return set.size === 0 || set.size === 1;
};
