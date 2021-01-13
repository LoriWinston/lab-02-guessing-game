// import functions and grab DOM elements

const numberGuessed = document.getElementById('number-guessed');

const guessButton = document.getElementById('guess-button');

const guessesSpace = document.getElementById('guesses-space')

const guessResults = document.getElementById('guess-results')

const resetButton = document.getElementById('reset-button')


let randomNumber = Math.ceil(Math.random() * 20);
let guessesRemaining = 4;
let losses = 0


guessButton.addEventListener('click', () => {
    const userGuess=(Number(numberGuessed.value))
    console.log(randomNumber)
    if(userGuess === randomNumber) {
        guessResults.textContent = 'You\'re a winner!'
    }
    
    
    if(userGuess > randomNumber)  {
        guessResults.textContent = 'Too high!'
        guessesRemaining--
    }
    
    
    if (userGuess < randomNumber) {
        guessResults.textContent = 'Too low!'
        guessesRemaining--
    }
    
    if (guessesRemaining === 0) {
        losses ++
        guessResults.textContent = 'Game over!'
        
    }
    guessesSpace.textContent= guessesRemaining 
       
    });


