// given two strings determine if they are one edit away
// delete/replace
// if length diff > 1, return false
//

const oneAway = (s, t) => {
  // assure that t is longer
  // time: O(n), space: O(1)
  [s, t] = s.length > t.length ? [t, s] : [s, t];
  if (t.length - s.length > 1) { return false; }
  let edit = 0;
  for (let i=0; i<s.length; i++) {
    if (s[i] !== t[i]) {
      if (edit === 1) { return false; }
      edit = 1;
      if (s.length !== t.length) {
        t = t.slice(0, i) + t.slice(i+1);
      }
    }
  }
  return edit === 1;
};

console.log(oneAway('', ''));
