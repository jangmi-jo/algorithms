/*
test the collatz conjecture

-collatz conjecture
take any natural number.
if it's odd, triple it and add one
if it's even, halve it
no matter what number it begins with, it eventually become 1

given the task of checking collatz conjecture for the first billion int
write a program for the first n positive ints

keep n+1 booleans in an array, [1] and [2] are true
start from 3, calculate it
when it reaches at any point true, everything in line becomes true
resume the next number

*/

const collatz = (n) => {
  const arr = new Array(n+1);
  arr[1] = true;
  arr[2] = true;
  for (let i=3; i<=n; i++) {
    let tempSet = new Set();
    let int = i;
    while (!arr[int]) {
      if (tempSet.has(int)) {
        return false;
      }
      tempSet.add(int);
      if (int % 2) {
        int = int * 3 + 1;
      } else {
        int /= 2;
      }
    }
    tempSet.forEach((el) => {
      arr[el] = true;
    });
  }
  return true;
};

console.log(collatz(5));
