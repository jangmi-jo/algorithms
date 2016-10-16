
// check permutation, see if one is permutation of other
// input : 2 strings
// output : boolean

// str1 length = n
// str2 length = m

// time : O(n+m)
// space : O(n+m)
const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) { return false; }
  let hash = {};
  // O(n)
  for (let i=0; i<str1.length; i++) {
    if (hash[str1[i]] === undefined) { hash[str1[i]] = 0; }
    hash[str1[i]] += 1;
  }
  // O(m)
  for (let j=0; j<str2.length; j++) {
    hash[str2[j]] -= 1;
  }
  // O(n+m)
  return Object.keys(hash).every((key) => hash[key] === 0);
};

console.log(isPermutation('asdf', 'qwer'));
