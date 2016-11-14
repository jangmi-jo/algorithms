// idea: use two pointers (i, j)
// calculate area each time and get max area
// move i when arr[i] < arr[j]


const maxArea = (arr) => {
  let i = 0, j = arr.length - 1;
  let max = 0;
  while (i < j) {
    let area = (j - i) * Math.min(arr[i], arr[j]);
    max = Math.max(max, area);
    if (arr[i] < arr[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
};
