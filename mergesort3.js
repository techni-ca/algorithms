function mergeSort (arrayIn) {
  if (arrayIn.length < 2) return arrayIn
  const halfway = Math.trunc(arrayIn.length / 2, 0)
  const left = mergeSort(arrayIn.slice(0, halfway))
  const right = mergeSort(arrayIn.slice(halfway))
  const arrayOut = []
  let leftPointer = 0
  let rightPointer = 0
  while (leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] < right[rightPointer]) {
      arrayOut.push(left[leftPointer++])
    } else {
      arrayOut.push(right[rightPointer++])
    }
  }
  return arrayOut.concat(left).concat(right)
}

module.exports = mergeSort