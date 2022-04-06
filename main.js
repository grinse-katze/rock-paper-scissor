const buttons = document.querySelectorAll('button');

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
        gameOver();
    }
}

function gameOver(){
    if (playerScore === 5) {
        document.querySelector('#status').textContent = "You win!";
    } else {
        document.querySelector('#status').textContent = "You lose!";
    }
}

/*
function game(userInput){
    playRound(userInput, computerPlay())
}
*/

buttons.forEach(button => {
    button.addEventListener('click', function() {
        return playRound(button.id, computerPlay());
    });
});






