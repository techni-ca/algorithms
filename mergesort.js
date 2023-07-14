function mergeSort (arrayIn) {
  if (arrayIn.length < 2) return arrayIn
  const halfway = Math.trunc(arrayIn.length / 2, 0)
  const left = arrayIn.slice(0, halfway)
  const right = arrayIn.slice(halfway)
  return merge(mergeSort(left), mergeSort(right))
}
function merge (array1, array2) {
  if (array1.length === 0) return array2
  if (array2.length === 0) return array1
  if (array1[0] < array2[0]) {
    return [array1[0]].concat(merge(array1.slice(1), array2))
  }
  return [array2[0]].concat(merge(array1, array2.slice(1)))
}

module.exports = mergeSort
