const isPrime = (n) => {
  if (n <= 1) { return false; }
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) { return false; }
  }
  return true;
};
