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
    let evaluatRound = function(roundS) {
      roundS = (playerSelect + computerSelect) 
      return roundS;
    };

    const rockWins = ("rockscissor");
    const rockTies = ("rockrock" );
    const rockLose = ("rockpaper");
    const paperWins = ("paperrock");
    const paperTies = ("paperpaper");
    const paperLose = ("paperscissor");
    const scissorWins = ("scissorpaper");
    const scissorTies = ("scissorscissor");
    const scissorLose = ("scissorrock");

    if (evaluatRound() === rockWins) {
        console.log("You win! rock beats scissor");
    } else if (evaluatRound() === rockTies) {
        console.log("It's a tie! rocks ties with rock!"); 
    }
      else if (evaluatRound() === rockLose) {
        console.log("You lose! paper beats rock");
    }
      else if (evaluatRound() === paperWins) {
        console.log("You win! paper beats rock");
    } else if (evaluatRound() === paperTies) {
        console.log("It's a tie! paper ties with paper");
    } else if (evaluatRound() === paperLose) {
        console.log("You lose! scissor beats paper");
    } else if (evaluatRound() === scissorWins) {
        console.log("You win! scissor beats paper");
    } else if (evaluatRound() === scissorTies) {
        console.log("It's a tie! scissor ties with scissor");
    } else if (evaluatRound() === scissorLose) {
        console.log("You lose! scissor loses to rock");
    }
}
