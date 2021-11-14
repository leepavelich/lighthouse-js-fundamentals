function loopyLighthouse(range, multiples, words) {
  let start = range[0]
  let end   = range[1]
  for (let i = start; i <= end; i++) {
    let str   = ""
    if (i % multiples[0] === 0) {
      str += words[0]
    }
    if (i % multiples[1] === 0) {
      str += words[1]
    }
    if (str.length !== 0) {
      console.log(str)
    } else {
      console.log(i)
    }
  }
}

// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"])