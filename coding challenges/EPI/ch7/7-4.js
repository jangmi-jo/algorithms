/*
replace and remove
given an array with letters
replace a with two ds
remove b

1) go through the array and remove b, count number of a
2) get the total length of the result
3) start from the last index and fill the array

lots of off-by-one index could happen
*/

const replaceAndRemove = (arr) => {
  // time: O(n), space: O(1)
  let nonb = 0;
  let a = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] !== 'b') {
      arr[nonb] = arr[i];
      nonb++;
    }
    if (arr[i] === 'a') { a++; }
  }
  let b = arr.length-nonb;
  for (let i=0; i<b; i++) {
    arr.pop();
  }
  let idx = nonb + a - 1;
  for (let i=arr.length-1; i>=0; i--) {
    if (arr[i] === 'a') {
      arr[idx] = 'd';
      arr[idx-1] = 'd';
      idx -= 2;
    } else {
      arr[idx] = arr[i];
      idx--;
    }
  }
};

let a = 'acdbbca'.split("");
replaceAndRemove(a);
console.log(a);
