require_relative 'p02_hashing'
require_relative 'p04_linked_list'

class HashMap
  include Enumerable
  attr_reader :count, :store

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key)
    bucket(key).include?(key)
  end

  def set(key, val)
    @count += 1 unless include?(key)
    resize! if @count == num_buckets
    bucket(key).insert(key, val)
  end

  def get(key)
    bucket(key).get(key)
  end

  def delete(key)
    if bucket(key).remove(key)
      @count -= 1
      return true
    end
    false
  end

  def each
    @store.each do |arr|
      arr.each do |link|
        yield link.key, link.val
      end
    end
  end

  def to_s
    pairs = inject([]) do |strs, (k, v)|
      strs << "#{k.to_s} => #{v.to_s}"
    end
    "{\n" + pairs.join(",\n") + "\n}"
  end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
    new_hash_map = HashMap.new(num_buckets * 2)
    each do |k, v|
      new_hash_map.set(k, v)
    end
    @store = new_hash_map.store
  end

  def bucket(key)
    @store[key.hash % num_buckets]
  end
end
