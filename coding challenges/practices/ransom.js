const generateHash = (arr) => {
  let obj = {};
  arr.forEach((word) => {
    if (obj[word]) {
      obj[word] += 1;
    } else {
      obj[word] = 1;
    }
  });
  return obj;
};
// total O(n+m)
const ransomNote = (magazine, ransom) => {
  // O(n)
  let magazineHash = generateHash(magazine);
  // O(m)
  let ransomHash = generateHash(ransom);
  // O(m)
  return Object.keys(ransomHash).every((word) => {
    return magazineHash[word] && magazineHash[word] >= ransomHash[word];
  }) ? "Yes" : "No";
};

let magazine = "give me one grand today night".split(" ");
let ransom = "give one grand today".split(" ");
console.log(ransomNote(magazine, ransom));
