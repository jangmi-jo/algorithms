/*
is an anonymous letter constructible

given two strings (one is a letter, other one is a magazine)
check if the letter is constructible with the characters from magazine

build a map with key as char, value as count with letter
go through the magazine and when a char is in map, subtract one
when the count is 0, remove it from map
at the end, see if the map is empty
*/

const constructible = (letter, magazine) => {
  // time: O(letter + magazine), space: O(letter)
  const map = new Map();
  for (let i=0; i<letter.length; i++) {
    map.set(letter[i], (map.get(letter[i]) || 0) + 1);
  }
  for (let i=0; i<magazine.length; i++) {
    let c = map.get(magazine[i]);
    if (c) { map.set(magazine[i], c - 1); }
    if (c === 1) { map.delete(magazine[i]); }
  }
  return map.size === 0;
};
