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

for (i=0;i<5;i++)
{
    console.log(getComputerChoice());
}