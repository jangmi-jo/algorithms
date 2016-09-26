require "dynamic_array"

describe DynamicArray do
  it "starts out empty" do
    arr = DynamicArray.new
    expect(arr.length).to eq(0)
    expect do
      arr[0]
    end.to raise_error("index out of bounds")
  end

  it "pushes/pops items" do
    arr = DynamicArray.new
    5.times { |i| arr.push(i) }

    expect(arr.length).to eq(5)
    5.times { |i| expect(arr[i]) == i }

    4.downto(0) do |i|
      expect(arr.pop).to eq(i)
    end
    expect(arr.length).to eq(0)
  end

  it "unshifts/shifts items into array" do
    arr = DynamicArray.new

    5.times { |i| arr.unshift(i) }
    expect(arr.length).to eq(5)
    5.times { |i| expect(arr[i]).to eq(4 - i) }

    4.downto(0) do |i|
      expect(arr.shift).to eq(i)
    end
    expect(arr.length).to eq(0)
  end

  it "raises error when shifting or popping when empty" do
    arr = DynamicArray.new

    expect do
      arr.pop
    end.to raise_error("index out of bounds")

    expect do
      arr.shift
    end.to raise_error("index out of bounds")
  end

  it "sets items at an index" do
    arr = DynamicArray.new

    5.times { arr.push(0) }
    5.times { |i| arr[i] = i }
    5.times { |i| expect(arr[i]).to eq(i) }
  end

  it "raises error when setting outside range" do
    arr = DynamicArray.new

    5.times { |i| arr.push(i) }
    expect do
      arr[5]
    end.to raise_error("index out of bounds")
  end

  describe "internals" do
    it "begins with a capacity of 8" do
      arr = DynamicArray.new
      expect(arr.send(:capacity)).to eq(8)
    end

    it "doubles capacity when filled" do
      arr = DynamicArray.new
      store = arr.send(:store)

      8.times do |i|
        arr.push(i)

        # do not change the store until resize
        expect(arr.send(:store)).to be(store)
        expect(arr.send(:capacity)).to eq(8)
      end

      # trigger resize
      arr.push(8)

      # capacity should be doubled
      expect(arr.send(:capacity)).to eq(16)
    end
  end
end
