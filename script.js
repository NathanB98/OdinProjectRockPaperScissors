const buttons = document.querySelectorAll('button');

let scoreContainer = document.createElement('div');
let resultPara = document.createElement('p');
let scorePara = document.createElement('p');

let playerChoice;
let playerScore = 0;
let compScore = 0;

//Eventlistener waits for user to pick a button, representing a move. Players choice is stored then the game function is called.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id == 'rock') {
            playerChoice = 'Rock';
        } else if (button.id == 'paper') {
            playerChoice = 'Paper';
        } else {
            playerChoice = 'Scissors';
        }

        playGame(playerChoice);
    });
});

function playGame(playerChoice) {
    let computerMove = getComputerChoice();

    playRound(computerMove, playerChoice);
}

//Runs a single round of Rock, Paper, Scissors.
function playRound(computerMove, playerMove) {
    let result;

    if(playerMove == 'Rock') {
        if(computerMove == 'Scissors') {
            result = 'win';
            playerScore++;
            updateRoundResult(result, computerMove, playerMove);
        } else if(computerMove == 'Paper') {
            result = 'lose';
            compScore++;
            updateRoundResult(result, computerMove, playerMove);
        } else {
            result = 'draw';
            updateRoundResult(result, computerMove, playerMove);
        }
    } else if(playerMove == 'Paper') {
        if(computerMove == 'Rock') {
            result = 'win';
            playerScore++;
            updateRoundResult(result, computerMove, playerMove);
        } else if (computerMove == 'Scissors') {
            result = 'lose';
            compScore++;
            updateRoundResult(result, computerMove, playerMove);
        } else {
            result = 'draw';
            updateRoundResult(result, computerMove, playerMove);
        }
    } else {
        if(computerMove == 'Paper') {
            result = 'win';
            playerScore++;
            updateRoundResult(result, computerMove, playerMove);
        } else if (computerMove == 'Rock') {
            result = 'lose';
            compScore++;
            updateRoundResult(result, computerMove, playerMove);
        } else {
            result = 'draw';
            updateRoundResult(result, computerMove, playerMove);
        }
    }

    displayRunningScore(playerScore, compScore);

    //Checks if either the player or the computer has won. Outputs a message and resets the score for both players
    if(playerScore == 5) {
        alert(`Player has won! You won ${playerScore} rounds first!`);
        playerScore = 0;
        compScore = 0;
    } else if (compScore == 5) {
        alert(`Player has lost! The computer won ${compScore} rounds first!`);
        compScore = 0;
        playerScore = 0;
    }

}

//Displays a running score for the player and computer
function displayRunningScore(playerScore, compScore) {
    scoreContainer = document.querySelector('#gameContainer');
    scorePara.textContent = `Player score: ${playerScore} Computer score: ${compScore}`;
    scoreContainer.appendChild(scorePara);
}

//Updates the div that displays the last rounds results.
function updateRoundResult(result, computerMove, playerMove) {
    scoreContainer = document.querySelector('#gameContainer');
    if(result == 'win') {
        resultPara.textContent = `You ${result}! ${playerMove} beats ${computerMove}`;
    } else if(result == 'lose') {
        resultPara.textContent = `You ${result}! ${computerMove} beats ${playerMove}`;
    } else {
        resultPara.textContent = `The round is a ${result}!`;
    }
    scoreContainer.appendChild(resultPara);
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