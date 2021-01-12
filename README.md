# EDIT-THIS-README
Guess a # app

html setup

1) Number input
why? so the user can enter their guesses

2)Button
why? to submit the guess and trigger the state changes

3)Guesses remaining span
why? to display the remaining guesses

4) too high too low you got it! span
to tell the user what's wrong with their guess (if anything)


1)Go grab dom elements (that means they need ids
2) initialize state) (our global `let's`)
    -random number: n
    -guesses remaining: 4


3) Add eventlistener to button
on click
    1) state changes decrement remaining guesses by 1 (--)
    2) store user guess in a variable (`Number(someInput.value`))
    3) compare user guess with random number
    4) view
        a)if user guess is > the random number inject 'too high' to our results span
         View: check if there are any guesses left. if not, disable input and add a losing message
        b) if user guesses < the random number inject 'too low' into our results span
        View: check if there are any guesses left. if not, disable input and add a losing message
       c) if the user guess is equal to random number congratulate user
        disable the input if they win

   

View:
a)if user guess is greater than the random number, in


    4) add another event listener onto the reset button 
    on click
    reset remaining guesses state to 4
    create a new random number