// import functions and grab DOM elements

const numberGuessed = document.getElementById('number-guessed');

const guessButton = document.getElementById('guess-button');

const guessesSpace = document.getElementById('guesses-space')

const guessResults = document.getElementById('guess-results')

const resetButton = document.getElementById('reset-button')


let randomNumber = Math.ceil(Math.random() * 20);
let guessesRemaining = 4;



guessButton.addEventListener('click', () => {

    const numberOfGuesses=guessesRemaining-- 

    guessesSpace.textContent= numberOfGuesses

})



// initialize state

// set event listeners to update state and DOM