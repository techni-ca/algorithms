const Tree = require('./binarysearchtree')

const myTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
myTree.prettyPrint()

Tree.prettyPrint(myTree.find(32))