const viral = (n) => {
  let current = 5;
  let liked = 0;
  for (let i=0; i<n; i++) {
    current = Math.floor(current / 2);
    liked += current;
    current *= 3;
  }
  return liked;
};

console.log(viral(50));
