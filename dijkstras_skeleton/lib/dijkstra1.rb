require_relative 'graph'

# O(|V|**2 + |E|).
def dijkstra1(vertex)
  shortest = {}
  possible = {}
  shortest[vertex] = { cost: 0, last_edge: nil }
  possible[vertex] = { cost: 0, last_edge: nil }
  until possible.empty?
    next_edges = vertex.out_edges.sort_by(&:cost)
    next_edge = next_edges.first
    shortest[next_edge.to_vertex] = { cost: possible[vertex][:cost] + next_edge.cost, last_edge: vertex}
    next_edges.each do |edge|
      if edge.to_vertex.out_edges.empty?
        shortest[edge.to_vertex] = { cost: possible[vertex][:cost] + edge.cost, last_edge: vertex }
      else
        possible[edge.to_vertex] = { cost: possible[vertex][:cost] + edge.cost, last_edge: vertex }
      end
    end
    possible.delete(vertex)
    vertex = next_edge.to_vertex
  end
  shortest
end
