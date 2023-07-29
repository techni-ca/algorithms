/* global describe,test,expect */
const LinkedList = require('./linkedlist')

describe('LinkedList', () => {
  test('can be empty', function () {
    expect(new LinkedList().toString()).toEqual('null')
  })
  test('can hold a null value', function () {
    expect(new LinkedList(null).toString()).toEqual('(null) -> null')
  })
  test('can hold a single value', function () {
    expect(new LinkedList(1).toString()).toEqual('(1) -> null')
  })
  test('can hold a longer list', function () {
    expect(listOfSize(9).toString()).toEqual('(1) -> (2) -> (3) -> (4) -> (5) -> (6) -> (7) -> (8) -> (9) -> null')
  })
  test('append works', function () {
    expect(new LinkedList().append(1)).toEqual(new LinkedList(1))
    expect(new LinkedList(1).append(2).toString()).toEqual('(1) -> (2) -> null')
  })
  test('prepend works', function () {
    expect(new LinkedList().prepend(1)).toEqual(new LinkedList(1))
    expect(new LinkedList(1).prepend(2).toString()).toEqual('(2) -> (1) -> null')
  })
  test('size() works for empty set', function () {
    expect(new LinkedList().size()).toEqual(0)
  })
  test('size() works for a single value', function () {
    expect(new LinkedList('one').size()).toEqual(1)
  })
  test('size() works for a longer list', function () {
    expect(listOfSize(100).size()).toEqual(100)
  })
  test('head returns null on empty set', function () {
    expect(new LinkedList().head()).toEqual(null)
  })
  test('head returns only node on list of one', function () {
    expect(new LinkedList(1).head().value).toEqual(1)
  })
  test('head returns first node on longer set', function () {
    expect(listOfSize(5).head().value).toEqual(1)
  })
  test('tail returns null on empty set', function () {
    expect(new LinkedList().tail()).toEqual(null)
  })
  test('tail returns only node on list of one', function () {
    expect(new LinkedList(1).tail().value).toEqual(1)
  })
  test('tail returns last node on longer set', function () {
    expect(listOfSize(5).tail().value).toEqual(5)
  })
  test('at(0) returns null (first element is index = 1)', function () {
    expect(new LinkedList().at(0)).toEqual(null)
    expect(new LinkedList(1).at(0)).toEqual(null)
  })
  test('at(1) returns null on empty set, first element otherwise', function () {
    expect(new LinkedList().at(1)).toEqual(null)
    expect(listOfSize(5).at(1).value).toEqual(1)
  })
  test('at(3) returns null on set smaller than 3, third element otherwise', function () {
    expect(listOfSize(2).at(3)).toEqual(null)
    expect(listOfSize(3).at(3).value).toEqual(3)
    expect(listOfSize(10).at(3).value).toEqual(3)
  })
  test('pop removes the last element', function () {
    const myLinkedList = listOfSize(10)
    expect(myLinkedList.pop().value).toEqual(10)
    expect(myLinkedList.tail().value).toEqual(9)
  })
  test('pop on list of size 1 leaves empty list', function () {
    const myLinkedList = new LinkedList(1)
    expect(myLinkedList.pop().value).toEqual(1)
    expect(myLinkedList.size()).toEqual(0)
    expect(myLinkedList.head()).toEqual(null)
  })
  test('pop on empty list?', function () {
    const myLinkedList = new LinkedList()
    expect(myLinkedList.pop()).toEqual(null)
    expect(myLinkedList.size()).toEqual(0)
    expect(myLinkedList.head()).toEqual(null)
  })
  test('contains returns true if element in list', function () {
    expect(new LinkedList(1).contains(1)).toEqual(true)
    const myLinkedList = listOfSize(5)
    expect(myLinkedList.contains(1)).toEqual(true)
    expect(myLinkedList.contains(2)).toEqual(true)
    expect(myLinkedList.contains(3)).toEqual(true)
    expect(myLinkedList.contains(4)).toEqual(true)
    expect(myLinkedList.contains(5)).toEqual(true)
  })
  test('contains returns false if element not in list', function () {
    expect(new LinkedList().contains(1)).toEqual(false)
    expect(new LinkedList(1).contains(2)).toEqual(false)
    expect(listOfSize(5).contains(6)).toEqual(false)
  })
  test('find returns null if element not in list', function () {
    expect(new LinkedList().find(1)).toEqual(null)
    expect(new LinkedList(1).find(2)).toEqual(null)
    expect(listOfSize(5).find(6)).toEqual(null)
  })
  test('find returns index if element in list', function () {
    expect(new LinkedList(1).find(1)).toEqual(1)
    const myLinkedList = listOfSize(5)
    expect(myLinkedList.find(1)).toEqual(1)
    expect(myLinkedList.find(2)).toEqual(2)
    expect(myLinkedList.find(3)).toEqual(3)
    expect(myLinkedList.find(4)).toEqual(4)
    expect(myLinkedList.find(5)).toEqual(5)
  })
  test('insertAt 1st place', function () {
    const myLinkedList = listOfSize(3)
    expect(myLinkedList.insertAt(0, 1)).toEqual(true)
    expect(myLinkedList.toString()).toEqual('(0) -> (1) -> (2) -> (3) -> null')
  })
  test('insertAt 3rd place of a 5 element list', function () {
    const myLinkedList = listOfSize(5)
    expect(myLinkedList.insertAt(2.5, 3)).toEqual(true)
    expect(myLinkedList.at(2).value).toEqual(2)
    expect(myLinkedList.at(3).value).toEqual(2.5)
    expect(myLinkedList.at(4).value).toEqual(3)
  })
  test('insertAt 4th place of a 3 element list', function () {
    const myLinkedList = listOfSize(3)
    expect(myLinkedList.insertAt(4, 4)).toEqual(true)
    expect(myLinkedList).toEqual(listOfSize(4))
  })
  test('invalid insertAt returns false and does not change anything', function () {
    const myLinkedList1 = listOfSize(5)
    const myLinkedList2 = listOfSize(5)
    expect(myLinkedList1.insertAt(0, 0)).toEqual(false)
    expect(myLinkedList2.insertAt(7, 7)).toEqual(false)
    expect(myLinkedList1).toEqual(myLinkedList2)
  })
  test('removeAt 1st place', function () {
    const myLinkedList = listOfSize(3)
    expect(myLinkedList.removeAt(1)).toEqual(true)
    expect(myLinkedList.toString()).toEqual('(2) -> (3) -> null')
  })
  test('removeAt 3rd element of 5 element list', function () {
    const myLinkedList = listOfSize(5)
    expect(myLinkedList.removeAt(3)).toEqual(true)
    expect(myLinkedList.toString()).toEqual('(1) -> (2) -> (4) -> (5) -> null')
  })
  test('invalid removeAt returns false and does not change anything', function () {
    const myLinkedList1 = listOfSize(5)
    const myLinkedList2 = listOfSize(5)
    expect(myLinkedList1.removeAt(0)).toEqual(false)
    expect(myLinkedList2.removeAt(6)).toEqual(false)
    expect(myLinkedList1).toEqual(myLinkedList2)
  })
})

function listOfSize (number) {
  const myLinkedList = new LinkedList()
  for (let i = 1; i <= number; i++) {
    myLinkedList.append(i)
  }
  return myLinkedList
}
