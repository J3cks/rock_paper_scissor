console.log("Go Jecks!");
console.log("Para sa Pangarap!");

function playerChoice() {
    let userChoice = prompt("Pick one: (rock paper scissor)");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    compChoice = choices[Math.floor(Math.random()*choices.length)];
    return compChoice;
}

function playRound(playerSelect, computerSelect) {
    playerSelect = playerChoice();
    computerSelect = getComputerChoice();
    let evaluateRound = (playerSelect, computerSelect);
    console.log(playerSelect, computerSelect);

    const rockWins = ("rock" , "scissor");
    const rockTies = ("rock" , "rock" );
    const rockLose = ("rock" , "paper");
    const paperWins = ("paper" , "rock");
    const paperTies = ("paper" , "paper");
    const scissorWins = ("scissor" , "paper");
    const scissorTies = ("scissor" ,"scissor");

    if (evaluateRound === rockWins) {
        console.log("You win! rock beats scissor");
    } else if (evaluateRound === rockTies) {
        console.log("It's a tie! rocks ties with rock!"); 
    }
      else if (evaluateRound === rockLose) {
        console.log("You lose! paper beats rock");
    }

      else if (evaluateRound === paperWins) {
        console.log("You win! paper beats rock");
    } else if (evaluateRound === paperTies) {
        console.log("It's a tie! paper ties with paper");
    } else if (evaluateRound === scissorWins) {
        console.log("You win! scissor beats paper");
    } else if (evaluateRound === scissorTies) {
        console.log("It's a tie! scissor ties with scissor");
    }
}
