console.log("HELLO ROMEO PLATOON!")

// Variables
let ranNum = Math.floor(Math.random() * 100 + 1)
let guessCount = 1
let resetButton

// Input area
const btnGuess = document.querySelector('.btnGuess')
const fldGuess = document.querySelector('.fldGuess')

// Output area
const guesses = document.querySelector('.guesses')
const lastGuess = document.querySelector('.lastGuess')
const lastGuessOutput = document.querySelector('.lastGuessOutput')

console.log(`Definitely not the number... ${ranNum}`)

function checkGuess() {
  let numGuess = Number(fldGuess.value)

  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: '
  }

  guesses.textContent += numGuess + ' '

  if (numGuess === ranNum) {
    lastGuess.textContent = `Good job! You picked my number! It only took ${guessCount} `
    if (guessCount === 1) {
      lastGuess.textContent += 'attempt'
    }
    else {
      lastGuess.textContent += 'attempts'
    }
    
    lastGuess.style.backgroundColor = 'green'
    lastGuess.style.color = 'white'
    lastGuessOutput.textContent = ''
  }

  else {
    lastGuess.textContent = 'Sorry, incorrect guess!'
    lastGuess.style.backgroundColor = 'red'
    if (numGuess < ranNum) {
      lastGuessOutput.textContent = 'Your guess was too low!'
    }
    else if (numGuess > ranNum) {
      lastGuessOutput.textContent = 'Your guess was too high!'
    }
  }

  guessCount++
  //fldGuess.value = ''
  fldGuess.focus()
}

btnGuess.addEventListener('click', checkGuess)
