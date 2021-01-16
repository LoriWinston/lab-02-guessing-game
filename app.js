import {compareNumbers} from './utils.js'

const numberGuessed = document.getElementById('number-guessed');

const guessButton = document.getElementById('guess-button');

const guessesSpace = document.getElementById('guesses-space')

const guessResults = document.getElementById('guess-results')

const guessResultsText = document.getElementById('guess-results-text')

const resetButton = document.getElementById('reset-button')




let randomNumber = Math.ceil(Math.random() * 20);
let guessesRemaining = 4;
let losses = 0
let wins = 0

function resetGuesses (){
    guessesRemaining = 4;
    guessesSpace.textContent = guessesRemaining;
    randomNumber = Math.ceil(Math.random() * 20)

}

guessButton.addEventListener('click', () => {
    const userGuess=(Number(numberGuessed.value))
    console.log(userGuess, randomNumber)
    const results = compareNumbers(userGuess, randomNumber)
    if(results === 0) {
        guessResultsText.textContent = 'You\'re a winner!'
        wins ++ 
        resetGuesses();
        userGuess = 0;
    }


    
    
    else if(results > 1)  {
        guessResultsText.textContent = 'Too high!'
        guessesRemaining--
    }
    
    
    else {
        guessResultsText.textContent = 'Too low!'
        guessesRemaining--
    }
    
   if (guessesRemaining === 0) {
        losses ++
        guessResultsText.textContent = 'Game over!' 
        resetGuesses();  
    }


    guessesSpace.textContent= guessesRemaining 
    guessResults.textContent =`You have ${wins} wins & ${losses}   losses`
       
    });

resetButton.addEventListener ('click', () => {
    wins = 0;
    losses = 0;
    guessResultsText.textContent = '';
    guessResults.textContent = '';
    guessesRemaining = 4;
    guessesSpace.textContent = guessesRemaining;
    resetGuesses();
})
