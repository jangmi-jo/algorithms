require 'rspec'
require 'graph'

describe Vertex do
  describe '#initialize' do
    subject(:vertex) { Vertex.new(7) }

    it 'stores a value' do
      expect(vertex.value).to eq(7)
    end

    it 'initially sets in_edges as an empty array' do
      expect(vertex.in_edges).to be_an_instance_of(Array)
      expect(vertex.in_edges).to be_empty
    end

    it 'initially sets out_edges as an empty array' do
      expect(vertex.in_edges).to be_an_instance_of(Array)
      expect(vertex.out_edges).to be_empty
    end
  end
end

describe Edge do
  let(:from_vertex) { Vertex.new(nil) }
  let(:to_vertex) { Vertex.new(nil) }
  subject(:edge) { Edge.new(from_vertex, to_vertex) }

  describe '#initialize' do
    it 'stores a from_vertex' do
      expect(edge.from_vertex).to be(from_vertex)
    end

    it 'stores a to_vertex' do
      expect(edge.to_vertex).to be(to_vertex)
    end

    it 'stores a cost which defaults to 1' do
      expect(edge.cost).to eq(1)
    end

    it "adds itself to the to_vertex's edges" do
      expect(to_vertex.in_edges).to include(edge)
    end

    it "adds itself to the from_vertex's edges" do
      expect(from_vertex.out_edges).to include(edge)
    end
  end

  describe '#destroy' do
    before(:each) do
      edge.destroy!
    end

    it "deletes itself from its to_vertex and from_vertex's edges" do
      expect(to_vertex.in_edges).to_not include(edge)
      expect(from_vertex.out_edges).to_not include(edge)
    end

    it "sets its vertices to nil" do
      expect(edge.from_vertex).to be_nil
      expect(edge.to_vertex).to be_nil
    end
  end
end
