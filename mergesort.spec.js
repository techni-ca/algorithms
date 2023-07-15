const mergeSort = require('./mergesort')
const mergeSort2 = require('./mergesort2')
const longArray = []
for (let i = 0; i < 10000; i++) {
  const randomNumber = Math.trunc(Math.random() * 10000,0)
  longArray.push(randomNumber)
}
const sortedLongArray = [...longArray].sort((a, b) => (a-b))

describe('mergeSort()', function() {
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
  test('10000 element array (generated randomly)', function() {
    expect(mergeSort(longArray)).toEqual(sortedLongArray)
  })
})
describe('mergeSort2()', function() {
  test('handles empty set', function() {
    expect(mergeSort2([])).toEqual([])
  })
  test('handles ordered array', function() {
    expect(mergeSort2([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })
  test('handles reverse ordered array', function() {
    expect(mergeSort2([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })
  test('handles mixed up array', function() {
    expect(mergeSort2([3, 2, 5, 1, 4])).toEqual([1, 2, 3, 4, 5])
  })
  test('handles duplicates', function() {
    expect(mergeSort2([1, 2, 1, 2, 1])).toEqual([1, 1, 1, 2, 2])
  })
  test('handles longer numbers', function() {
    expect(mergeSort2([1,10,3,30,222222])).toEqual([1,3,10,30,222222])
  })
  test('handles characters', function() {
    expect(mergeSort2(['b','c','a'])).toEqual(['a','b','c'])
  })
  test('handles strings', function() {
    expect(mergeSort2(['one', 'two', 'three', 'four', 'five'])).toEqual(['five', 'four', 'one', 'three', 'two'])
  })
  test('10000 element array (generated randomly)', function() {
    expect(mergeSort2(longArray)).toEqual(sortedLongArray)
  })
})


