
let hash = {};

const davis = (n) => {
  if (n === 0) { return 1; }
  if (n < 0) { return 0; }
  if (hash[n - 1] === undefined) { hash[n - 1] = davis(n - 1); }
  if (hash[n - 2] === undefined) { hash[n - 2] = davis(n - 2); }
  if (hash[n - 3] === undefined) { hash[n - 3] = davis(n - 3); }
  return hash[n-1] + hash[n-2] + hash[n-3];
};

[1, 3, 7].forEach((i) => {
  console.log(davis(i));
});
