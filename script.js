console.log("Go J3cks!");
console.log("I will become a developer!");

//this code is barebone for the game, it uses button as simple selection just to get the logic and code right
const choiceContainer = document.querySelectorAll('#choice-container button');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const showPlayer = document.querySelector('.show-player');
const showOpponent = document.querySelector('.show-opponent');
const playBtn = document.querySelector('#play-btn');
const roundResult = document.querySelector('#round-result');
const roundCount = document.querySelector('#round-count p');
const playerScore = document.querySelector('.user-score p');
const opponentScore = document.querySelector('.cpu-score p');
const endresult = document.getElementById('endresult');


let count = 0;
roundCount.innerText = `Round ${count}`;
let myScore = 0;
let cpuScore = 0;

choiceContainer.forEach(element => {
    if (myScore === 5 || cpuScore === 5) {
        console.log(myScore === 5 ? 'YOU WIN!' : 'YOU LOSE!');
        return; // Exit the event listener and loop
    }

    let choice;
    element.addEventListener('click', function(e) {
        showPlayer.innerText = element.innerText.toUpperCase();  
        choice = element.innerText;

        //generates random number rounded to single digits - 1
        //then gets the item from the arrray using the random number
        //as index to the array
        let picContainer;
        const cpuPick = () => {
            let cpuChoices = ['rock', 'paper', 'scissor'];
            let random = Math.floor(Math.random() * 3);
            let pick = cpuChoices[random];
            picContainer = pick;
        }
        cpuPick();
        showOpponent.innerText = picContainer.toUpperCase();
        //

        //evaluates the game picks both player and opponent
        //both string are added and compared to show result
        let eval = choice.toLowerCase() + picContainer;
        let result;
        if (eval == 'rockscissor') {
            result = 'win';
        } else if (eval == 'paperrock') {
            result = 'win';
        } else if (eval == 'scissorpaper') {
            result = 'win';
        } else if (eval == 'rockpaper') {
            result = 'lose';roundCount.innerText = `Round ${count}`;
        } else if (eval == 'paperscissor') {
            result = 'lose';
        } else if (eval == 'scissorrock') {
            result = 'lose';
        } else {
            result = 'tie';
        }
        roundResult.innerText = result.toUpperCase();
        //
        if (result == 'win') {
            myScore += 1;
            playerScore.innerText = `Your Score: ${myScore}`;
        } else if (result == 'lose') {
            cpuScore += 1;
            opponentScore.innerText = `Computer Score: ${cpuScore}`;
        }

        //round count
        count += 1;
        roundCount.innerText = `Round ${count}`;
        if (myScore == 5) {
            console.log('YOU WIN!');
        } else if (cpuScore == 5) {
            console.log('YOU LOSE!');
        } else {
            console.log('keep going');
        }
        //
        // console.log(myScore);
        // console.log(cpuScore);
    
        // Check if the game should be stopped again after updating the scores
        if (myScore === 5 || cpuScore === 5) {
            if (myScore === 5) {
                const egP = document.createElement('p');
                egP.innerText = 'YOU WIN THE GAME!';
                endresult.appendChild(egP);
            } else {
                const egP = document.createElement('p');
                egP.innerText = 'YOU LOSE THE GAME!';
                endresult.appendChild(egP);
            }
            const plyBtn = document.createElement('button');
            endresult.append(plyBtn);
            plyBtn.innerText = 'Play Again';
            
            plyBtn.addEventListener('click', function(e){
                myScore = 0;
                cpuScore = 0;
                playerScore.innerText = 'Your Score: 0';
                opponentScore.innerText = 'Computer Score: 0';
                roundCount.innerText = 'Round 1';
                roundResult.innerText = '';
                showPlayer.innerText = '-';
                showOpponent.innerText = '-';
                count = 1;
                endresult.remove();
            }); // Reset the game state
            return; // Exit the event listener and loop
        }

    })
    
});

