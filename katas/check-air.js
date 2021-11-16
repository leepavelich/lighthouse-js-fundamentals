const checkAir = function (samples, threshold) {
  const total = samples.length
  let cleanSum = 0
  let dirtySum = 0

  for (let i = 0; i < samples.length; i++) {
    samples[i] === 'clean' ? cleanSum++ : dirtySum++
  }

  let dirtyFrac = dirtySum / total
  
  return (dirtyFrac > threshold) ? 'Polluted' : 'Clean'
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))