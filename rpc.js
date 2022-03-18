let playerContainer = 0
let computerContainer = 0
let roundsPlayed = 0

function computerPlay () {
    let values = ['Rock', 'Paper', 'Scissors'];
        valueToUse = values[Math.floor(Math.random() * values.length)];
    return valueToUse;
}

function playGame (playerPick, computerPick) {
     if (playerPick === computerPick) {
        return 'It is a Tie!';
    }

     if (playerPick === 'Rock' && computerPick === 'Paper') {
        computerContainer++; roundsPlayed++; return 'You Lost!';
     }
   
     if (playerPick === 'Rock' && computerPick === 'Scissors') {
         playerContainer++; roundsPlayed++;return 'You Won!';
     }

     if (playerPick === 'Scissors' && computerPick === 'Paper') {
         playerContainer++; roundsPlayed++; return "You Won!";
     }

     if (playerPick === 'Scissors' && computerPick === 'Rock') {
         computerContainer++; roundsPlayed++; return 'You Lost!';
     }

     if (playerPick === 'Paper' && computerPick === 'Rock') {
         playerContainer++; roundsPlayed++; return 'You Win!';
     }

     if (playerPick === 'Paper' && computerPick === 'Scissors') {
         computerContainer++; roundsPlayed++; return 'You Lost!';
     }

}

function rounds () {
    while (roundsPlayed < 5) {
        roundsPlayed++;
    }
}
let playerPick = prompt("Rock, Paper, or Scissors?");
const computerPick = computerPlay();
console.log(playGame(playerPick, computerPick));
console.log("Your Score is " + playerContainer);
console.log("The Computer Score is " + computerContainer);
console.log("Number of Rounds Played " + roundsPlayed);

