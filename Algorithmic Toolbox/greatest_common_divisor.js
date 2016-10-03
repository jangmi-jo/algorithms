const greatestCommonDivisor = (a, b) => {
  // O(logn)
  if (a < b) {
    let temp = a;
    a = b;
    b = temp;
  }

  if (b === 0) {
    return a;
  }

  return greatestCommonDivisor(a % b, b);
};


console.log(greatestCommonDivisor(3918848, 1653264));
