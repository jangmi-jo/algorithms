// delete duplicates from a sorted array
// [1, 1, 1, 2, 2, 3, 4, 4, 5, 6, 6]
// => 6 return the num of valid elements
// keep a counter represents the number of uniq els
// when we see a new el,
// swap the el with the arr[count]
// increment the counter
// return the counter


const deleteDup = (arr) => {
  // time: O(n) where n is the length of arr
  // space: O(1)
  let c = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === arr[i+1]) { continue; }
    [arr[i], arr[c]] = [arr[c], arr[i]];
    c++;
  }
  // pop (arr.length - counter) elements from the arr
  return c;
};

console.log(deleteDup([1, 2, 3, 4, 5]));
