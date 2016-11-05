const permute = (arr) => {
  // time: O(n!)
  if (arr.length <= 1) { return [arr]; }
  let res = [];
  for (let i=0; i<arr.length; i++) {
    let c = arr[i];
    let prev = permute(arr.slice(0, i).concat(arr.slice(i+1)));
    prev.forEach((a) => {
      res.push(a.concat(c));
    });
  }
  return res;
};


console.log(permute([1, 2, 3]));
