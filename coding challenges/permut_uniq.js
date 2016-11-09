
const permute = (arr) => {
  if (arr.length === 0) { return [[]]; }
  let res = [];
  for (let i=0; i<arr.length; i++) {
    if (arr[i-1] === arr[i]) { continue; }
    let prev = permute(arr.slice(0, i).concat(arr.slice(i+1)));
    prev.forEach((p) => {
      res.push(p.concat(arr[i]));
    });
  }
  return res;
};

const permuteUnique = (arr) => {
  arr.sort((a, b) => a - b);
  let res = permute(arr);
  return res;
};

console.log(permuteUnique([1, 1, 2]));
