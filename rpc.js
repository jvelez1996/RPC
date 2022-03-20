let playerContainer = 0;
let computerContainer = 0;
let roundsPlayed = 0;

function computerPlay () {
    let values = ['rock', 'paper', 'scissors'];
        valueToUse = values[Math.floor(Math.random() * values.length)];
    return valueToUse;
}


function playRound (playerSelection, computerSelection) {

     if (playerSelection === computerSelection) {
       return 'It is a Tie!';
    }

     else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerContainer++; return 'You Lost!';
     }
   
     else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerContainer++; return 'You Won!';
     }

     else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerContainer++; return "You Won!";
     }

     else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerContainer++; return 'You Lost!';
     }

     else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerContainer++; return 'You Win!';
     }

     else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerContainer++; return 'You Lost!';
     }

}

function game(){

    while (roundsPlayed < 5){
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let playerLower = playerSelection.toLowerCase();
        let computerSelection = computerPlay();
        playRound (playerSelection, computerSelection);
        roundsPlayed++;
        console.log (playRound (playerSelection, computerSelection));
        console.log ("Rounds Played " + roundsPlayed)
        console.log ("Player Score " + playerContainer);
        console.log ("Computer Score " + computerContainer);
    }
}


console.log(game ());


