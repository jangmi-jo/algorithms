

const longestCommonPrefix = (arr) => {
  // making prefix trie would definitely better
  // time: O(max(arrLength*log(arrLength), shortest word))
  arr.sort((a, b) => a.length - b.length);
  let res = "";
  let idx = 0;
  while (idx < arr[0].length) {
    let chr = arr[0][idx];
    for (let i=1; i<arr.length; i++) {
      if (arr[i][idx] !== chr) {
        return res;
      }
    }
    res += chr;
    idx++;
  }
  return res;
};
