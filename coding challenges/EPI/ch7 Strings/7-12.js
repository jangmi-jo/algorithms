/*
Run length encoding/decoding

encoding
1) need two pointers
2) set both pointer at the start
3) move one pointer forward if the next char is same as current
4) record the result when next char is not same
5) move both pointers to the next

decoding
1) go through the str
2) set count to 0
3) when current char is number, multiply 10 to count and add it to count
4) if it's not number, record the result and set count 0

both need time O(n), additional space O(length of result)
*/
const encode = (str) => {
  let res = "";
  let i = 0;
  for (let j=0; j<str.length; j++) {
    if (str[j] === str[j+1]) {
      continue;
    } else {
      res += `${j-i+1}${str[i]}`;
      i = j+1;
    }
  }
  return res;
};


const decode = (str) => {
  let count = 0;
  let res = "";
  for (let i=0; i<str.length; i++) {
    if (str[i].match(/\d/)) {
      count = count * 10 + Number(str[i]);
    } else {
      res += str[i].repeat(count);
      count = 0;
    }
  }
  return res;
};
