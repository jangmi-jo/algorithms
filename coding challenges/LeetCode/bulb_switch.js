const bulbSwitch = (n) => {
  if (n === 0) { return 0; }
  let i = 1;
  // see if i**2 <= n
  // if it is, we increment i move to next
  // if it's not, we want to break;
  while (Math.pow(i, 2) <= n) {
    i++;
  }
  return i - 1;
};

for (let i=0; i<10; i++) {
  console.log(bulbSwitch(i));
}
