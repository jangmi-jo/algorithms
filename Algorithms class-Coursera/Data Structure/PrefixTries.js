// Key concept was the TrieNode needs the word instead of the each letter
// construct children as hash for fast lookup
// needs isLast variable


class TrieNode {
  constructor(word) {
    this.word = word;
    this.isLast = false;
    this.children = {};
  }
}

class PrefixTrie {
  constructor() {
    this.root = new TrieNode("");
  }

  insert(word) {
    // time: O(n) where n is word's length
    // space: O(n)
    let currentNode = this.root;
    for (let i=0; i<word.length; i++) {
      if (currentNode.children[word[i]] !== undefined) {
        currentNode = currentNode.children[word[i]];
      } else {
        let newNode = new TrieNode(currentNode.word + word[i]);
        currentNode.children[word[i]] = newNode;
        currentNode = newNode;
      }
      if (i === word.length - 1) {
        currentNode.isLast = true;
      }
    }
  }

  search(word) {
    // time: O(n), space: O(1)
    let currentNode = this.root;
    for (let i=0; i<word.length; i++) {
      if (currentNode.children[word[i]]) {
        currentNode = currentNode.children[word[i]];
      } else {
        return false;
      }
    }
    return currentNode.isLast;
  }

  startsWith(pre) {
    let currentNode = this.root;
    for (let i=0; i<pre.length; i++) {
      if (currentNode.children[pre[i]]) {
        currentNode = currentNode.children[pre[i]];
      } else {
        return false;
      }
    }
    return true;
  }
}

module.exports = PrefixTrie;
