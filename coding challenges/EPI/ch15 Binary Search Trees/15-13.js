/*
Add credits
design a data structure that implements following methods

insert: add client with credit
remove: delete client
lookUp: return the credit for the specified client
addToAll: increment credit for all clients
max: return the max credit client

we can keep a hash map and a BST
store key as client id, value as the BST node in hash map
BST will be ordered with credit to make the max O(1)
*/

class Credit {
  constructor() {
    // should perform insert, remove, lookUp, max O(logn), addedToAll O(1)
    this.map = new Map();
    this.tree = new BST((val) => val.credit);
    this.addedToAll = 0;
  }

  insert(id, credit) {
    if (this.map.has(id)) {
      this.remove(id);
    }
    this.map.set(id, this.tree.insert({
      id: id,
      credit: credit - this.addedToAll
      // did that to make the new credit doesn't have added credit in the past
    }));
  }

  remove(id) {
    // assumed that the deleteNode works with the actual node
    if (this.map.has(id)) {
      this.tree.deleteNode(this.map.get(id));
      this.map.delete(id);
    }
  }

  lookUp(id) {
    return this.map.get(id).key.credit + this.addedToAll;
  }

  addToAll(credit) {
    this.addedToAll += credit;
  }

  max() {
    return this.tree.max().key.credit + this.addedToAll;
  }
}
