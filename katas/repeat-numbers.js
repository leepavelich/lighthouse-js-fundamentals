const repeatNumbers = function(data) {
  // let str = ''

  // for (let i = 0; i < data.length; i++) {
  //   for (let j = 0; j < data[i][1]; j++) {
  //     str += data[i][0]
  //   }
  //   if (i < data.length - 1) str += ', '
  // }

  return data.map(([num, times]) => num.toString().repeat(times)).join(', ')

  // return str
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));