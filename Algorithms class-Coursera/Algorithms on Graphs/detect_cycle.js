class DetectCycle {
  constructor(input) {
    this.map = new Map();
    this.buildMap(input);
    this.visited = new Set();
  }

  buildMap(input) {
    input = input.split("\n").map((line) => line.split(" ").map(Number));
    this.v = input[0][0];
    for (let i=1; i<=this.v; i++) { this.map.set(i, []); }
    for (let j=1; j<input.length; j++) {
      this.map.set(input[j][0], this.map.get(input[j][0]).concat(input[j][1]));
    }
  }

  dfs() {
    for (let i=1; i<=this.v; i++) {
      if (!this.visited.has(i)) {
        if (this.explore(i, new Set()) === false) {
          return 1;
        }
      }
    }
    return 0;
  }

  explore(v, path) {
    this.visited.add(v);
    if (path.has(v)) { return false; }
    let newPath = new Set(path);
    newPath.add(v);
    let nextV = this.map.get(v);
    for (let i=0; i<nextV.length; i++) {
      if (this.explore(nextV[i], newPath) === false) {
        return false;
      }
    }
  }
}

let a = `4 4
1 2
4 1
2 3
3 1`;

let b = `5 7
1 2
2 3
1 3
3 4
1 4
2 5
3 5`;

let g = new DetectCycle(a);
console.log(g.map);
console.log(g.dfs());
