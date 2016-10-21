
class BinaryHeap {
  constructor(comparator = (a, b) => a - b) {
    this.comparator = comparator;
    this.store = [];
  }

  insert(el) {
    this.store.push(el);
    BinaryHeap.heapifyUp(this.store.length - 1, this.store, this.comparator);
  }

  peek() {
    return this.store[0];
  }

  extract() {
    let returnEl = this.store[0];
    this.store[0] = this.store[this.store.length - 1];
    this.store.pop();
    BinaryHeap.heapifyDown(0, this.store, this.comparator);
    return returnEl;
  }

  static parent(i, store) {
    let parentIdx = Math.floor((i - 1) / 2);
    return parentIdx >= 0 && parentIdx < store.length ? parentIdx : undefined;
  }

  static children(i, store) {
    let idxs = [2 * i + 1, 2 * i + 2];
    idxs = idxs.filter((idx) => idx >= 0 && idx < store.length);
    return idxs;
  }

  static heapifyUp(i, store, comparator) {
    let parent = BinaryHeap.parent(i, store);
    if (parent !== undefined) {
      if (comparator(store[parent], store[i]) > 0) {
        let temp = store[parent];
        store[parent] = store[i];
        store[i] = temp;
        BinaryHeap.heapifyUp(parent, store, comparator);
      }
    }
  }

  static heapifyDown(i, store, comparator) {
    let idxs = BinaryHeap.children(i, store);
    let childHash = {};
    idxs.forEach((idx) => {
      childHash[store[idx]] = idx;
    });
    if (idxs.length) {
      let children = idxs.map((idx) => store[idx]);
      children.sort(comparator);
      if (comparator(store[i], children[0]) > 0) {
        let temp = store[i];
        store[i] = store[childHash[children[0]]];
        store[childHash[children[0]]] = temp;
        BinaryHeap.heapifyDown(childHash[children[0]], store, comparator);
      }
    }
  }
}

module.exports = BinaryHeap;
