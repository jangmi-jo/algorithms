class Heap {
  constructor(comparator) {
    this.store = [];
    this.comparator = comparator || ((a, b) => a - b);
    this.len = 0;
  }

  push(val) {
    this.len++;
    this.store.push(val);
    Heap.heapifyUp(this.store, this.store.length - 1, this.comparator);
  }

  extract() {
    this.len--;
    [this.store[0], this.store[this.len]] = [this.store[this.len], this.store[0]];
    const val = this.store.pop();
    Heap.heapifyDown(this.store, 0, this.comparator);
    return val;
  }

  static heapifyUp(store, i, comparator) {
    if (i === 0) { return; }
    const pIdx = Heap.parent(i);
    if (comparator(store[pIdx], store[i]) > 0) {
      [store[pIdx], store[i]] = [store[i], store[pIdx]];
      Heap.heapifyUp(store, pIdx, comparator);
    }
  }

  static heapifyDown(store, i, comparator) {
    let cIdxs = Heap.children(i).filter((n) => n < store.length);
    if (cIdxs.length === 0) { return; }
    cIdxs.sort((a, b) => comparator(store[a], store[b]));
    if (comparator(store[i], store[cIdxs[0]]) > 0) {
      [store[cIdxs[0]], store[i]] = [store[i], store[cIdxs[0]]];
      Heap.heapifyDown(store, cIdxs[0], comparator);
    }
  }

  static parent(i) {
    return Math.floor((i - 1) / 2);
  }

  static children(i) {
    return [i * 2 + 1, i * 2 + 2];
  }
}
// idea1
// build all possible edges
// start from one vertex
// pick shortest edge from reacheable edges from connected vertices that doesn't go to the visited vertex
// do the process until all vertices are visited

// idea2
// keep visited vertices
// keep total
// keep candidates as Heap
// start from one vertex
// iterate through all unvisited vertices
// put them with distance in candidates
// pick the shortest dist in candidates
// put the vertex in visited

const distBetween = (a, b) => {
  return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
};
// have no idea what to do.
const buildingRoads = (input) => {
  input = input.split("\n").map((line) => line.split(" ").map(Number));
  const visited = new Set();
  let total = 0;
  const candidates = new Heap((a, b) => a.dist - b.dist);
  visited.add(1);
  while (visited.size < input[0][0]) {
    for (let i=1; i<=input[0][0]; i++) {
      if (visited.has(i)) {
      }
    }
  }
};


let input1 = `4
0 0
0 1
1 0
1 1`;

let input2 = `5
0 0
0 2
1 1
3 0
3 2`;
