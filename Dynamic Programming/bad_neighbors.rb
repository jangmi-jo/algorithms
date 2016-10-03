def bad_neighbors(line)
  ary = line.split(", ").map{|n| n.to_i }
  return ary.max if ary.size <= 3
  hash = {}
  (0..2).each do |i|
    max = ary[0..i].max
    hash[i] = [max, [ary.index(max)]]
  end
  (3...ary.size).each do |i|
    last = hash[i-1]
    temp = [last]
    temp << [last[0] + ary[i], last[1] + [i]] if !last[1].include?(i-1) && !last[1].include?(0)
    the_last = hash[i-2]
    temp << [the_last[0] + ary[i-1], the_last[1] + [i-1]] if !the_last[1].include?(i-2)
    temp << [the_last[0] + ary[i], the_last[1] + [i]] if !the_last[1].include?(i-1) && !last[1].include?(0)
    hash[i] = temp.max
  end
  p hash[ary.size-1][0]
  hash[ary.size-1][1].map{|i| ary[i] }
end

a = "10, 3, 2, 5, 7, 8"
b = "94, 40, 49, 65, 21, 21, 106, 80, 92, 81, 679, 4, 61, 6, 237, 12, 72, 74, 29, 95, 265, 35, 47, 1, 61, 397, 52, 72, 37, 51, 1, 81, 45, 435, 7, 36, 57, 86, 81, 72"
c = "1, 2, 3, 4, 5, 1, 2, 3, 4, 5"
d = "11, 15"
e = "7, 7, 7, 7, 7, 7, 7"
p bad_neighbors(a)
