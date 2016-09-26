require "ring_buffer"

describe RingBuffer do
  it "starts out empty" do
    arr = RingBuffer.new
    expect(arr.length).to eq(0)
    expect do
      arr[0]
    end.to raise_error("index out of bounds")
  end

  it "pushes/pops items" do
    arr = RingBuffer.new
    5.times { |i|
      arr.push(i)
    }

    expect(arr.length).to eq(5)
    5.times { |i| expect(arr[i]) == i }

    4.downto(0) do |i|
      expect(arr.pop).to eq(i)
    end
    expect(arr.length).to eq(0)
  end

  it "unshifts/shifts items into array" do
    arr = RingBuffer.new

    5.times { |i|
      arr.unshift(i)
    }
    expect(arr.length).to eq(5)
    5.times { |i|
      expect(arr[i]).to eq(4 - i)
    }

    4.downto(0) do |i|
      expect(arr.shift).to eq(i)
    end
    expect(arr.length).to eq(0)
  end

  it "correctly handles a mix of pushes/pops and shifts/unshifts" do
    arr = RingBuffer.new

    4.times do |i|
      arr.push(i)
      arr.unshift(i)
    end

    4.times do |i|
      expect(arr[i]).to eq(3-i)
      expect(arr[i+4]).to eq(i)
    end

    3.downto(0) do |i|
      expect(arr.shift).to eq(i)
      expect(arr.pop).to eq(i)
    end
  end

  it "can store more than 8 items" do
    arr = RingBuffer.new

    16.times { |i| arr.unshift(i) }

    16.times { |i| expect(arr[i]).to eq(15-i) }

  end

  it "correctly handles pushes/pops/shifts/unshifts after resizing" do
    arr = RingBuffer.new
    5.times do |i|
      arr.push(i)
      arr.unshift(i)
    end


    5.times do |i|
      expect(arr[i]).to eq(4-i)
      expect(arr[i+5]).to eq(i)
    end

    4.downto(0) do |i|
      expect(arr.shift).to eq(i)
      expect(arr.pop).to eq(i)
    end
  end

  it "raises error when shifting or popping when empty" do
    arr = RingBuffer.new
    expect do
      arr.pop
    end.to raise_error("index out of bounds")

    expect do
      arr.shift
    end.to raise_error("index out of bounds")
  end

  it "sets items at an index" do
    arr = RingBuffer.new

    5.times { arr.push(0) }
    5.times { |i| arr[i] = i }
    5.times { |i| expect(arr[i]).to eq(i) }
  end

  it "raises error when setting outside range" do
    arr = RingBuffer.new

    5.times { |i| arr.push(i) }

    expect do
      arr[5]
    end.to raise_error("index out of bounds")
  end

  describe "internals" do
    it "begins with a capacity of 8" do
      arr = RingBuffer.new
      expect(arr.send(:capacity)).to eq(8)
    end

    it "doubles capacity when filled" do
      arr = RingBuffer.new
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
    it "shifts/unshifts without O(n) copying" do
      arr = RingBuffer.new

      allow(arr.send(:store)).to receive(:[]=).and_call_original
      8.times do |i|
        arr.unshift(i)
      end

      # Should involve 8 sets to unshift, no more.
      expect(arr.send(:store)).to have_received(:[]=).exactly(8).times
    end
  end
end
