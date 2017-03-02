/*
generate all subsets of size k
given n and k, return all k size subsets from [1, 2, 3...n]

1, 1 => [1]
2, 1 => [1], [2]
3, 1 => [1], [2], [3]

2, 2 => [1, 2]
3, 2 => [1, 2], [1, 3], [2, 3]
4, 2 => [1, 2], [1, 3], [2, 3], [1, 4], [2, 4], [3, 4]

3, 3 => [1, 2, 3]
4, 3 => [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]
5, 3 => [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4], ...
get [5, 2] and add 5 to all of them

get length k ones without n
get length k-1 ones without n and add n to those
merge them
base case: when it reaches either k === n or k === 1

*/

const allKSubsets = (n, k) => {
  if (k === n) {
    const res = [];
    for (let i=1; i<k+1; i++) {
      res.push(i);
    }
    return [res];
  } else if (k === 1) {
    const res = [];
    for (let i=1; i<n+1; i++) {
      res.push([i]);
    }
    return res;
  }
  const prev = allKSubsets(n-1, k);
  const withoutN = allKSubsets(n-1, k-1);
  withoutN.forEach((arr) => {
    arr.push(n);
  });
  return prev.concat(withoutN);
};

console.log(allKSubsets(5, 3));
