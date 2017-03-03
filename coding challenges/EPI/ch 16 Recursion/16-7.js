/*
generate palindromic decompositions
given a string, return all palindromic decompositions

first we get all palindromes from the string
020, 44, 5, 1881
if any of it is longer than 1,
recurse that
0, 2, 0 could be one
4, 4 could be another
1, 88, 1 could be, and it can be recursed one more time in here

*/

const partition = (str) => {
  const map = new Map();
  for (let i=0; i<str.length; i++) {
    map.set(i, str[i]);
  }
  let i = 0;
  while (i < str.length - 1) {
    let current = map.get(i);
    let p = i-1;
    while (p > 0 && !map.get(p)) {p--;}
    let n = i+1;
    while (n < str.length - 1 && !map.get(n)) {n++;}
    if (current === undefined) {
      i++;
    } else if (map.get(p) === map.get(n)) {
      map.set(i, map.get(p) + current + map.get(n));
      map.delete(p);
      map.delete(n);
    } else if (current === map.get(p)) {
      map.set(i, map.get(p) + current);
      map.delete(p);
    } else if (current === map.get(n)) {
      map.set(i, current + map.get(n));
      map.delete(n);
    } else {
      i++;
    }
  }
  return Array.from(map.values());
};

const palindromicDec = (str) => {
  return partition(str);
};

console.log(palindromicDec("0204451881"));
