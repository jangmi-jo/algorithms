
const fourSum = (arr, t) => {
  let res = [];
  if (arr.length < 4) { return res; }
  arr.sort((a, b) => a - b);
  for (let i=0; i<arr.length - 3; i++) {
    if (arr[i] === arr[i-1]) { continue; }
    for (let j=i+1; j<arr.length - 2; j++) {
      if (j !== i+1 && arr[j] === arr[j-1]) { continue; }
      let k = j+1;
      let l = arr.length - 1;
      while (k<l) {
        if (arr[i] + arr[j] + arr[k] + arr[l] === t) {
          res.push([arr[i], arr[j], arr[k], arr[l]]);
          while (arr[k] === arr[k+1]) { k++; }
          while (arr[l] === arr[l-1]) { l--; }
          k++;
          l--;
        } else if (arr[i] + arr[j] + arr[k] + arr[l] < t) {
          k++;
        } else {
          l--;
        }
      }
    }
  }
  return res;
};

console.log(fourSum([0, 0, 0, 0], 0));
