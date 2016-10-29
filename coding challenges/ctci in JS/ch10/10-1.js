// we could start from the end of those two
// set the larger one at the end
// do that until B doesn't have any more

const sortedMerge = (a, b) => {
  // time: O(aLength)
  // space: O(1)
  let lastIdx = a.length + b.length - 1;
  let aLast = a.length - 1;
  let bLast = b.length - 1;
  while (b.length) {
    if (a[aLast] > b[bLast]) {
      a[lastIdx] = a[aLast];
      aLast--;
    } else {
      a[lastIdx] = b.pop();
      bLast--;
    }
    lastIdx--;
  }
};

let a = [1, 3, 5];
let b = [2, 4];
sortedMerge(a, b);
console.log(a);
