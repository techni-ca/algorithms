function mergeSort (arrayIn) {
  for (let blockSize = 1; blockSize < arrayIn.length; blockSize *= 2) {
    const arrayOut = []
    for (let i = 0; i * blockSize < arrayIn.length; i+=2) {
      let leftPointer = i * blockSize
      let rightPointer = leftPointer + blockSize
      if (rightPointer > arrayIn.length) rightPointer = arrayIn.length
      const leftEnd = rightPointer
      const rightEnd = Math.min(arrayIn.length, rightPointer + blockSize)

      while (leftPointer < leftEnd || rightPointer < rightEnd) {
        if (
          rightPointer === rightEnd ||
          (leftPointer < leftEnd && arrayIn[leftPointer] < arrayIn[rightPointer])
        ) {
          arrayOut.push(arrayIn[leftPointer++])
        } else {
          arrayOut.push(arrayIn[rightPointer++])
        }
      }
    }
    arrayIn = arrayOut
  }
  return arrayIn
}

module.exports = mergeSort
