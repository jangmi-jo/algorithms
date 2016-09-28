require "quick_sort"

describe QuickSort do
  describe "partition" do
    it "partitions the whole array properly" do
      arr = [3, 1, 5, 2, 4]
      pivot_idx = QuickSort.partition(arr, 0, 5)

      expect(arr).to eq([1, 2, 3, 5, 4])
      expect(pivot_idx).to eq(2)
    end

    it "partitions a portion of the array" do
      arr = [4, 3, 2, 1, 7, 5, 8, 6]
      pivot_idx = QuickSort.partition(arr, 4, 4)
      # Should not touch left half of the array
      expect(arr).to eq([4, 3, 2, 1, 5, 6, 7, 8])
      expect(pivot_idx).to eq(6)
    end
  end

  describe "sort2!" do
    it "sorts an array" do
      arr = [5, 3, 4, 2, 1, 6]
      QuickSort.sort2!(arr)
      expect(arr).to eq([1, 2, 3, 4, 5, 6])
    end

    it "makes the right number of comparisons (good case)" do
      arr = [4, 2, 1, 3, 6, 5, 7]

      num_comparisons = 0
      QuickSort.sort2!(arr) do |el1, el2|
        num_comparisons += 1
        el1 <=> el2
      end

      expect(num_comparisons).to eq(10)
    end

    it "makes the right number of comparisons (worst case)" do
      arr = [1, 2, 3, 4, 5]

      num_comparisons = 0
      QuickSort.sort2!(arr) do |el1, el2|
        num_comparisons += 1
        el1 <=> el2
      end

      expect(num_comparisons).to eq(10)
    end
  end
end
