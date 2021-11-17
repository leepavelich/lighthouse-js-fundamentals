const makeCase = function(input, format) {
  if (format.includes('camel')) input = camelCase(input) 
  if (format.includes('pascal')) input = pascalCase(input) 
  if (format.includes('snake')) input = input.split(' ').join('_') 
  if (format.includes('kebab')) input = input.split(' ').join('-') 
  if (format.includes('title')) input = titleCase(input) 
  if (format.includes('vowel')) input = vowelCase(input) 
  if (format.includes('consonant')) input = consonantCase(input) 
  if (format.includes('upper')) input = input.toUpperCase() 
  if (format.includes('lower')) input = input.toLowerCase()

  return input
}

const camelCase = input => {
  let upperWords = []
  let words = input.split(' ')
  for (let word of words) {
    word = word[0].toUpperCase() + word.slice(1)
    upperWords.push(word)
  }

  upperWords = upperWords.join('')
  return upperWords[0].toLowerCase() + upperWords.slice(1)
};

const pascalCase = input => {
  let upperWords = []
  let words = input.split(' ')
  for (let word of words) {
    word = word[0].toUpperCase() + word.slice(1)
    upperWords.push(word)
  }

  upperWords = upperWords.join('')
  return upperWords
};

const titleCase = input => {
  let upperWords = []
  let words = input.split(' ')
  for (let word of words) {
    word = word[0].toUpperCase() + word.slice(1)
    upperWords.push(word)
  }

  upperWords = upperWords.join(' ')
  return upperWords
}

const isVowel = char => {
  return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false
}

const vowelCase = input => {
  let str = ''
  for (let letter of input) {
    str += isVowel(letter) ? letter.toUpperCase() : letter
  }
  return str
}

const consonantCase = input => {
  let str = ''
  for (let letter of input) {
    str += isVowel(letter) ? letter : letter.toUpperCase()
  }
  return str
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));