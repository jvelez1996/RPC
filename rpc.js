let playerContainer = 0
let computerContainer = 0
let roundsPlayed = 0

function computerPlay () {
    let values = ['rock', 'paper', 'scissors'];
        valueToUse = values[Math.floor(Math.random() * values.length)];
    return valueToUse;
}


function playRound (playerSelection, computerSelection) {
     if (playerSelection === computerSelection) {
        return 'It is a Tie!';
    }

     if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerContainer++; return 'You Lost!';
     }
   
     if (playerSelection === 'rock' && computerSelection === 'scissors') {
         playerContainer++; return 'You Won!';
     }

     if (playerSelection === 'scissors' && computerSelection === 'paper') {
         playerContainer++; return "You Won!";
     }

     if (playerSelection === 'scissors' && computerSelection === 'rock') {
         computerContainer++; return 'You Lost!';
     }

     if (playerSelection === 'paper' && computerSelection === 'rock') {
         playerContainer++; return 'You Win!';
     }

     if (playerSelection === 'paper' && computerSelection === 'scissors') {
         computerContainer++; return 'You Lost!';
     }

}

function game () {
    for (let i = 0; i < 5; i++) {
        playRound (playerSelection, computerSelection);
    }
}

let playerSelection = prompt('rock, paper, or scissors?');
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(game ());
//console.log("Your Score is " + playerContainer);
//console.log("The Computer Score is " + computerContainer);
//console.log("Number of Rounds Played " + roundsPlayed);

