const Tree = require('./binarysearchtree')

const myTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
myTree.prettyPrint()
console.log(myTree.isBalanced())

const anotherTree = new Tree([1])
anotherTree.insert(2)
anotherTree.insert(3)
anotherTree.insert(4)
anotherTree.insert(5)
anotherTree.insert(6)
anotherTree.insert(7)

anotherTree.prettyPrint()
console.log(anotherTree.isBalanced())
anotherTree.rebalance()
anotherTree.prettyPrint()
console.log(anotherTree.isBalanced())
function getHeight(node) {
  console.log(node.value,node.height())
}
function printValue(node) {
  console.log(node.value)
}
