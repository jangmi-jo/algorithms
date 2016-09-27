require_relative "heap"

class Array
  def heap_sort!
    heap = BinaryMinHeap.new { |a, b| b <=> a }
    store = []
    each { |el| store = heap.push(el) } # build heap and store in store
    i = 0
    j = size - 1
    while i != j
      store[i], store[j] = store[j], store[i]
      # p "#{i}, #{j}"
      j -= 1
      store = BinaryMinHeap.heapify_down(store, 0, j)
      #TODO this line is not happening!!
    end
    store
  end
end

p [5, 4, 3, 2, 1].heap_sort!
# heap = BinaryMinHeap.new
# 5.downto(1).each do |i|
#   heap.push(i)
# end
#
# p BinaryMinHeap.heapify_down([1, 2, 4, 5, 3], 1, 4)
