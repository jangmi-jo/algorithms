// given a graph
// return the topological ordering
// 1) get the vertices that doesn't have incoming edge
// 2) add them in res
// 3) keep their neighbors in the next queue
// 4) remove the vertices from map
// do this process until we don't have anything left in map

const buildEdgeMap = (input) => {
  // time, space: O(V+E)
  let map = new Map();
  input = input.split("\n").map((line) => line.split(" ").map(Number));
  let numOfVertex = input[0][0];
  for (let i=1; i<=numOfVertex; i++) {
    map.set(i, {incoming: new Set(), out: []});
  }
  for (let i=1; i<input.length; i++) {
    let out = map.get(input[i][0]);
    out.out.push(input[i][1]);
    map.set(input[i][0], out);
    let incoming = map.get(input[i][1]);
    incoming.incoming.add(input[i][0]);
    map.set(input[i][1], incoming);
  }
  return [map, numOfVertex];
};

const topologicalOrdering = (input) => {
  let [map, numOfVertex] = buildEdgeMap(input);
  let res = [];
  while (map.size) {
    for (let i=1; i<=numOfVertex; i++) {
      if (map.get(i) && map.get(i).incoming.size === 0) {
        res.push(i);
        map.get(i).out.forEach((v) => {
          let temp = map.get(v);
          temp.incoming.delete(i);
          map.set(v, temp);
        });
        map.delete(i);
      }
    }
  }
  return res;
};

console.log(topologicalOrdering(`5 7
2 1
3 2
3 1
4 3
4 1
5 2
5 3`));
