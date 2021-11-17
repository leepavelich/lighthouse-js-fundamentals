const camelCase = function(input) {
  let upperWords = []
  let words = input.split(' ')
  for (let word of words) {
    word = word[0].toUpperCase() + word.slice(1)
    upperWords.push(word)
  }

  upperWords = upperWords.join('')
  return upperWords[0].toLowerCase() + upperWords.slice(1)
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));