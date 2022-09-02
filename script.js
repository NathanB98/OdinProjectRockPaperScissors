function playGame() {
    let computerMove = getComputerChoice();

    console.log(computerMove);
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