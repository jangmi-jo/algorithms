class Node {
  constructor(val) {
    this.val = val;
    this.edges = new Map();
    this.last = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node(null);
  }

  match(text) {
    let res = new Map();
    for (let i=0; i<text.length; i++) {
      res.forEach((v, k) => {
        if (res.get(k).last) { return; }
        let next = res.get(k).edges.get(text[i]);
        if (next) {
          res.set(k, next);
        } else {
          res.delete(k);
        }
      });
      if (this.root.edges.get(text[i])) {
        res.set(i, this.root.edges.get(text[i]));
      }
    }
    res = Array.from(res.keys()).filter((k) => res.get(k).last);
    return res;
  }

  addWord(word) {
    let current = this.root;
    for (let i=0; i<word.length; i++) {
      if (current.edges.get(word[i]) === undefined) {
        current.edges.set(word[i], new Node(word[i]));
      }
      current = current.edges.get(word[i]);
    }
    current.last = true;
  }
}

let t = new Trie();
t.addWord("AT");
t.addWord("A");
t.addWord("AG");
console.log(t.match("ACATA"));
