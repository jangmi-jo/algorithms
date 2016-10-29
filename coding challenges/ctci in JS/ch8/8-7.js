const permutationWithoutDup = (s) => {
  // time: O(n!) where n is length of s
  if (s.length <= 1) { return [s]; }
  let res = new Set();
  for (let i=0; i<s.length; i++) {
    let chr = s[i];
    let prev = permutationWithoutDup(s.slice(0, i) + s.slice(i+1));
    prev.forEach((p) => {
      res.add(p + chr);
      res.add(chr + p);
    });
  }
  return res;
};

console.log(permutationWithoutDup('abc'));
