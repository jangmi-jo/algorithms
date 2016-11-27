const PrefixTrie = require('./PrefixTries.js');

let trie = new PrefixTrie();

trie.insert('leet');
// trie.insert('abc');
//
// console.log(trie.search('dfg'));
//



console.log(trie);
let l = trie.root.children['l'];
console.log(l);
let le = l.children['e'];
console.log(le);
let lee = le.children['e'];
console.log(lee);
let leet = lee.children['t'];
console.log(leet);
