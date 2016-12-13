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
    // refactor this without res.set(null to root)
    let res = new Map();
    res.set(null, this.root);
    for (let i=0; i<text.length; i++) {
      Array.from(res.keys()).forEach((k) => {
        let v = res.get(k);
        if (v.last) { return; }
        let next = v.edges.get(text[i]);
        if (k === null && next !== undefined) {
          res.set(i, next);
        } else if (next !== undefined) {
          res.set(k, next);
        } else if (k !== null) {
          res.delete(k);
        }
      });
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
t.addWord("ATCG");
t.addWord("GGGT");
console.log(t.match("AATCGGGTTCAATCGGGGT"));
