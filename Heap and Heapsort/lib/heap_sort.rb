require_relative "heap"

class Array
  def heap_sort!(&prc)
    # set default proc
    prc ||= proc { |a, b| a <=> b }
    # build the heap with original array
    (size - 1).downto(0).each do |i|
      # do the opposite way sort to optimize time complexsity
      BinaryMinHeap.heapify_up(self, i, size) { |a, b| -prc.call(a, b) }
    end
    # set the boundary
    i = 0
    j = size - 1
    while i != j
      self[i], self[j] = self[j], self[i]
      BinaryMinHeap.heapify_down(self, 0, j) { |a, b| -prc.call(a, b) }
      j -= 1
    end
  end
end
