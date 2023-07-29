class Square {
  row = null
  col = null
  nextMoves = []
  constructor (row, col, depth = 0) {
    this.row = row
    this.col = col
    if (depth < 7) {
      this.populateNextMoves(depth + 1)
    }
  }

  isValid () {
    return this.row > 0 && this.row < 9 && this.col > 0 && this.col < 9
  }

  toString () {
    return `[${this.row},${this.col}]`
  }

  populateNextMoves (depth) {
    const a = new Square(this.row + 1, this.col + 2, depth)
    const b = new Square(this.row + 1, this.col - 2, depth)
    const c = new Square(this.row + 2, this.col + 1, depth)
    const d = new Square(this.row + 2, this.col - 1, depth)
    const e = new Square(this.row - 1, this.col + 2, depth)
    const f = new Square(this.row - 1, this.col - 2, depth)
    const g = new Square(this.row - 2, this.col + 1, depth)
    const h = new Square(this.row - 2, this.col - 1, depth)

    if (a.isValid()) this.nextMoves.push(a)
    if (b.isValid()) this.nextMoves.push(b)
    if (c.isValid()) this.nextMoves.push(c)
    if (d.isValid()) this.nextMoves.push(d)
    if (e.isValid()) this.nextMoves.push(e)
    if (f.isValid()) this.nextMoves.push(f)
    if (g.isValid()) this.nextMoves.push(g)
    if (h.isValid()) this.nextMoves.push(h)
  }

  shortestPath (row, col) {
    if (this.nextMoves.length === 0) return []
    let found = false
    let shortestPath = []
    this.nextMoves.forEach(square => {
      if (square.row === row && square.col === col) found = true
      if (!found) {
        const path = square.shortestPath(row, col)
        if (
          path.length > 0 &&
          (shortestPath.length === 0 || path.length < shortestPath.length)
        ) {
          shortestPath = path
        }
      }
    })
    if (found) shortestPath = [[row, col]]
    if (shortestPath.length === 0) return []
    shortestPath.push([this.row, this.col])
    return shortestPath
  }
}
function knightMoves (a, b) {
  const startingSquare = new Square(a[0], a[1])
  const path = startingSquare.shortestPath(b[0], b[1])
  const distance = path.length - 1
  if (distance >= 0) {
    console.log(`=> You made it in ${distance} moves!  Here's your path:`)
    while (path.length > 0) {
      const nextMove = path.pop()
      console.log(`  [${nextMove[0]},${nextMove[1]}]`)
    }
  }
  return distance
}

knightMoves([3, 3], [4, 3])
