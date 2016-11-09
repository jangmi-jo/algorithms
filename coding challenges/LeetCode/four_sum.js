
const find = (arr, t, subArr = []) => {
  if (t === 0 && subArr.length === 4) {
    return [subArr];
  } else if (subArr.length >= 4) {
    return [];
  }

  let res = [];
  for (let i=0; i<arr.length; i++) {
    if (arr[i-1] === arr[i]) { continue; }
    let localRes = find(arr.slice(i+1), t - arr[i], subArr.concat(arr[i]));
    localRes.forEach((local) => {
      res.push(local);
    });
  }
  return res;
};

const fourSum = (arr, t) => {
  arr.sort((a, b) => a - b);
  let res = find(arr, t);
  return res;
};

//
// const fourSum = (arr, t) => {
//   let resWithDup = fourSumWithDup(arr, t);
//   let res = new Set();
//   resWithDup.forEach((r) => {
//     r.sort((a, b) => a - b);
//     res.add(r.join(' '));
//   });
//   res = Array.from(res);
//   return res.map((r) => r.split(' ').map(Number));
// };

console.log(fourSum([-5,5,4,-3,0,0,4,-2], 4));
