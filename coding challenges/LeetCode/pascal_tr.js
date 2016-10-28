
const getRow = (n) => {
  // use formular
  let nfac = 1;
  let left = 1;
  for (let i=1; i<=n; i++) { nfac *= i; }
  let right = nfac;
  let res = [];
  for (let i=1; i<=n+1; i++) {
    res.push(nfac / (left * right));
    left *= i;
    right /= (n+1-i);
  }
  return res;
};

console.log(getRow(7));

//
// const getRow = (n) => {
//   let map = new Map();
//   map.set(0, [1]);
//   for (let i=1; i<=n; i++) {
//     let newArr = buildNextArr(Array.from(map.get(i-1)));
//     map.set(i, newArr);
//   }
//   return map.get(n);
// };
//
//
// const buildNextArr = (arr) => {
//   for (let i=arr.length - 1; i>0; i--) {
//     arr[i] += arr[i-1];
//   }
//   arr.push(1);
//   return arr;
// };
//
// console.log(getRow(4));
