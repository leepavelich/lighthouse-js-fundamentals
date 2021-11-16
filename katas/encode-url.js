const urlEncode = function(text) {
  text = text.trim();

  let newStr = ""
  for (let i = 0; i < text.length; i++) {
    newStr += (text[i] === ' ') ? '%20' : text[i]
  }
  return newStr
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));