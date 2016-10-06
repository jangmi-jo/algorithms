require 'rspec'
require 'priority_map'

describe PriorityMap do
  let(:pm) { PriorityMap.new { |value1, value2| value1 <=> value2 } }

  describe 'initialize' do
    it "creates a map" do
      expect(pm.send(:map)).to be_a Hash
    end

    it "creates a priority queue from a BinaryMinHeap" do
      expect(pm.send(:queue)).to be_a BinaryMinHeap
    end
  end

  describe '#[]=' do
    describe 'with a new key' do
      before(:each) do
        pm["A"] = 10
      end

      it 'inserts the key and value into the map' do
        expect(pm.send(:map)["A"]).to eq(10)
      end

      it 'adds the key to the priority queue' do
        expect(pm.send(:queue).extract).to eq("A")
      end
    end

    describe 'with an existing key' do
      before(:each) do
        pm["B"] = 15
        pm["B"] = 5
      end

      it 'updates the key in the map with the value' do
        expect(pm.send(:map)["B"]).to eq(5)
      end

      it 'calls reduce on the heap to update the key' do
        expect(pm.send(:map)["B"]).to eq(5)
      end
    end
  end

  describe '#extract' do
    before(:each) do
      pm["A"] = 10
    end

    it 'extracts an item from priority queue when there is only one item' do
      expect(pm.extract).to eq(["A", 10])
    end

    it 'deletes the value from the map' do
      pm.extract
      expect(pm.send(:map)["A"]).to be nil
    end

    it 'extracts element in the correct order' do
      pm["B"] = 15
      pm["B"] = 5
      pm["C"] = 20

      p pm

      expect(pm.extract).to eq(["B", 5])
      expect(pm.extract).to eq(["A", 10])
      expect(pm.extract).to eq(["C", 20])
    end
  end

  describe 'helper methods' do
    before(:each) do
      pm["A"] = 10
      pm["B"] = 15
      pm["B"] = 5
    end

    describe '#count' do
      it 'counts the items in the heap' do
        expect(pm.count).to eq(2)
      end
    end

    describe '#has_key?' do
      it 'checks if the map includes a key' do
        expect(pm.has_key?("A")).to be true
        expect(pm.has_key?("D")).to be false
      end
    end

    describe '#empty?' do
      it 'only returns true when the heap is empty' do
        empty_pm = PriorityMap.new { |value1, value2| value1 <=> value2 }

        expect(pm.empty?).to be false
        expect(empty_pm.empty?).to be true
      end
    end
  end


end
