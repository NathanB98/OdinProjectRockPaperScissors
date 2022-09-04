const buttons = document.querySelectorAll('button');

let scoreContainer = document.createElement('div');
let scorePara = document.createElement('p');

let playerChoice;

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

//Plays 5 rounds of the game.
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
            updateRoundResult(result, computerMove, playerMove);
        } else if(computerMove == 'Paper') {
            result = 'lose';
            updateRoundResult(result, computerMove, playerMove);
        } else {
            result = 'draw';
            updateRoundResult(result, computerMove, playerMove);
        }
    } else if(playerMove == 'Paper') {
        if(computerMove == 'Rock') {
            result = 'win';
            updateRoundResult(result, computerMove, playerMove);
        } else if (computerMove == 'Scissors') {
            result = 'lose';
            updateRoundResult(result, computerMove, playerMove);
        } else {
            result = 'draw';
            updateRoundResult(result, computerMove, playerMove);
        }
    } else {
        if(computerMove == 'Paper') {
            result = 'win';
            updateRoundResult(result, computerMove, playerMove);
        } else if (computerMove == 'Rock') {
            result = 'lose';
            updateRoundResult(result, computerMove, playerMove);
        } else {
            result = 'draw';
            updateRoundResult(result, computerMove, playerMove);
        }
    }
}

//Updates the div that displays the last rounds results.
function updateRoundResult(result, computerMove, playerMove) {
    scoreContainer = document.querySelector('#gameContainer');
    if(result == 'win') {
        scorePara.textContent = `You ${result}! ${playerMove} beats ${computerMove}`;
    } else if(result == 'lose') {
        scorePara.textContent = `You ${result}! ${computerMove} beats ${playerMove}`;
    } else {
        scorePara.textContent = `The round is a ${result}!`;
    }
    scoreContainer.appendChild(scorePara);
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