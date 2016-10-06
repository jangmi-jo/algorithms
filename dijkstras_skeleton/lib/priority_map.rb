require_relative 'heap2'

class PriorityMap
  def initialize(&prc)
    @map = {}
    @queue = BinaryMinHeap.new do |key1, key2|
      prc.call(@map[key1], @map[key2])
    end
  end

  def [](key)
    @map[key]
  end

  def []=(key, value)
    if @map.has_key?(key)
      update(key, value)
    else
      insert(key, value)
    end
  end

  def count
    @map.count
  end

  def empty?
    @map.empty?
  end

  def extract
    key = @queue.extract
    [key, @map.delete(key)]
  end

  def has_key?(key)
    @map.has_key?(key)
  end

  protected
  attr_accessor :map, :queue

  def insert(key, value)
    @map[key] = value
    @queue.push(key)
  end

  def update(key, value)
    @queue.reduce!(key)
    @map[key] = value
  end
end

pm = PriorityMap.new { |value1, value2| value1 <=> value2 }
pm["A"] = 10
pm["B"] = 15
pm["B"] = 5

p pm.extract
