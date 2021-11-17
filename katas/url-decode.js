const urlDecode = function(text) {
  const keys = text.split('%20').join(' ').split('&')
  const obj  = {}

  for (let key of keys) {
    const pairs = key.split('=')
    obj[pairs[0]] = pairs[1]
  }

  return obj
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);