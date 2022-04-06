const buttons = document.querySelectorAll('button');
const pScore = document.querySelector('#player-score');
const cScore = document.querySelector('#computer-score');

let playerScore = 0;
let computerScore = 0;


//document.querySelector('#status').textContent = "";



function computerPlay(){
    const choices = ['rock', 'paper', 'scissor'];
    //randomly return Rock, Paper or Scissor
    return choices[Math.floor(Math.random() * choices.length)];
}


buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.id);
    })
})



function playRound(playerSelection, computerSelection){      
    computerSelection = computerPlay();
    let status = '';  
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
    // Update Status & Score text in document
    document.querySelector('#status').textContent = status;
    document.querySelector('#player-score').textContent = playerScore;
    document.querySelector('#computer-score').textContent = computerScore;
}



/*


function game(){
    for(let i = 0; i < 5; i++) {
        let computerSelection;
        let playerSelection;
        playerSelection = prompt("Choose one of the following: rock, paper, scissor");
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        
    }
}

game();

*/



