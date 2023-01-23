const NUM_ROUNDS = 5;
var player_score = 0;
var computer_score = 0;

function getComputerChoice() {
    var num = Math.floor(Math.random()*100)%3;
    if (num == 0) {
        return "Rock";
    }
    else if (num == 1) {
        return "Paper";
    }
    else if (num == 2) {
        return "Scissors";
    }
    else{
        console.error("Random number returned something unexpected!")
        return null;
    }
}

function playRound(playerSelection, computerSelection) {
    var player = playerSelection.toLowerCase();
    var comp = computerSelection.toLowerCase();

    var winner = -1;
    if (player == "rock") {
        if (comp=="rock") {
            winner = 2;
        }
        else if (comp=="paper") {
            winner = 1;
        }
        else {
            winner = 0;
        }
    }
    else if (player == "paper") {
        if (comp == "paper") {
            winner = 2;
        }
        else if (comp == "scissors") {
            winner = 1;
        }
        else {
            winner = 0;
        }
    }
    else {
        if (comp == "scissors") {
            winner = 2;
        }
        else if (comp == "rock") {
            winner = 1;
        }
        else {
            winner = 0;
        }
    }

    if (winner == 0) {
        return `You Win! ${player} beats ${comp}`;
    }
    if (winner == 1) {
        return `You Lose! ${comp} beats ${player}`;
    }
    return `You Tie! Both players chose ${player}`;
}

const buttons= document.querySelectorAll('button');
buttons.forEach ( (button) => {
    button.addEventListener('click',e => {
        const pchoice = button.getAttribute('id');
        console.log(playRound(`${pchoice}`,getComputerChoice()));
    });
});