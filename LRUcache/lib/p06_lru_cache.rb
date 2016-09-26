require_relative 'p05_hash_map'
require_relative 'p04_linked_list'

class LRUCache
  attr_reader :count
  def initialize(max, prc)
    @map = HashMap.new(max)
    @store = LinkedList.new
    @max = max
    @prc = prc
  end

  def count
    @map.count
  end

  def get(key)
    if @map.get(key)
      update_link!(@map.get(key))
    else
      calc!(key)
    end
  end

  def to_s
    "Map: " + @map.to_s + "\n" + "Store: " + @store.to_s
  end

  private

  def calc!(key)
    eject! if count == @max
    val = @prc.call(key)
    link = @store.insert(key, val)
    @map.set(key, link)
    val
  end

  def update_link!(link)
    link.prev.next = link.next
    link.next.prev = link.prev

    link.prev = @store.last
    link.next = @store.last.next
    @store.last.next = link

    link.val
  end

  def eject!
    delete_key = @store[0].key
    @store.remove(delete_key)
    @map.delete(delete_key)
  end
end
