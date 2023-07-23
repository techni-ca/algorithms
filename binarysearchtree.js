class Node {
  constructor (inValue, left, right) {
    this.value = inValue
    this.leftNode = left
    this.rightNode = right
  }
}
class Tree {
  constructor (inArray) {
    inArray.sort().filter(function (element, index, array) {
      return (index === 0 || array[index - 1] !== element)
    })
    this.root = buildTree(inArray.sort())
  }
  buildTree (sortedArray) {
    const halfway = trunc(sortedArray.length / 2,0)
    const centreOfArray = sortedArray[halfway]
    const leftOfArray = sortedArray.slice(0,halfway)
    const rightOfArray = sortedArray.slice(halfway + 1)
    const leftNode = (leftOfArray === []) ? null : this.buildTree(leftOfArray)
    const rightNode = (rightOfArray === []) ? null : this.buildTree(rightOfArray)
    return new Node(centreOfArray, leftNode, rightNode)
  }
}

module.exports = Tree
