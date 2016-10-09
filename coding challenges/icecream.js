const icecream = (m, n, arr) => {
  for (let i=0; i<n; i++) {
    for (let j=i+1; j<n; j++) {
      if (m - arr[i] === arr[j]) {
        console.log([i+1, j+1]);
      }
    }
  }
};

icecream(4, 4, [2, 2, 4, 3]);
