const Tree = require('./binarysearchtree')

const myTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
myTree.prettyPrint()
console.log(myTree.levelOrder())
console.log(myTree.inOrder())
console.log(myTree.preOrder())
console.log(myTree.postOrder())
function printValue(node) {
  console.log(node.value)
}