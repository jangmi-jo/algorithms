// un-directed graph
// s node, e node
// shortest path from s to e
// we can add an extra egde with W if necessary
//
// keep distance hash, key as vertex, value as dist
// start from s
// s => 0
// get the outEdges
// see the toNode of edge
// if it's visited, (exists in distHash)
// see if we can get there with shorter dist
// if it's not visited,
// set the dist in distHash

// compare the shortest path that we found with the w
// if w is shorter, we return w as result

// class Vertex, /inEdges/outEdges
// class Edge, toNode/fromNode/weight

const shortestPath = (s, e, w) => {
  // time: O(E * V)
  // space: O(V)
  let distHash = new Map();
  distHash.set(s, 0);
  let queue = [s];
  while (queue.length) {
    let current = queue.shift();
    let untilThisNode = distHash.get(current);
    current.outEdges.forEach((edge) => {
      let newDist = untilThisNode + edge.weight;
      let oldDist = distHash.get(edge.toNode);
      if (oldDist === undefined || newDist < oldDist) {
        distHash.set(edge.toNode, newDist);
        queue.push(edge.toNode);
      }
    });
  }
  let shortest = distHash.get(e);
  if (shortest === undefined) { return w; }
  return shortest > w ? w : shortest;
};

// keep distHash, set s to 0
// do the process V-1 times
// in process,
// visit all the vertices each time
// explore each vertex's outEdges and update distance if any is shorter

const bellmanFord = (vertices, s, e, w) => {
  // time: O(v**2 + E)
  // space: O(V)
  let distHash = new Map();
  distHash.set(s, 0);
  for (let i=0; i<vertices.length - 1; i++) {
    vertices.forEach((v) => {
      let untilThisNode = distHash.get(v);
      if (untilThisNode !== undefined) {
        v.outEdges.forEach((edge) => {
          let newDist = untilThisNode + edge.weight;
          let oldDist = distHash.get(edge.toNode);
          if (oldDist === undefined || newDist < oldDist) {
            distHash.set(edge.toNode, newDist);
          }
        });
      }
    });
  }
  let shortest = distHash.get(e);
  return shortest === undefined || shortest > w ? w : shortest;
};
