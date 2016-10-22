// const addDigits = (n) => {
// // naive solution
//   let digits = n.toString().split('').map(Number);
//   let sum = digits.reduce((a, e) => a + e);
//   return sum >= 10 ? addDigits(sum) : sum;
// };


const addDigits = (n) => {
  // Learning point : try to find pattern!!
  // start with 1 go through the numbers
  // to find pattern
  return n % 9 === 0 ? 9 : n % 9;
};
//
// for (let i=1; i<30; i++) {
//   console.log(addDigits(i));
//   console.log(i % 9);
// }
