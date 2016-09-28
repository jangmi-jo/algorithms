class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
    return array if array.size <= 1
    pivot = array.shift
    left = []
    right = []
    array.each do |el|
      if el < pivot
        left << el
      else
        right << el
      end
    end
    QuickSort.sort1(left).concat([pivot]).concat(QuickSort.sort1(right))
  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
    return array if length <= 1
    pivot = QuickSort.partition(array, start, length, &prc)
    left_len = pivot - start
    right_len = length - left_len - 1
    QuickSort.sort2!(array, start, left_len, &prc)
    QuickSort.sort2!(array, pivot + 1, right_len, &prc)
  end

  def self.partition(array, start, length, &prc)
    prc ||= proc { |a, b| a <=> b }
    pivot_idx = start
    (start + 1).upto(length + start - 1).each do |i|
      next unless prc.call(array[pivot_idx], array[i]) == 1
      array[pivot_idx], array[i] = array[i], array[pivot_idx]
      array[pivot_idx + 1], array[i] = array[i], array[pivot_idx + 1]
      pivot_idx += 1
    end
    pivot_idx
  end
end
