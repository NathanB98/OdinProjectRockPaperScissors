const buttons = document.querySelectorAll('button');

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