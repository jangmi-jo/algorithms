require 'rspec'
require 'p06_lru_cache'

describe LRUCache do
  describe "#get" do
    let(:prc) { double }

    it "should call the given proc for uncached inputs" do
      lru = LRUCache.new(3, prc)

      1.upto(3) do |i|
        square = i ** 2
        expect(prc).to(
          receive(:call).exactly(1).times.with(i).and_return(square)
        )
        expect(lru.get(i)).to eq(square)
      end
    end

    it "should not call the proc for cached inputs" do
      lru = LRUCache.new(3, prc)

      expect(prc).to receive(:call).exactly(3).times
      3.times do
        1.upto(3) { |i|
          lru.get(i)
        }
      end
    end

    it "should eject least recently used items out of cache" do
      lru = LRUCache.new(3, prc)

      expect(prc).to receive(:call).exactly(2).times.with(0)
      1.upto(3) do |i|
        expect(prc).to receive(:call).exactly(1).times.with(i)
      end

      lru.get(0) # cached: 0
      1.upto(3) { |i| lru.get(i) } # cached: 1, 2, 3
      lru.get(0) # cached: 2, 3, 0
      lru.get(2) # cached: 3, 0, 2
      lru.get(3) # cached: 0, 2, 3
    end
  end
end
