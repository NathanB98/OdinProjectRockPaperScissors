function playGame() {
    let computerMove = getComputerChoice();
    let playerMove = playerSelection();

    playRound(computerMove, playerMove);
}

//Runs a single round of Rock, Paper, Scissors. Uses computerMove and playerMove arguments from earlier functions.
function playRound(computerMove, playerMove) {
    if(playerMove == 'Rock') {
        if(computerMove == 'Scissors') {
            console.log('You win! Rock beats Scissors');
        } else if(computerMove == 'Paper') {
            console.log('You lose! Paper beats Rock');
        } else {
            console.log('The round is a draw!');
        }
    } else if(playerMove == 'Paper') {
        if(computerMove == 'Rock') {
            console.log('You win! Paper beats Rock');
        } else if (computerMove == 'Scissors') {
            console.log('You lose! Scissors beats Paper');
        } else {
            console.log('The round is a draw!');
        }
    } else {
        if(computerMove == 'Paper') {
            console.log('You win! Scissors beats Paper');
        } else if (computerMove == 'Rock') {
            console.log('You lose! Rock beats Scissors');
        } else {
            console.log('The round is a draw!');
        }
    }
}

//Take input from user. Check if it is suitable. Return the move.
function playerSelection() {
    let playerChoice = prompt('Enter "Rock", "Paper", or "Scissors" to play.');
    if (playerChoice != null) {
        playerChoice = formatPlayerInput(playerChoice);
    }

    if(playerChoice == 'Rock' || playerChoice == 'Paper' || playerChoice == 'Scissors'){
        return playerChoice;
    } else {
        alert('Please enter a valid move');
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