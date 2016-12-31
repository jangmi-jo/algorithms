/*
Look and say sequence
1, 11, 21, 1211, 111221, 312211..
given an integer n, return nth string

1) keep a map num as key, numth string as value
2) first, look up n in map
3) if it doesn't have it, get the biggest one
4) implement helper func generating next seq
5) (group the string by same numbers)

*/

class LookAndSay {
  constructor() {
    this.last = 1;
    this.cacheSeq = new Map();
    this.cacheSeq.set(1, '1');
  }

  lookAndSay(n) {
    if (n <= 0) { return ""; }
    while (!this.cacheSeq.get(n)) {
      this.generateMore();
    }
    return this.cacheSeq.get(n);
  }

  generateMore() {
    let prev = this.cacheSeq.get(this.last);
    let group = this.groupString(prev);
    this.last++;
    this.cacheSeq.set(this.last, this.sayNext(group));
  }

  sayNext(group) {
    for (let i=0; i<group.length; i++) {
      group[i] = `${group[i].length}${group[i][0]}`;
    }
    return group.join('');
  }

  groupString(prev) {
    let group = [];
    while (prev.length) {
      let i = 0;
      while (prev[i] === prev[i+1]) { i++; }
      group.push(prev.slice(0, i+1));
      prev = prev.slice(i+1);
    }
    return group;
  }
}

let a = new LookAndSay();
for (let i=1; i<10; i++) {
  console.log(a.lookAndSay(i));
}
