class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
    return array if array.size <= 1
    pivot_idx = rand(array.size)

    left = array.select { |el| el < array[pivot_idx] }
    middle = array.select { |el| el == array[pivot_idx] }
    right = array.select { |el| el > array[pivot_idx] }
    sort1(left).concat(middle).concat(sort1(right))
  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
    return array if length <= 1
    pivot_idx = partition(array, start, length, &prc)
    left_len = pivot_idx - start
    right_len = length - left_len - 1
    # right length = subtract left length and pivot
    sort2!(array, start, left_len, &prc)
    sort2!(array, pivot_idx + 1, right_len, &prc)
  end

  def self.partition(array, start, length, &prc)
    prc ||= proc { |a, b| a <=> b }
    pivot_idx = start
    (start + 1).upto(length + start - 1).each do |i|
      next unless prc.call(array[pivot_idx], array[i]) == 1
      # val = array[i]
      # array[i] = array[pivot_idx + 1]
      # array[pivot_idx + 1] = array[pivot_idx]
      # array[pivot_idx] = val

      # I like this way better : )
      # slightly uses less memory and code lines
      array[pivot_idx], array[i] = array[i], array[pivot_idx]
      array[pivot_idx + 1], array[i] = array[i], array[pivot_idx + 1]
      pivot_idx += 1
    end
    pivot_idx
  end
end
