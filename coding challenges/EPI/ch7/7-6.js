/*
reverse all words in string
given a string of words seperated by single white space

1) reverse the string
2) go through from 0, when find white space, reverse the word

=> above should take time: O(n), space: O(1)
but we can't do that in JS since string is immutable and no reverse method
the only way we can reverse string, split and reverse and join
but if we are going to use split, we should do better than that
(we could implement reverse helper func with recursion, but it still takes O(n) additional space with #slice and recursion stack)
*/

const reverseAllWords = (str) => {
  // time: O(n), space: O(n)
  return str.split(' ').reverse().join(' ');
};

let a = 'Dan loves Jangmi';

console.log(reverseAllWords(a));
