const squareCode = function(message) {
  const str = message.split(' ').join('')
  const n   = Math.ceil(Math.sqrt(str.length))
  const square = []

  for (let y = 0; y < n; y++) {
    square[y] = []
    square[y].push(str.slice(y*n, y*n + n))
  }

  let code = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      code += square[j][0].charAt(i)
    }
    code += ' '
  }

  return code.trim()
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));