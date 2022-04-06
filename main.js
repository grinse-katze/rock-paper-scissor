const choices = ['rock', 'paper', 'scissor'];

let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    //randomly return Rock, Paper or Scissor
    const randomElement = Math.floor(Math.random() * choices.length);
    return choices[randomElement];
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    //check if user input is in the choices array
    if (playerSelection == choices[0] || 
        playerSelection == choices[1] || 
        playerSelection == choices[2]) {
        
        if (playerSelection == computerSelection){
            alert(`${playerSelection} ties with ${computerSelection}`);
        } else if (
            (playerSelection == choices[0] && computerSelection == choices[2]) ||
            (playerSelection == choices[2] && computerSelection == choices[1]) ||
            (playerSelection == choices[1] && computerSelection == choices[0])
            ){
            alert(`${playerSelection} wins against ${computerSelection}`);
            playerScore += 1;
        } else{
            alert(`${playerSelection} loses against ${computerSelection}`);
            computerScore += 1;
        }
        alert(`Current score: 
                You: ${playerScore}
                Computer: ${computerScore}`);

    } else{
        alert("Please choose one of the following: rock, paper, scissor");
    }
}

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



