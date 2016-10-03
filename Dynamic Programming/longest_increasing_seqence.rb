

def longest_increasing_seq(line)
  ary = line.split(", ").map{|i| i.to_i }
  res = [ary[0]]
  (1...ary.size).each do |i|
    if ary[i] > res[-1]
      res << ary[i]
    elsif ary[i] < res[-1] && ary[i] > res[-2]
      res.pop
      res << ary[i]
    end
  end
  res
end

a = "15, 27, 14, 38, 26, 55, 46, 65, 0, 85"
p longest_increasing_seq(a)
