/*
generate palindromic decompositions
given a string, return all palindromic decompositions

020445

[[0]]
[[0, 2]]
[[0, 2, 0], [020]]
[[0, 2, 0, 4], [020, 4]]
[[0, 2, 0, 4, 4], [020, 4, 4], [0, 2, 0, 44], [020, 44]]
[[0, 2, 0, 4, 4, 5], [020, 4, 4, 5], [0, 2, 0, 44, 5], [020, 44, 5]]
...
get the previous one
in current result, add all prev's results + current digit
see if the current digit makes any palindrom
if it does, add all prev's results + the current palindrom
but we need to get the start of the palindrom's index..
not a good way to do this.
Need to think more.
*/

const palindromicDec = (str) => {
  if (str.length <= 1) {
    return [[str]];
  }
  const first = str[0];
  const prev = palindromicDec(str.slice(1));

};

// const partition = (str) => {
//   const map = new Map();
//   for (let i=0; i<str.length; i++) {
//     map.set(i, str[i]);
//   }
//   let i = 0;
//   while (i < str.length - 1) {
//     let current = map.get(i);
//     let p = i-1;
//     while (p > 0 && !map.get(p)) {p--;}
//     let n = i+1;
//     while (n < str.length - 1 && !map.get(n)) {n++;}
//     if (current === undefined) {
//       i++;
//     } else if (map.get(p) === map.get(n)) {
//       map.set(i, map.get(p) + current + map.get(n));
//       map.delete(p);
//       map.delete(n);
//     } else if (current === map.get(p)) {
//       map.set(i, map.get(p) + current);
//       map.delete(p);
//     } else if (current === map.get(n)) {
//       map.set(i, current + map.get(n));
//       map.delete(n);
//     } else {
//       i++;
//     }
//   }
//   return Array.from(map.values());
// };
//
// const palindromicDec = (str) => {
//   return partition(str);
// };

console.log(palindromicDec("0204451881"));
