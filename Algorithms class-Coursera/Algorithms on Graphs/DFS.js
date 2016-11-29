class Graph {
  constructor(input) {
    this.map = new Map();
    this.buildMap(input);
    this.visited = new Set();
    this.count = 0;
  }

  buildMap(input) {
    input = input.split("\n").map((line) => line.split(" ").map(Number));
    this.v = input[0][0];
    for (let i=1; i<=this.v; i++) {
      this.map.set(i, []);
    }
    for (let j=1; j<input.length; j++) {
      this.map.set(input[j][0], this.map.get(input[j][0]).concat(input[j][1]));
      this.map.set(input[j][1], this.map.get(input[j][1]).concat(input[j][0]));
    }
  }

  explore(v) {
    this.visited.add(v);
    this.map.get(v).forEach((n) => {
      if (!this.visited.has(n)) {
        this.explore(n);
      }
    });
  }

  dfs() {
    for (let i=1; i<this.v; i++) {
      if (!this.visited.has(i)) {
        this.explore(i);
        this.count++;
      }
    }
  }

}

let g = new Graph(`7 6
1 4
2 4
2 5
3 6
6 7
3 7`);
g.dfs();
console.log(g);
