
class Array
  def hash
    hashed_result = size
    size.times do |i|
      hashed_result += i * self[i].hash
    end
    hashed_result
  end
end

class String
  def hash
    hashed_result = size
    size.times do |i|
      hashed_result += i * self[i].ord.hash
    end
    hashed_result
  end
end

class Hash
  def hash
    hashed_result = 0
    keys.size.times do |i|
      hashed_result += keys[i].hash
      hashed_result += values[i].hash
    end
    hashed_result
  end
end
