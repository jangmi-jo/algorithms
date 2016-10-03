a = "{[]}()"

def parenthesis(line)
  res = []
  (0...line.size).each do |i|
    if ["[", "(", "{"].include?(line[i])
      res << line[i]
    elsif ["]", ")", "}"].include?(line[i])
      if line[i] == "]" && res[-1] == "["
        res.pop
      elsif line[i] == ")" && res[-1] == "("
        res.pop
      elsif line[i] == "}" && res[-1] == "{"
        res.pop
      else
        return false
      end
    end
  end
  return true if res.empty?
  false
end

p parenthesis(a)
