const generateObject = (str) => {
  let obj = {};
  str.split("").forEach((chr) => {
    if (obj[chr]) {
      obj[chr] += 1;
    } else {
      obj[chr] = 1;
    }
  });
  return obj;
};

// O(a + b)
const anagrams = (a, b) => {
  let count = 0;
  let aObj = generateObject(a);
  let bObj = generateObject(b);
  // a
  Object.keys(aObj).forEach((key) => {
    if (bObj[key]) {
      count += Math.abs(bObj[key] - aObj[key]);
    } else {
      count += aObj[key];
    }
  });
  // b
  Object.keys(bObj).forEach((key) => {
    if (!aObj[key]) {
      count += bObj[key];
    }
  });
  console.log(count);
};

anagrams('cdec', 'abc');
