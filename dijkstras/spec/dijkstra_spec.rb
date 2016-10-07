require 'rspec'
require 'dijkstra1'
require 'dijkstra2'

describe 'dijkstra1' do
  let(:v1) { Vertex.new("A") }
  let(:v2) { Vertex.new("B") }
  let(:v3) { Vertex.new("C") }
  let(:v4) { Vertex.new("D") }

  before(:each) do
    Edge.new(v1, v2, 10)
    Edge.new(v1, v3, 5)
    Edge.new(v3, v2, 3)
    Edge.new(v1, v4, 9)
    Edge.new(v3, v4, 2)
  end

  it 'should take in a vertex' do
    expect{ dijkstra1(v1) }.to_not raise_error
  end

  it 'should sort the vertices correctly' do
    output = dijkstra1(v1).map do |v, data|
      [v.value, data[:cost]]
    end

    expect(output).to eq([["A", 0], ["C", 5], ["D", 7], ["B", 8]])
  end

end

describe 'dijkstra2' do
  let(:v1) { Vertex.new("A") }
  let(:v2) { Vertex.new("B") }
  let(:v3) { Vertex.new("C") }
  let(:v4) { Vertex.new("D") }

  before(:each) do
    Edge.new(v1, v2, 10)
    Edge.new(v1, v3, 5)
    Edge.new(v3, v2, 3)
    Edge.new(v1, v4, 9)
    Edge.new(v3, v4, 2)
  end

  it 'should take in a vertex' do
    expect{ dijkstra2(v1) }.to_not raise_error
  end

  it 'should sort the vertices correctly' do
    output = dijkstra2(v1).map do |v, data|
      [v.value, data[:cost]]
    end

    expect(output).to eq([["A", 0], ["C", 5], ["D", 7], ["B", 8]])
  end

end
