import {compareNumbers} from './utils.js'

const numberGuessed = document.getElementById('number-guessed');

const guessButton = document.getElementById('guess-button');

const guessesSpace = document.getElementById('guesses-space')

const guessResults = document.getElementById('guess-results')

const resetButton = document.getElementById('reset-button')


let randomNumber = Math.ceil(Math.random() * 20);
let guessesRemaining = 4;
let losses = 0
let wins = 0


guessButton.addEventListener('click', () => {
    const userGuess=(Number(numberGuessed.value))
    const results = compareNumbers(userGuess, randomNumber)
    if(results === 0) {
        guessResults.textContent = 'You\'re a winner!'
        wins ++ 
    }
    
    
    if(results > 1)  {
        guessResults.textContent = 'Too high!'
        guessesRemaining--
    }
    
    
    if (results < -1) {
        guessResults.textContent = 'Too low!'
        guessesRemaining--
    }
    
    if (guessesRemaining === 0) {
        losses ++
        guessResults.textContent = 'Game over!'
        
    }
    guessesSpace.textContent= guessesRemaining 
    guessResults.textContent =`You have ${wins} wins & ${losses}   losses`
       
    });


