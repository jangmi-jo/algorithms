class BSTNode
  attr_accessor :left, :right
  attr_reader :value

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end
end

class BinarySearchTree
  def initialize
    @root = nil
  end

  def insert(value)
    @root = BinarySearchTree.insert!(@root, value)
  end

  def find(value)
    BinarySearchTree.find!(@root, value)
  end

  def inorder
    BinarySearchTree.inorder!(@root)
  end

  def postorder
    BinarySearchTree.postorder!(@root)
  end

  def preorder
    BinarySearchTree.preorder!(@root)
  end

  def height
    BinarySearchTree.height!(@root)
  end

  def min
    BinarySearchTree.min(@root)
  end

  def max
    BinarySearchTree.max(@root)
  end

  def delete(value)
    BinarySearchTree.delete!(@root, value)
  end

  def self.insert!(node, value)
    return BSTNode.new(value) if node.nil?
    if value <= node.value
      node.left = insert!(node.left, value)
    else
      node.right = insert!(node.right, value)
    end
    node
  end

  def self.find!(node, value)
    return node if node.nil? || node.value == value
    value <= node.value ? find!(node.left, value) : find!(node.right, value)
  end

  def self.preorder!(node)
    return [] if node.nil?
    res = []
    res << node.value
    res.concat(preorder!(node.left)) unless node.left.nil?
    res.concat(preorder!(node.right)) unless node.right.nil?
    res
  end

  def self.inorder!(node)
    return [] if node.nil?
    res = []
    res.concat(inorder!(node.left)) unless node.left.nil?
    res << node.value
    res.concat(inorder!(node.right)) unless node.right.nil?
    res
  end

  def self.postorder!(node)
    return [] if node.nil?
    res = []
    res.concat(postorder!(node.left)) unless node.left.nil?
    res.concat(postorder!(node.right)) unless node.right.nil?
    res << node.value
    res
  end

  def self.height!(node)
    return -1 if node.nil?
    return 0 if node.left.nil? && node.right.nil?
    [height!(node.left), height!(node.right)].max + 1
  end

  def self.max(node)
    node.right ? max(node.right) : node
  end

  def self.min(node)
    node.left ? min(node.left) : node
  end

  def self.delete_min!(node)
    return nil if node.nil?
    if node.left.nil?
      node.right.nil? ? nil : node.right
    else
      node.left = delete_min!(node.left)
    end
  end

  def self.delete!(node, value)
    return nil if node.nil?
    if value == node.value
      if node.left.nil? && node.right.nil?
        # no children
        nil
      elsif node.left.nil?
        # only right child
        node.right
      elsif node.right.nil?
        # only left child
        node.left
      else
        # both children
        delete_min!(node.right)
      end
    elsif value <= node.value
      node.left = delete!(node.left, value)
    else
      node.right = delete!(node.right, value)
    end
  end
end
