function judgeVegetable(veggies, metric) {
  let currMax = veggies[0][metric]
  let currInd = 0
  for (let i = 1; i < veggies.length; i++) {
    if (veggies[i][metric] > currMax) {
      currInd = i
    }
  }
  return veggies[currInd].submitter
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'redness'

// vegetables = [
//   {
//     submitter: 'A',
//     d: 5,
//   },
//   {
//     submitter: 'B',
//     d: 10,
//   },
//   {
//     submitter: 'C',
//     d: 25,
//   }
// ]
// metric = 'd'

console.log(judgeVegetable(vegetables, metric))