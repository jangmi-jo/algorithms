require "heap_sort"

describe Array do
  describe "#heap_sort" do
    it "sorts an unsorted array" do
      arr = [4,2,1,3,5,7,8,9]
      arr.heap_sort!

      expect(arr).to eq([1,2,3,4,5,7,8,9])
    end

    it "sorts a reversed array" do
      arr = [5,4,3,2,1]
      arr.heap_sort!

      expect(arr).to eq([1,2,3,4,5])
    end

    it "doesn't sort a sorted array" do
      arr = [1,2,3,4,5]
      arr.heap_sort!

      expect(arr).to eq([1,2,3,4,5])
    end
  end
end
