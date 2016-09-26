require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize
    @store = StaticArray.new(0)
    @length = 0
    @capacity = 8
    @start_idx = @capacity - 1
  end

  # O(1)
  def [](index)
    check_index(index)
    @store[(index + @start_idx + 1) % @capacity]
  end

  # O(1)
  def []=(index, value)
    check_index(index)
    @store[(index + @start_idx + 1) % @capacity] = value
  end

  # O(1)
  def pop
    check_index
    val = self[@length - 1]
    self[@length - 1] = nil
    @length -= 1
    val
  end

  # O(1) ammortized
  def push(val)
    resize! if @length == @capacity
    @length += 1
    self[@length - 1] = val
  end

  # O(1)
  def shift
    check_index
    val = self[0]
    self[0] = nil
    @length -= 1
    @start_idx = (@start_idx + 1) % @capacity
    val
  end

  # O(1) ammortized
  def unshift(val)
    resize! if @length == @capacity
    @length += 1
    @store[@start_idx] = val
    @start_idx = (@start_idx - 1) % @capacity
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index = 0)
    raise 'index out of bounds' if @length.zero? || !index.between?(0, @length - 1)
  end

  def resize!
    new_store = StaticArray.new(@capacity)
    (0...@length).each do |i|
      new_store[i] = self[i]
    end

    @capacity *= 2
    @start_idx = @capacity - 1
    @store = new_store
  end
end
