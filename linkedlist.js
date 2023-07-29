class LinkedList {
  _head = null
  constructor (value) {
    if (value !== undefined) {
      this._head = new Node(value)
    }
  }

  append (value) {
    if (this._head === null) {
      this._head = new Node(value)
    } else {
      this.tail().next = new Node(value)
    }
    return this
  }

  prepend (value) {
    const oldHead = this._head
    this._head = new Node(value)
    this._head.next = oldHead
    return this
  }

  size () {
    let count = 0
    let node = this._head
    while (node !== null) {
      count++
      node = node.next
    }
    return count
  }

  head () {
    return this._head
  }

  tail () {
    if (this._head === null) return null

    let node = this._head
    while (node.next !== null) {
      node = node.next
    }
    return node
  }

  at (index) {
    let node = this._head
    let count = 0
    while (node !== null) {
      if (++count === index) return node
      node = node.next
    }
    return null
  }

  pop () {
    if (this._head === null) return null
    let prevNode = null
    let node = this._head
    while (node.next !== null) {
      prevNode = node
      node = node.next
    }
    if (prevNode === null) {
      this._head = null
    } else {
      prevNode.next = null
    }
    return node
  }

  contains (value) {
    return this.find(value) !== null
  }

  find (value) {
    let index = 1
    let node = this._head
    while (node !== null) {
      if (node.value === value) return index
      index++
      node = node.next
    }
    return null
  }

  toString () {
    let node = this._head
    let output = ''
    while (node !== null) {
      output += `(${node.value}) -> `
      node = node.next
    }
    return output + 'null'
  }

  insertAt (value, index) {
    if (index === 1) {
      const oldHead = this._head
      this._head = new Node(value)
      this._head.next = oldHead
      return true
    } else {
      const prevNode = this.at(index - 1)
      if (prevNode !== null) {
        const oldNode = prevNode.next
        const newNode = new Node(value)
        prevNode.next = newNode
        newNode.next = oldNode
        return true
      }
    }
    return false
  }

  removeAt (index) {
    if (index === 1) {
      if (this._head !== null) {
        this._head = this._head.next
        return true
      }
    } else {
      const prevNode = this.at(index - 1)
      if (prevNode !== null) {
        const node = prevNode.next
        if (node !== null) {
          prevNode.next = node.next
          return true
        }
      }
    }
    return false
  }
}
class Node {
  constructor (newValue) {
    this.value = newValue
    this.next = null
  }
}

module.exports = LinkedList
