const conditionalSum = function(values, condition) {
  let evenSum = 0
  let oddSum  = 0

  for (let i = 0; i < values.length; i++) {
    (values[i] % 2 === 0) ? evenSum += values[i] : oddSum += values[i]
  }

  return (condition === "even") ? evenSum : oddSum
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));