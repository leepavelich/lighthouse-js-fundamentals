const multiplicationTable = function(maxValue) {
  let mult = 1
  let str  = ''

  for (y = 1; y <= maxValue; y++) {
    for (x = 1; x <= maxValue; x++) {
      str += mult * x + ' '
    }
    str += '\n'
    mult++
  }

  return str
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));