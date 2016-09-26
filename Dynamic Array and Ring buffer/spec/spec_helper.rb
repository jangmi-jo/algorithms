RSpec.configure do |config|
  config.register_ordering(:global) do |items|
    items.sort_by do |group|
      [DynamicArray, RingBuffer].index(group.metadata[:described_class])
    end
  end
end
