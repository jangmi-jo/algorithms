require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize
    @store = StaticArray.new(0)
    @length = 0
    @capacity = 8
  end

  # O(1)
  def [](index)
    check_index(index)
    @store[index]
  end

  # O(1)
  def []=(index, value)
    check_index(index)
    @store[index] = value
  end

  # O(1)
  def pop
    check_index
    val = self[@length - 1]
    self[@length - 1] = nil
    @length -= 1
    val
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    resize! if @length == @capacity
    @length += 1
    self[@length - 1] = val
  end

  # O(n): has to shift over all the elements.
  def shift
    check_index
    val = self[0]
    (1...@length).each do |i|
      self[i-1] = self[i]
    end
    @length -= 1
    val
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    resize! if @length == @capacity
    @length.downto(0).each do |i|
      @store[i] = @store[i-1]
    end
    @length += 1
    @store[0] = val
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index = 0)
    raise 'index out of bounds' if @length.zero? || !index.between?(0, @length - 1)
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    @capacity *= 2
    new_store = StaticArray.new(@capacity)
    (0...@length).each do |i|
      new_store[i] = self[i]
    end
    @store = new_store
  end
end
