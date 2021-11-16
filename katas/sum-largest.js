const sumLargestNumbers = function(data) {
  // sort the input array in descending order
  data.sort((x,y) => y - x)
  return (data[0] + data[1])
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));