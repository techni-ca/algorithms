function mergeSort (arrayIn) {
  if (arrayIn.length < 2) return arrayIn
  const halfway = Math.trunc(arrayIn.length / 2, 0)
  const left = arrayIn.slice(0, halfway)
  const right = arrayIn.slice(halfway)
  return merge(mergeSort(left), mergeSort(right))
}
function merge (array1, array2) {
  const a1l = array1.length - 1
  const a2l = array2.length - 1
  if (a1l < 0) return array2
  if (a2l < 0) return array1
  let last = 0
  if (array1[a1l] < array2[a2l]) {
    last = array2.pop()
  } else {
    last = array1.pop()
  } 
  return merge(array1, array2).concat([last])
}

module.exports = mergeSort
