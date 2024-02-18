let secretNumber = Math.trunc(Math.random()*20 ) +1;
let score = 20;
let highScore = 0;
console.log(`secret number:${secretNumber}`);

document.querySelector('.check').addEventListener('click', ()=>{
    // get guess value from input
    let guesValue = Number(document.querySelector('.guess').value);
    
    // check value if not number
    if(!guesValue){
        document.querySelector('.message').textContent = '⛔ No numbers';
        score--;
    }else{
        if(guesValue === secretNumber){
            // change message 
            document.querySelector('.message').textContent = '🎉 Correct Number!';
            document.querySelector('.number').textContent = secretNumber;
            // change high score
            if(score > highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

            // change background
            document.querySelector('body').style.backgroundColor = '#60b347';
        }else{
            if(score>1){
                document.querySelector('.message').textContent = (guesValue> secretNumber)? '📈 Too high!': '📈 Too low!' ;
                score--;
                document.querySelector('.score').textContent = score;
            }
            else{
                document.querySelector('.message').textContent = '💥 You lost the game!';
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = '#c8270a';
            }
        }
    }

});

document.querySelector('.again').addEventListener('click', ()=>{
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
   
})

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