/*
spreadsheet encoding

given a string. convert that to integer
A => 1
D => 4
AA => 27
...

1) make a map A-Z => 1-26
2) for each character, get the number
3) multiply 26 ** (length - 1 - index)

*/

const map = new Map();
'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ').forEach((c, i) => {
  map.set(c, i+1);
});

const spreadsheet = (str) => {
  let res = 0;
  for (let i=0; i<str.length; i++) {
    res += map.get(str[i]) * Math.pow(26, str.length-1-i);
  }
  return res;
};

console.log(spreadsheet('A'));
console.log(spreadsheet('AA'));
console.log(spreadsheet('D'));
console.log(spreadsheet('ZZ'));
