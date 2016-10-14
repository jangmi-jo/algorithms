// characters are unique
// input string
// output boolean
// don't use additional data structure

const isUnique = (str) => {
  // time : O(n**2), space : O(n**2)
  for (let i=0; i<str.length; i++) {
    if (str.slice(i+1).indexOf(str[i]) !== -1) {
      return false;
    }
  }
  return true;
};

let arr = ['', 'a', 'asd', 'aa', 'agredsa', 'bkbeihsl', 'qwertasdf'];


arr.forEach((s) => {
  console.log(isUnique(s));
});
