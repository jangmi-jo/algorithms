require 'rspec'
require 'p04_linked_list'

describe LinkedList do
  let(:k_v_pairs) do
    { first: 1, second: 2, third: 3 }
  end

  let(:list) do
    list = LinkedList.new
    k_v_pairs.each do |key, val|
      list.insert(key, val)
    end
    list
  end

  describe "#get" do
    it "gets by key" do
      expect(list.get(:first)).to eq(1)
      expect(list.get(:second)).to eq(2)
      expect(list.get(:third)).to eq(3)
    end

    it "returns nil for absent keys" do
      expect(list.get(1)).to be_nil
    end
  end

  describe "#remove" do
    it "removes a link by key" do
      expect(list.get(:first)).to eq(1)
      list.remove(:first)
      expect(list.get(:first)).to be_nil
    end
  end

  describe "#include?" do
    it "returns true if a key is present" do
      expect(list.include?(:first)).to be true
    end

    it "returns false if a key is not in the list" do
      expect(list.include?(:fourth)).to be false
    end
  end

  describe "#each" do
    it "enumerates over the links and yields each successive link" do
      list_vals_ordered = k_v_pairs.values
      list_vals_yielded = []
      list.each do |link|
        list_vals_yielded << link.val
      end
      expect(list_vals_yielded).to eq(list_vals_ordered)
    end

    it "includes Enumerable module" do
      expect(list.class.ancestors).to include(Enumerable)
    end
  end
end
