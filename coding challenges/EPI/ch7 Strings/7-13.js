/*
find the first occurrence in string

given string a and b, find first occurrence

1) go through the string, map all characters with unique number
2) make the target str to unique number
3) go through the str again and whenever move, calculate the value

*/

const buildMap = (str) => {
  // time, space: O(n)
  const map = new Map();
  let l = 0;
  for (let i=0; i<str.length; i++) {
    if (map.get(str[i])) { continue; }
    map.set(str[i], ++l);
  }
  let digits = 0;
  while (l > 0) {
    digits++;
    l = Math.floor(l / 10);
  }
  return [map, digits];
};

const calculate = (map, str, d) => {
  // time: O(n), space: O(1)
  let res = 0;
  let len = str.length;
  for (let i=0; i<len; i++) {
    if (!map.get(str[i])) { return false; }
    res += map.get(str[i]) * Math.pow(10, (len-i-1)*d);
  }
  return res;
};

const firstOccurrence = (a, b) => {
  // time: O(a+b)
  // space: O(a) to build map
  let idx = 0;
  const [map, d] = buildMap(a);
  let target = calculate(map, b, d);
  if (!target) { return false; }
  let current = calculate(map, a.slice(0, b.length), d);
  for (let i=0; i<=a.length-b.length; i++) {
    if (target === current) { return i; }
    current %= Math.pow(10, d*(b.length-1));
    current *= Math.pow(10, d);
    current += map.get(a[i+b.length]);
  }
  return false;
};

console.log(firstOccurrence('aaaabbbbasdf', 'asdf'));
