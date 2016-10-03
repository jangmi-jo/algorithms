
def zigzag(line)
  ary = line.split(",").map{|n| n.to_i }
  return ary if ary.size <= 1
  res = [ary[0], ary[1]]
  (2...ary.size).each do |i|
    if res[-2] - res[-1] > 0
      if res[-1] - ary[i] < 0
        res << ary[i]
      elsif ary[i] < res[-1]
        res.pop
        res << ary[i]
      end
    else
      if res[-1] - ary[i] > 0
        res << ary[i]
      elsif ary[i] > res[-1]
        res.pop
        res << ary[i]
      end
    end
  end
  res.size
end

a = "374, 40, 854, 203, 203, 156, 362, 279, 812, 955, 600, 947, 978, 46, 100, 953, 670, 862, 568, 188, 67, 669, 810, 704, 52, 861, 49, 640, 370, 908, 477, 245, 413, 109, 659, 401, 483, 308, 609, 120, 249, 22, 176, 279, 23, 22, 617, 462, 459, 244"
p zigzag(a)
