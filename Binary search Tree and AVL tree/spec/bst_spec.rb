require 'rspec'
require 'bst'

describe BSTNode do
  let(:node) { BSTNode.new(7) }

  it 'should take in a value' do
    expect(node.value).to eq(7)
  end

  it 'should initialize left and right as nil' do
    expect(node.left).to eq(nil)
    expect(node.right).to eq(nil)
  end
end

describe BinarySearchTree do

  describe 'class methods' do
    let(:node) { BSTNode.new(7) }

    describe '::insert!' do
      it 'returns a new BSTNode if is not given a node' do
        node = BinarySearchTree.insert!(nil, 8)
        expect(node).to be_a BSTNode
        expect(node.value).to be(8)
      end

      it 'returns the passed in node if given a node' do
        returned_node = BinarySearchTree.insert!(node, 8)
        expect(returned_node).to be node
      end

      describe 'if the value is less than or equal to the node\'s value' do

        it 'calls ::insert! with the left child' do
          BinarySearchTree.insert!(node, 5)
          expect(node.left.value).to be(5)
        end
      end

      describe 'if the value is greater than the node\'s value' do

        it 'calls ::insert! with the right child' do
          BinarySearchTree.insert!(node, 9)
          expect(node.right.value).to be(9)
        end
      end

      describe 'with many insertions' do
        it 'inserts properly' do
          [4,2,9,9,10].each do |n|
            BinarySearchTree.insert!(node, n)
          end

          expect(node.left.value).to be(4)
          expect(node.left.left.value).to be(2)
          expect(node.right.value).to be(9)
          expect(node.right.left.value).to be(9)
          expect(node.right.right.value).to be(10)
        end
      end
    end

    describe 'min and max' do
      before(:each) do
        [4,2,9,9,10].each do |n|
          BinarySearchTree.insert!(node, n)
        end
      end

      describe '::min' do
        it 'returns the minimum node of the node and all its children' do
          expect(BinarySearchTree.min(node).value).to be 2
        end
      end

      describe '::max' do
        it 'returns the maximum of the node and all its children' do
          expect(BinarySearchTree.max(node).value).to be 10
        end
      end
    end

    describe '::find!' do
      before(:each) do
        [4,2,9,9,10].each do |n|
          BinarySearchTree.insert!(node, n)
        end
      end

      it 'returns nil if it can\'t find the node' do
        expect(BinarySearchTree.find!(node, 100)).to be_nil
      end

      it 'returns the node that it\'s searching for' do
        expect(BinarySearchTree.find!(node, 4).value).to be 4
        expect(BinarySearchTree.find!(node, 9).value).to be 9
      end
    end

    describe '::height!' do
      it 'returns -1 when no node is given' do
        expect(BinarySearchTree.height!(nil)).to be -1
      end

      it 'returns 0 for a node with no children' do
        expect(BinarySearchTree.height!(node)).to be 0
      end

      it 'returns correctly for deeper trees' do
        BinarySearchTree.insert!(node, 2)
        expect(BinarySearchTree.height!(node)).to be 1

        BinarySearchTree.insert!(node, 1)
        expect(BinarySearchTree.height!(node)).to be 2

        BinarySearchTree.insert!(node, 9)
        expect(BinarySearchTree.height!(node)).to be 2

        BinarySearchTree.insert!(node, 0)
        expect(BinarySearchTree.height!(node)).to be 3
      end
    end

    describe '::delete_min!' do
      it 'returns nil when no node is passed in' do
        expect(BinarySearchTree.delete_min!(nil)).to be_nil
      end

      it 'works when a node with no children is passed in' do
        expect(BinarySearchTree.delete_min!(node)).to be_nil
      end

      it 'works when a node with children is passed in ' do
        [1,2,3,8,9].each { |n| BinarySearchTree.insert!(node, n) }
        expect(BinarySearchTree.find!(node, 1)).not_to be_nil
        BinarySearchTree.delete_min!(node)
        expect(BinarySearchTree.find!(node, 1)).to be_nil
        expect(BinarySearchTree.find!(node, 2)).not_to be_nil
        BinarySearchTree.delete_min!(node)
        expect(BinarySearchTree.find!(node, 2)).to be_nil
      end
    end

    describe '::delete!' do
      it 'returns nil if no node is passed in' do
        expect(BinarySearchTree.delete!(nil, 7)).to be_nil
      end

      it 'deletes a node in a simple case' do
        returned_node = BinarySearchTree.delete!(node, 7)
        expect(returned_node).to be_nil
      end

      it 'deletes a the correct node from a node with children' do
        BinarySearchTree.insert!(node, 8)
        returned_node = BinarySearchTree.delete!(node, 8)
        expect(BinarySearchTree.find!(node, 8)).to be_nil
      end

      it 'works for a more complicated case' do
        [1,2,3,8,9].each { |n| BinarySearchTree.insert!(node, n) }
        expect(BinarySearchTree.find!(node, 3)).not_to be_nil
        returned_node = BinarySearchTree.delete!(node, 3)
        expect(BinarySearchTree.find!(node, 3)).to be_nil
        expect(BinarySearchTree.find!(node, 9)).not_to be_nil
        returned_node = BinarySearchTree.delete!(node, 9)
        expect(BinarySearchTree.find!(node, 9)).to be_nil
      end
    end

    describe '::inorder!' do
      it 'returns an empty array if there are no nodes' do
        expect(BinarySearchTree.inorder!(nil)).to be_empty
      end

      it 'returns an ordered array of values in the tree' do
        values = [1,2,3,8,9]
        values.each { |n| BinarySearchTree.insert!(node, n) }
        expect(BinarySearchTree.inorder!(node)).to eq([1,2,3,7,8,9])
      end
    end
  end

  describe 'instance methods' do
    let(:tree) { BinarySearchTree.new }
    let(:values) { [4,1,2,3,5,6,7] }

    before(:each) do
      values.each do |val|
        tree.insert(val)
      end
    end

    describe '#find' do
      it 'returns nil if it can\'t find a value' do
        expect(BinarySearchTree.new.find(7)).to be_nil
      end
    end

    describe '#insert' do
      it 'inserts values' do
        values.each do |n|
          expect(tree.find(n).value).to be n
        end
      end
    end


    describe '#inorder' do
      it 'returns correctly ordered values' do
        expect(tree.inorder).to eq(values.sort)
      end
    end

    describe '#preorder' do
      it 'returns correctly ordered values' do
        expect(tree.preorder).to eq(values)
      end
    end

    describe '#postorder' do
      it 'returns correctly ordered values' do
        expect(tree.postorder).to eq([3, 2, 1, 7, 6, 5, 4])
      end
    end

    describe '#height' do
      it 'returns -1 for an empty tree' do
        expect(BinarySearchTree.new.height).to be -1
      end

      it 'returns the correct height' do
        expect(tree.height).to be 3
      end
    end

    describe '#min' do
      it 'returns the minimum value node' do
        expect(tree.min.value).to be 1
      end
    end

    describe '#max' do
      it 'returns the maximum value node' do
        expect(tree.max.value).to be 7
      end
    end

    describe '#delete' do
      it 'correctly deletes' do
        tree.delete(7)
        expect(tree.find(7)).to be_nil
      end
    end
  end
end
