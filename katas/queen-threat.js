const readBoard  = (board, [x, y]) => board[x][y]
const writeBoard = (board, [x, y], val) => board[x][y] = val

const generateBoard = (white, black) => {
  const board = []

  for (let i = 0; i < 8; i++) {
    board[i] = Array(8).fill(0)
  }

  writeBoard(board, white, 1)
  writeBoard(board, black, 1)

  return board
}

const queenThreat = board => {
  const posList = []

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (readBoard(board, [i, j])) posList.push([i, j])
    }
  }

  const [x1, y1] = posList.pop()
  const [x2, y2] = posList.pop()

  if (x1 === x2) return true
  if (y1 === y2) return true
  if (Math.abs(x2-x1) === Math.abs(y2-y1)) return true // diagonal threat

  return false
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));