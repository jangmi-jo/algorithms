// idea: keep a count of non-duplicated item
// use it as index
// iterate through the arr
// when the el is not same as the prev one,
// make arr[count] = el and increment count

// [1, 1, 2]
// first normal version
// const removeDuplicates = (arr) => {
//   let c = 0;
//   for (let i=0; i<arr.length; i++) {
//     if (arr[i] !== arr[i+1]) {
//       arr[c] = arr[i];
//       c++;
//     }
//   }
//   return c;
// };


// duplicate is allowed twice at most
const removeDuplicates = (arr) => {
  let c = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] !== arr[i+1] || arr[i] !== arr[i+2]) {
      arr[c] = arr[i];
      c++;
    }
  }
  return c;
};
