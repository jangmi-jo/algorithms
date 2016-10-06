require_relative 'graph'

# Implementing topological sort using both Khan's and Tarian's algorithms

# Khan's
def topological_sort(vertices)
  in_edges = {}
  queue = []
  vertices.each do |v|
    in_edges[v] = v.in_edges.size
    queue << v if in_edges[v].zero?
  end
  seen = []
  until queue.empty?
    vertex = queue.pop
    seen << vertex
    neighbors = vertex.out_edges.map(&:to_vertex)
    neighbors.each do |v|
      in_edges[v] -= 1
      queue << v if in_edges[v].zero?
    end
  end
  seen
end
#
# # Tarian's
# def topological_sort(vertices)
#   visitied = {}
#   output = []
#   vertices.each do |v|
#     current = v
#     until visitied[current]
#       visitied[current] = true
#       current = current.out_edges.map(&:to_vertex)[0]
#     end
#     output << v
#   end
#   output.map { |e| e.value }
# end
#
#
# v1 = Vertex.new("1")
# v2 = Vertex.new("2")
# v3 = Vertex.new("3")
# v4 = Vertex.new("4")
#
# Edge.new(v1, v2)
# Edge.new(v1, v3)
# Edge.new(v2, v4)
# Edge.new(v3, v4)
#
# vertices = [v1, v2, v3, v4].shuffle
# p topological_sort(vertices)

#
# 20.times do
#   vertices = [v1, v2, v3, v4].shuffle
#   p "---------------------------"
#   p vertices.map { |e| e.value }
  # topological_sort(vertices)
#   p "---------------------------"
# end
