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
         return 'You Lost!';
     }
   
     if (playerPick === 'Rock' && computerPick === 'Scissors') {
         return 'You Won!';
     }

     if (playerPick === 'Scissors' && computerPick === 'Paper') {
         return "You Won!";
     }

     if (playerPick === 'Scissors' && computerPick === 'Rock') {
         return 'You Lost!';
     }

     if (playerPick === 'Paper' && computerPick === 'Rock') {
         return 'You Win!';
     }

     if (playerPick === 'Paper' && computerPick === 'Scissors') {
         return 'You Lost!';
     }


}

function game() {
    
}

const playerPick = 'Rock';
const computerPick = computerPlay();
console.log(playGame(playerPick, computerPick));
const playerContainer = 0;
const computerContainer = 0;
console.log (game(playerContainer, computerContainer));

