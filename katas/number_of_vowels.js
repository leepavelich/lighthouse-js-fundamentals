const numberOfVowels = function(data) {
  let sum = 0
  for (let i = 0; i < data.length; i++) {
      if (isVowel(data[i])) sum++
  }

  return sum
};

function isVowel(char) {
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));