# Dijkstra's Algorithm

Dijkstra's Algorithm is an algorithm for finding the shortest paths between nodes in a weighted graph.

## Graph

We'll need a graph for this problem.

## Dijkstra 1

For our first version of Dijkstra's algorithm, write a method that takes in a source vertex. Within the method, use hashes to keep track of `shortest_paths` (these are the locked in paths) as well as `possible_paths `. Make sure that you add your source vertex to the `possible_paths`. Use the vertex itself as a key, and keep track of the total cost to reach that vertex and the previous edge in the value as a hash.

Next, until there are no more `possible_paths`, begin by selecting lowest cost vertex (the one that is the shortest distance from the source). We've found the fastest way to get to it, so add it to `shortest_paths` and remove it from `possible_paths`. Go through this vertex's out edges, and add each of them to `possible_paths` hash, as well with the total cost to get to that vertex and the edge you took to get there.

Once there are no more possible_paths, return `shortest_paths`. This should now be a hash that returns the minimum cost to get to each vertex in the graph from the source.

Test out your solution with the specs. What is this version of Dijkstra's time complexity?

## Dijkstra 2

Your first solution is good for dense graphs, but we can do better for sparse graphs. In our first solution, we must iterate through possible paths and take the minimum cost vertex each time, which causes a bottleneck. We can do better by using a Priority Map, which uses the heap data structure that we learned about a few weeks back.

### Heap 2

The `BinaryMinHeap` class has been provided for you. This is an advanced version of the heap code from before with a `reduce!` method. Effectively this just maintains an `index_map` that associates values with indices in the heap. Take a look at the code and make sure you understand how the `index_map` works.


### PriorityMap

We need to store the vertices in the heap, but we want to heapify them based on the cost that it takes to reach them. In order to do this, let's create the `PriorityMap` class. The `PriorityMap` class will take in a Proc for sorting, and store a hash map with vertices as the keys and the cost to reach them as the values. It will also store a `BinaryMinHeap`. Make sure to initialize your BinaryMinHeap with a proc that sorts elements based on their values in the map. When vertices are added to the priority map, we will:

1. Add the vertex to the map with the cost to reach it as the value
2. If the vertex was not already in the map, push it onto the heap. (write this in the `#insert` method)
3. If the value was already in the map, it is also already on the heap. Update its position in the heap by using the heap's `#reduce!` method. (write this in the `#update` method)

Lastly, write the `#extract!` method. This method is the means for removing the top priority vertex from our priority map. Make sure to remove the vertex from both the map and the heap, and return an array the vertex and its cost.

Now that we are using a priority map, what will be the time complexity for extracting the lowest cost vertex?

### Dijkstra 2

Finally, with these tools in hand, we can return to write our second implementation of Dijkstra's algorithm. It should work in a similar manner to our first implementation; the only major difference is that now, rather than searching through the next round of possible paths to find the minimum cost vertex, we can simply extract from the Priority Map. When we need to add to possible paths, we can use our `PriorityMap#[]=` method.

Make sure you pass all of the specs!

What is the time complexity (in terms of vertices and edges) for our second implementation of Dijkstra's?
