/*
generate permutation

given an array, generate all permutations of it

take one of the element and recurse with the rest
get the returned result of the rest
go through the result array,
add the element that we took earlier in between elements to each array
then add that to new result

*/

const permutation = (arr) => {
  // time: O(n!)
  if (arr.length <= 1) {
    return [arr];
  }
  const last = arr.pop();
  const prev = permutation(arr);
  const res = [];
  prev.forEach((p) => {
    for (let i=0; i<=p.length; i++) {
      let temp = p.slice(0, i);
      temp.push(last);
      res.push(temp.concat(p.slice(i)));
    }
  });
  return res;
};

console.log(permutation([1, 2, 3, 4]).length);
