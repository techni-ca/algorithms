class Node {
  constructor (inValue, left, right) {
    this.value = inValue
    this.leftNode = left
    this.rightNode = right
  }

  insert (newValue) {
    if (newValue < this.value) {
      if (this.leftNode === null) {
        this.leftNode = new Node(newValue, null, null)
        return true
      }
      return this.leftNode.insert(newValue)
    }
    if (newValue > this.value) {
      if (this.rightNode === null) {
        this.rightNode = new Node(newValue, null, null)
        return true
      }
      return this.rightNode.insert(newValue)
    }
    return false
  }

  delete (oldValue) {
    if (oldValue < this.value) {
      if (this.leftNode === null) {
        return false
      }
      if (
        this.leftNode.value === oldValue &&
        this.leftNode.leftNode === null &&
        this.leftNode.rightNode === null
      ) {
        this.leftNode = null
        return true
      }
      return this.leftNode.delete(oldValue)
    }
    if (oldValue > this.value) {
      if (this.rightNode === null) {
        return false
      }
      if (
        this.rightNode.value === oldValue &&
        this.rightNode.leftNode === null &&
        this.rightNode.rightNode === null
      ) {
        this.rightNode = null
        return true
      }
      return this.rightNode.delete(oldValue)
    }
    if (this.leftNode === null) {
      this.value = this.rightNode.value
      this.leftNode = this.rightNode.leftNode
      this.rightNode = this.rightNode.rightNode
      return true
    }
    if (this.rightNode === null) {
      this.value = this.leftNode.value
      this.rightNode = this.leftNode.rightNode
      this.leftNode = this.leftNode.leftNode
      return true
    }
    let nodeBelow = this.leftNode
    let nodeAbove = this.rightNode
    while (true) {
      nodeBelow = nodeBelow.rightNode
      if (nodeBelow.rightNode === null) {
        this.value = nodeBelow.value
        return this.leftNode.delete(this.value)
      }
      nodeAbove = nodeAbove.leftNode
      if (nodeAbove.leftNode === null) {
        this.value = nodeAbove.value
        return this.rightNode.delete(this.value)
      }
    }
  }

  find (valueToFind) {
    if (valueToFind > this.value) { return this.rightNode === null ? null : this.rightNode.find(valueToFind) }
    if (valueToFind < this.value) { return this.leftNode === null ? null : this.leftNode.find(valueToFind) }
    return this
  }

  height () {
    const leftHeight = this.leftNode === null ? 0 : this.leftNode.height()
    const rightHeight = this.rightNode === null ? 0 : this.rightNode.height()
    return Math.max(leftHeight, rightHeight) + 1
  }

  isBalanced () {
    const leftHeight = this.leftNode === null ? 0 : this.leftNode.height()
    const rightHeight = this.rightNode === null ? 0 : this.rightNode.height()
    return Math.abs(leftHeight - rightHeight) < 2
  }
}
class Tree {
  constructor (inArray) {
    inArray.sort((a, b) => a - b)
    inArray = inArray.filter((e, i, a) => i === 0 || a[i - 1] !== e)
    this.root = this.buildTree(inArray)
  }

  buildTree (sortedArray) {
    const halfway = Math.trunc(sortedArray.length / 2, 0)
    const centreOfArray = sortedArray[halfway]
    const leftOfArray = sortedArray.slice(0, halfway)
    const rightOfArray = sortedArray.slice(halfway + 1)
    const leftNode = leftOfArray.length ? this.buildTree(leftOfArray) : null
    const rightNode = rightOfArray.length ? this.buildTree(rightOfArray) : null
    return new Node(centreOfArray, leftNode, rightNode)
  }

  prettyPrint () {
    Tree.prettyPrint(this.root)
  }

  static prettyPrint (node, prefix = '', isLeft = true) {
    if (node === null) {
      return
    }
    if (node.rightNode !== null) {
      Tree.prettyPrint(
        node.rightNode,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false
      )
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`)
    if (node.leftNode !== null) {
      Tree.prettyPrint(
        node.leftNode,
        `${prefix}${isLeft ? '    ' : '│   '}`,
        true
      )
    }
  }

  insert (value) {
    return this.root.insert(value)
  }

  delete (value) {
    if (this.root === null) return false
    if (
      this.root.value === value &&
      this.root.leftNode === null &&
      this.root.rightNode === null
    ) {
      this.root = null
      return true
    }
    return this.root.delete(value)
  }

  find (value) {
    return this.root.find(value)
  }

  levelOrder (inCallback = null) {
    const queue = [this.root]
    let index = 0
    while (index < queue.length) {
      const current = queue[index]
      if (current.leftNode !== null) queue.push(current.leftNode)
      if (current.rightNode !== null) queue.push(current.rightNode)
      if (inCallback !== null) inCallback(current)
      queue[index] = current.value
      index++
    }
    if (inCallback === null) return queue
  }

  inOrder (inCallback = null) {
    return this._depthFirst('in', inCallback)
  }

  preOrder (inCallback = null) {
    return this._depthFirst('pre', inCallback)
  }

  postOrder (inCallback = null) {
    return this._depthFirst('post', inCallback)
  }

  _depthFirst (orderType, inCallback = null) {
    const list = this._depthFirstDetail(this.root, orderType)
    const output = []
    list.forEach(node => {
      if (inCallback === null) output.push(node.value)
      else inCallback(node)
    })
    if (inCallback === null) return output
  }

  _depthFirstDetail (node, orderType) {
    if (node === null) return []
    const left = this._depthFirstDetail(node.leftNode, orderType)
    const right = this._depthFirstDetail(node.rightNode, orderType)
    switch (orderType) {
      case 'in':
        return left.concat([node]).concat(right)
      case 'pre':
        return [node].concat(left).concat(right)
      case 'post':
        return left.concat(right).concat([node])
    }
  }

  depth (node) {
    return this.root.height() - node.height()
  }

  isBalanced () {
    let result = true
    this.levelOrder(node => {
      result = result && node.isBalanced()
    })
    return result
  }

  rebalance () {
    const newTreeArray = this.inOrder()
    this.root = this.buildTree(newTreeArray)
  }
}

module.exports = Tree
