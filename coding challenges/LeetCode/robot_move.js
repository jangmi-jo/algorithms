const uniquePaths = (m, n) => {
  let arr = [];
  for (let i=0; i<m; i++) {
    let temp = [];
    for (let j=0; j<n; j++) {
      temp.push(i === 0 || j === 0 ? 1 : 0);
    }
    arr.push(temp);
  }
  for (let i=1; i<m; i++) {
    for (let j=1; j<n; j++) {
      arr[i][j] = arr[i-1][j] + arr[i][j-1];
    }
  }
  return arr[m-1][n-1];
};

console.log(uniquePaths(2, 2));
