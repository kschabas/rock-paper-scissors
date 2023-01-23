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

function game(num_rounds)
{
    

    for (i=0;i<num_rounds;i++) {
        var compChoice = getComputerChoice();
        var playerChoice = prompt("Do you choose paper, rock or scissors?");

        var msg = playRound(playerChoice,compChoice);
        console.log(msg);
        var char = msg.substring(4,5);
        if (char == "W") {
            player_score++;
        }
        else if (char == "L") {
            computer_score++;
        }
    }
    if (player_score > computer_score)
    {
        window.alert(`You Win! Final score is ${player_score} - ${computer_score}`);
    }
    else if (computer_score > player_score) {
        window.alert(`You Lose! Final score is ${player_score} - ${computer_score}`);
    }
    else {
        window.alert(`Game is a Tie! Final score is ${player_score} - ${computer_score}`);
    }
}

