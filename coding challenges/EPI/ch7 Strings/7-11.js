/*
snake string
given
Hello World! => e lHloWrdlo!

 e       l
H l o W r d
   l   o   !

1) find the pattern
2) which is, the first line's indices are 1, 5, 9...
3) second line are 0, 2, 4, 6, ...
4) third line are 3, 7, 11...

*/

const snakeString = (str) => {
  // we could do this with making three arrays
  // but anyway, it will take time and space: O(n)
  let res = [];
  let i = 1;
  while (i < str.length) {
    res.push(str[i]);
    i += 4;
  }
  i = 0;
  while (i < str.length) {
    res.push(str[i]);
    i += 2;
  }
  i = 3;
  while (i < str.length) {
    res.push(str[i]);
    i += 4;
  }
  return res.join('');
};

console.log(snakeString('Hello World!'));
