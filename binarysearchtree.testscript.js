const Tree = require('./binarysearchtree')

function makeArray (size, min, max) {
  const outArray = []
  for (let i = 0; i < size; i++) {
    const randomNumber = Math.trunc(Math.random() * (max - min), 0) + min
    outArray.push(randomNumber)
  }
  return outArray
}
function short (inArray) {
  let str = ''
  inArray.forEach(num => { str = str + `${num},` })
  return str.slice(0, -1)
}

const smallNums = makeArray(1000, 1, 100)
const bigNums = makeArray(10, 101, 200)

const myTree = new Tree(smallNums)
console.log('is our tree balanced?', myTree.isBalanced())
console.log('levelOrder():', short(myTree.levelOrder()))
console.log('preOrder():', short(myTree.preOrder()))
console.log('postOrder():', short(myTree.postOrder()))
console.log('inOrder():', short(myTree.inOrder()))
bigNums.forEach((num) => myTree.insert(num))
console.log('is our tree balanced?', myTree.isBalanced())
myTree.rebalance()
console.log('is our tree balanced?', myTree.isBalanced())
console.log('levelOrder():', short(myTree.levelOrder()))
console.log('preOrder():', short(myTree.preOrder()))
console.log('postOrder():', short(myTree.postOrder()))
console.log('inOrder():', short(myTree.inOrder()))
