
def minimum_steps_to_one(num, res = Hash.new(-1))
  return 0 if num == 1
  return res[num] if res[num] != -1
  r = 1 + minimum_steps_to_one(num-1, res)
  r = [r, 1+minimum_steps_to_one(num/2, res)].min if num % 2 == 0
  r = [r, 1+minimum_steps_to_one(num/3, res)].min if num % 3 == 0
  res[num] = r
end

def minimum_steps_dp(num)
  res = { 1=>0 }
  (2..num).each do |i|
    temp = []
    temp << res[i-1] + 1
    temp << res[i/2] + 1 if i % 2 == 0
    temp << res[i/3] + 1 if i % 3 == 0
    res[i] = temp.min
  end
  res[num]
end

p minimum_steps_to_one(37)
p minimum_steps_dp(37)
