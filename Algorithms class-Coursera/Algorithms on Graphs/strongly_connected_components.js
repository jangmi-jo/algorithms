// reverse all the edges and store the pre/post explored count
// from max post count, go through the original directions
// if it's neighbor has smaller post count, it's connected
// find source vertex is easier than find sink vertex
// if we visit the vertices with reversed edges,
// we can get the source vertex of reversed graph
// and that is the sink vertex of original graph

const buildEdgeMap = (input) => {
  // time: O(V+E), space: O(V+E)
  input = input.split(" ").map((line) => line.split(""));
  let origin = new Map();
  let reversed = new Map();
  let numOfVertex = Number(input[0][0]);
  for (let i=1; i<=numOfVertex; i++) {
    origin.set(`${i}`, []);
    reversed.set(`${i}`, []);
  }
  for (let i=1; i<input.length; i++) {
    origin.set(input[i][0], origin.get(input[i][0]).concat(input[i][1]));
    reversed.set(input[i][1], reversed.get(input[i][1]).concat(input[i][0]));
  }
  return [origin, reversed, numOfVertex];
};

const buildPostCountMap = (edgeMap, n) => {
  // time: O(V + E), space: O(V)
  // keep unvisited set and start from 1
  // keep a stack
  // do the process until unvisited set is empty and stack is empty
  let postCountMap = new Map();
  let unvisited = new Set();
  for (let i=1; i<=n; i++) {
    postCountMap.set(`${i}`, 0);
    unvisited.add(`${i}`);
  }
  // let entry = unvisited.entries();
  let c = 1;
  let stack = ['1'];
  // DFS iterative
  while (unvisited.size || stack.length) {
    let current = stack[stack.length - 1];// || entry.next().value[0];
    unvisited.delete(current);
    let neighbors = edgeMap.get(current).filter((v) => unvisited.has(v));
    if (neighbors.length) {
      neighbors.forEach((v) => {
        c++;
        stack.push(v);
      });
    } else {
      c++;
      postCountMap.set(current, c);
      stack.pop();
    }
  }
  return postCountMap;
};


const stronglyConnectedComponent = (input) => {
  // time: O(VlogV + E), space: O(V + E)
  let [origin, reversed, n] = buildEdgeMap(input);
  let postCountMap = buildPostCountMap(reversed, n);
  let keys = Array.from(postCountMap.keys());
  keys.sort((a, b) => postCountMap.get(b) - postCountMap.get(a));
  let visited = new Set();
  let res = [];
  for (let k=0; k<keys.length; k++) {
    if (!visited.has(keys[k])) {
      let temp = new Set();
      let queue = [keys[k]];
      while (queue.length) {
        let c = queue.shift();
        temp.add(c);
        visited.add(c);
        origin.get(c).forEach((neighbor) => {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        });
      }
      res.push(temp);
    }
  }
  return res;
};

console.log(stronglyConnectedComponent(`57 21 32 31 43 41 52 53`));
