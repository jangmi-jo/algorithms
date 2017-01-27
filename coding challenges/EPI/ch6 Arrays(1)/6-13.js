/*
compute a random permutation
given an array and random number generator

1) start from last el, swap it with others
2) go through all els, swap each with except already swapped els
3) return the array

*/

const randomPermutation = (arr) => {
  for (let i=arr.length-1; i>=0; i--) {
    let r = Math.floor(Math.random() * (i+1));
    [arr[i], arr[r]] = [arr[r], arr[i]];
  }
  return arr;
};

for (let i=0; i<100; i++) {
  console.log(randomPermutation([1, 2, 3]));
}
