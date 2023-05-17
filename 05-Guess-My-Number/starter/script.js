'use strict';

// console.log(document.querySelector('.message').textContent );
// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent  = 20;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() *20) +1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);
// When there is no input
    if(!guess){
        displayMessage('No Number!')
// When player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b374';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
// When number is wrong
    else if (guess !== secretNumber) {
        if(score > 1){
// ternary operator for too high or too low
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You loose');
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener(
    'click', function(){
        score = 20;
        secretNumber = Math.trunc(Math.random() *20) +1;
        displayMessage('#Start guessing...#');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = null;
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('body').style.backgroundColor = '#222';
    }
)
///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/