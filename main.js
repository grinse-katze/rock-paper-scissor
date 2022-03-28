const availableElements = ['rock', 'paper', 'scissor'];


let computerSelection;
let playerSelection;

function computerPlay(){
    //randomly return Rock, Paper or Scissor
    const randomElement = Math.floor(Math.random() * availableElements.length);
    return availableElements[randomElement];
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    //check if user input is in the availableElements array
    if (playerSelection == availableElements[0] || 
        playerSelection == availableElements[1] || 
        playerSelection == availableElements[2]) {
        
        if (playerSelection == computerSelection){
            alert(`${playerSelection} ties with ${computerSelection}`);
        } else if (playerSelection == availableElements[0] && computerSelection == availableElements[2]){
            //if user chooses rock against scissor = user wins
            alert(`${playerSelection} wins against ${computerSelection}`);
        } else if (playerSelection == availableElements[2] && computerSelection == availableElements[1]){
            //if user chooses scissor against paper = user wins
            alert(`${playerSelection} wins against ${computerSelection}`);
        } else if (playerSelection == availableElements[1] && computerSelection == availableElements[0]){
            //if user chooses paper against rock = user wins
            alert(`${playerSelection} wins against ${computerSelection}`);
        }
        else{
            alert(`${playerSelection} loses against ${computerSelection}`);
        }

    } else{
        alert("Please choose one of the following: rock, paper, scissor");
    }
}

function game(){
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose one of the following: rock, paper, scissor");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();



