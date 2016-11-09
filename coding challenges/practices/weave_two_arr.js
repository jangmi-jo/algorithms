const weave = (a, b) => {
  if (a === '') {
    return [b];
  } else if (b === '') {
    return [a];
  }
  let res = [];
  let aPrev = weave(a.slice(1), b);
  let bPrev = weave(a, b.slice(1));
  aPrev.forEach((s) => { res.push(a[0] + s); });
  bPrev.forEach((s) => { res.push(b[0] + s); });
  return res;
};

console.log(weave('abc', 'def'));
