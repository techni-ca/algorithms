const mergeSort = require('./mergesort')

const longArray = []
const sortedLongArray = []
for (let i = 0; i < 1000000; i++) {
  const randomNumber = Math.trunc(Math.random() * 1000000,0)
  longArray.push(randomNumber)
  sortedLongArray.push(randomNumber)
}
describe('builtInSort', () => {
  test('million element array (generated randomly)', function() {
    expect(sortedLongArray.sort((a, b) => (a - b))).toEqual(sortedLongArray)
  })
})
describe('mergeSort', () => { myTest(mergeSort) })

function myTest(mergeSort) {
  test('handles empty set', function() {
    expect(mergeSort([])).toEqual([])
  })
  test('handles ordered array', function() {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })
  test('handles reverse ordered array', function() {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })
  test('handles mixed up array', function() {
    expect(mergeSort([3, 2, 5, 1, 4])).toEqual([1, 2, 3, 4, 5])
  })
  test('handles duplicates', function() {
    expect(mergeSort([1, 2, 1, 2, 1])).toEqual([1, 1, 1, 2, 2])
  })
  test('handles longer numbers', function() {
    expect(mergeSort([1,10,3,30,222222])).toEqual([1,3,10,30,222222])
  })
  test('handles characters', function() {
    expect(mergeSort(['b','c','a'])).toEqual(['a','b','c'])
  })
  test('handles strings', function() {
    expect(mergeSort(['one', 'two', 'three', 'four', 'five'])).toEqual(['five', 'four', 'one', 'three', 'two'])
  })
  test('handles numeric strings', function () {
    expect(mergeSort(['1','10','100','200','20','2'])).toEqual(['1','10','100','2','20','200'])
  })
  test('million element array (generated randomly)', function() {
    expect(mergeSort(longArray)).toEqual(sortedLongArray)
  })
}