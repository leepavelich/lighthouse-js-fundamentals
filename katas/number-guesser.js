let prompt = require("prompt-sync")();

const guessingGame = () => {
  const guesses = []
  const target  = Math.floor(Math.random() * 100)
  let guessedYet = false

  while(!guessedYet) {
    let answer = prompt("Guess a number: ");
    let guess = parseInt(answer)

    if (answer === 'exit') break
    if (isNaN(guess)) {
      console.log("Not a number! Try again!")
    } else if (guesses.includes(guess)) {
      console.log("Already Guessed!")
    } else if (guess === target) {
      console.log(`You got it! You took ${guesses.length+1} attempts`)
      guessedYet = true
    } else {
      (guess > target) ? console.log("Too High!") : console.log("Too Low!")
      guesses.push(guess)
    }
  }
}

guessingGame()
