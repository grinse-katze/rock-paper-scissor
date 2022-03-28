const availableElements = ['rock', 'paper', 'scissor'];

function computerPlay(){
    //randomly return Rock, Paper or Scissor
    const randomElement = Math.floor(Math.random() * availableElements.length);
    return availableElements[randomElement];
}


function playRound(playerSelection, computerSelection){
    //check if user inout is in the availableElements array
    if (playerSelection == availableElements[0] || playerSelection == availableElements[1] || playerSelection == availableElements[2]) {
        if (playerSelection == computerSelection){
            console.log("It's a tie!");
        } else if (playerSelection > computerSelection){
            console.log("You win!");
        } else{
            console.log("You lose!");
        }
    } else{
        console.log("Please choose one of the following: rock, paper, scissor");
    }
}

const computerSelection = computerPlay();
const playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));

