const calculateChange = function(total, cash) {
  const coins = [
    {type: 'twentyDollar', value: 2000},
    {type: 'tenDollar', value: 1000},
    {type: 'fiveDollar', value: 500},
    {type: 'twoDollar', value: 200},
    {type: 'oneDollar', value: 100},
    {type: 'quarter', value: 25},
    {type: 'dime', value: 10},
    {type: 'nickel', value: 5},
    {type: 'penny', value: 1},
  ]

  cash -= total
  let change = {}

  for (let coin of coins) {
    if (cash > coin.value) {
      change[coin.type] = Math.floor(cash / coin.value)
      cash %= coin.value
    }
  }

  return change
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));