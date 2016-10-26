let hexHash = {};
for (let i=0; i<10; i++) {
  hexHash[i] = i;
}
['a', 'b', 'c', 'd', 'e', 'f'].forEach((c, i) => {
  hexHash[i+10] = c;
});


const toHex = (num) => {
  let res = [];
  while (num > 0) {
    res.push(hexHash[num % 16]);
    num = Math.floor(num / 16);
  }
  res.reverse();
  console.log(res.join(""));
};

toHex(-1);
