function playGame() {
    let computerMove = getComputerChoice();
    let playerMove = playerSelection();

    console.log(computerMove);
    console.log(`This is the players move: ${playerMove}`);
}

function playerSelection() {
    let playerChoice = prompt('Enter "Rock", "Paper", or "Scissors" to play.');
    if (playerChoice != null) {
        playerChoice = formatPlayerInput(playerChoice);
        return playerChoice;
    }
}

//Selects either Rock, Paper, or Scissors for the computers move.
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch(choice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            alert('Something went wrong');
    }
}

function formatPlayerInput(playerChoice) {
    let firstChar = playerChoice.charAt(0);
    firstChar = firstChar.toUpperCase();
    let remainingChars = playerChoice.substring(1);
    remainingChars = remainingChars.toLowerCase();

    let formattedString = `${firstChar}${remainingChars}`;
    return formattedString;
}