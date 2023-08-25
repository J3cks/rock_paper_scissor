console.log("Go J3cks!");
console.log("I will become a developer!");

//this code is barebone for the game, it uses button as simple selection just to get the logic and code right
const container = document.querySelectorAll('button');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

const emptyDiv = document.querySelector('#empty');
const div = document.createElement('div');
emptyDiv.append(div);
div.innerText =  '';





container.forEach(element => {
    let choice;
    element.addEventListener('click', function(e) {
        div.innerText = element.innerText;  
        choice = element.innerText;


        let picContainer;
        const cpuPick = () => {
            let cpuChoices = ['rock', 'paper', 'scissor'];
            let random = Math.floor(Math.random() * 3);
            let pick = cpuChoices[random];
            picContainer = pick;

        }
        cpuPick();

        let eval = choice.toLowerCase() + picContainer;
        console.log(eval);


        let result;
        if (eval == 'rockscissor') {
            result = 'win';
        } else if (eval == 'paperrock') {
            result = 'win';
        } else if (eval == 'scissorpaper') {
            result = 'win';
        } else if (eval == 'rockpaper') {
            result = 'lose';
        } else if (eval == 'paperscissor') {
            result = 'lose';
        } else if (eval == 'scissorrock') {
            result = 'lose';
        } else {
            result = 'tie';
        }
        console.log(result);

    })
});
