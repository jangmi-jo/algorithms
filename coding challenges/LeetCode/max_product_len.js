const maxProduct = (arr) => {
  arr = arr.map((w) => preprocessWord(w));
  arr.sort((a, b) => a.length - b.length);
  let max = 0;
  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) {
      if (isUnique(arr[i], arr[j])) {
        let newMax = arr[i].length * arr[j].length;
        if (newMax > max) { max = newMax; }
      }
    }
  }
  return max;
};

const isUnique = (a, b) => {
  for (let i=0; i<a.length; i++) {
    if (b.indexOf(a[i]) !== -1) { return false; }
  }
  return true;
};

const preprocessWord = (word) => {
  word = word.split('');
  word.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  return word.join('');
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
