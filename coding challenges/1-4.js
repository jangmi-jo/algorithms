// palindrome permutation
// input "Tact Coa"
// output boolean

const palindromePermutation = (str) => {
  // time: O(n)
  // space: O(n)
  str = str.toLowerCase();
  let hash = {};
  for (let i=0; i<str.length; i++) {
    if (str[i] === " ") continue;
    if (hash[str[i]] === undefined) { hash[str[i]] = 0; }
    hash[str[i]] += 1;
  }
  let oddCountKeys = Object.keys(hash).filter((key) => hash[key] % 2);
  return oddCountKeys.length <= 1;
};

console.log(palindromePermutation("nodeden"));
