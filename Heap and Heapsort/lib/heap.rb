class BinaryMinHeap
  def initialize(&prc)
    @prc = prc || proc { |a, b| a <=> b }
    @store = []
  end

  def count
    @store.count
  end

  def extract
    @store[0], @store[count - 1] = @store[count - 1], @store[0]
    val = @store.pop
    @store = BinaryMinHeap.heapify_down(@store, 0, count, &@prc)
    val
  end

  def peek
    @store.first
  end

  def push(val)
    @store.push(val)
    @store = BinaryMinHeap.heapify_up(@store, count - 1, count, &@prc)
  end

  protected
  attr_accessor :prc, :store

  public
  def self.child_indices(len, parent_index)
    [parent_index * 2 + 1, parent_index * 2 + 2].select { |i| i.between?(0, len - 1)}
  end

  def self.parent_index(child_index)
    raise 'root has no parent' if child_index.zero?
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    children = child_indices(len, parent_idx)
    return array if children.empty?
    prc ||= proc { |a, b| a <=> b }
    idx = children.sort { |a, b| prc.call(array[a], array[b]) }[0]
    # spaceship operator's 1 means out of order
    # -1 means in order
    if prc.call(array[parent_idx], array[idx]) == 1
      array[parent_idx], array[idx] = array[idx], array[parent_idx]
      heapify_down(array, idx, len, &prc)
    else
      array
    end
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    return array if child_idx.zero?
    idx = parent_index(child_idx)
    prc ||= proc { |a, b| a <=> b }
    if prc.call(array[idx], array[child_idx]) == 1
      array[idx], array[child_idx] = array[child_idx], array[idx]
      heapify_up(array, idx, len, &prc)
    else
      return array
    end

  end
end
