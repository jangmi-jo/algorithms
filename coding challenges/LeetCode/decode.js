let nums = {};
for (let i=0; i<10; i++) {
  nums[i.toString()] = true;
}

const decodeString = (s) => {
  // when we see a

  // number -> set k
  // open bracket -> start new string
  // close bracket -> return the res
  let res = "";
  let i = 0;
  let k;
  let str;
  while (i < s.length) {
    if (nums[s[i]]) {
      k += s[i];
    } else if (s[i] === '[') {
      str = '';
    } else if (s[i] === ']') {
      
    }
  }
};

decodeString('2[abc]3[cd]ef');
