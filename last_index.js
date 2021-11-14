function lastIndexOf(arr, val) {
  let index = undefined
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      index = i
    }
  }
  return (index === undefined) ? -1 : index
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);