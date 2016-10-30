class Listy {
  constructor() {
    this.store = [];
  }

  push(n) {
    this.store.push(n);
  }

  elementAt(i) {
    return this.store[i];
  }
}


const search = (listy, target) => {
  if (target < 0) { return -1; }
  if (listy.elementAt(0) === target) { return 0; }
  let i = 1;
  while (listy.elementAt(i) >= 0 && listy.elementAt(i) < target) {
    i *= 2;
  }
  let s = i / 2;
  let e = i;
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    if (listy.elementAt(mid) === target) {
      return mid;
    } else if (listy.elementAt(mid) < target) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return -1;
};

let listy = new Listy();
for (let n=1; n<11; n++) {
  listy.push(n);
}

console.log(listy);

for (let n=1; n<11; n++) {
  console.log(search(listy, n));
}
