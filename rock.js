const NUM_ROUNDS = 5;
var player_score = 0;
var computer_score = 0;

function getComputerChoice() {
    var num = Math.floor(Math.random()*100)%3;
    var text = `Computer chooses`
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

function playerWins() {
    alert("You Win!!!");
}

function compWins() {
    alert("You Lose!!!");
}

function playRound(playerSelection, computerSelection) {
    var player = playerSelection.toLowerCase();
    var comp = computerSelection.toLowerCase();

    var text = `Computer chooses ${comp}. `;

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
    var msg = document.querySelector('.user-message');
    if (winner == 0) {
        text += `You Win! ${player} beats ${comp}`;
        msg.style.backgroundColor = 'green';
        player_score++;
    }
    else if (winner == 1) {
        text += `You Lose! ${comp} beats ${player}`;
        msg.style.backgroundColor = 'red';
        computer_score++;
    }
    else {
        text +=  `You Tie! Both players chose ${player}`;
        msg.style.backgroundColor = 'orange';
    }
    
    msg.textContent = text;
    document.querySelector('#player').textContent = `Player: ${player_score}`;
    document.querySelector('#computer').textContent = `Player: ${computer_score}`;

    if (player_score == NUM_ROUNDS)
    {
        playerWins();
    }
    if (computer_score == NUM_ROUNDS)
    {
        compWins();
    }
}

const buttons= document.querySelectorAll('button');
buttons.forEach ( (button) => {
    button.addEventListener('click',e => {
        const pchoice = button.getAttribute('id');
        console.log(playRound(`${pchoice}`,getComputerChoice()));
    });
});