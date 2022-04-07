const buttons = document.querySelectorAll('.choice-button');
const gameOverScreen = document.querySelector('.game-over');
const overlay = document.querySelector('#overlay');
const newGameButton = document.querySelector('#new-game-button');

let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    const choices = ['rock', 'paper', 'scissor'];
    //randomly return Rock, Paper or Scissor
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){      
    let status = '';

    if (playerScore < 5 && computerScore < 5){
        if (playerSelection == computerSelection){
            status = `${playerSelection} ties with ${computerSelection}`;
        } else if (
            (playerSelection == 'rock' && computerSelection == 'scissor') ||
            (playerSelection == 'scissor' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'rock')
            ){
            status = `${playerSelection} wins against ${computerSelection}`;
            playerScore += 1;
        } else{
            status = `${playerSelection} loses against ${computerSelection}`;
            computerScore += 1;
        }
    
        // Update Status & Score in document
        document.querySelector('#status').textContent = status;
        document.querySelector('#player-score').textContent = playerScore;
        document.querySelector('#computer-score').textContent = computerScore;
    } 

    else {
        gameOverScreen.classList.add('active');
        overlay.classList.add('active');
        gameOver();
    }
}

function gameOver(){
    if (playerScore === 5) {
        document.querySelector('#game-result').textContent = "You win!";
    } else {
        document.querySelector('#game-result').textContent = "You lose!";
    }
    newGameButton.addEventListener('click', function(){
        window.location.reload();
    });

}
 

buttons.forEach(button => {
    button.addEventListener('click', function() {
        return playRound(button.id, computerPlay());
    });
});






