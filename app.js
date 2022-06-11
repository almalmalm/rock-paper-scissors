function computerPlay () {
    let computerChoice = Math.floor(Math.random() * 3);
    
    switch (computerChoice) { 
        case 0 :
            computerChoice = 'rock';
            break;
        case 1 :
            computerChoice = 'paper';
            break;
        case 2 :
            computerChoice = 'scissors';
            break;
    }

    return computerChoice;
};

function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        result =  `You Lose ! Paper beats Rock.`
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result =  `You Win ! Rock beats Scissors.`
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result =  `You Win ! Paper beats Rock.`
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result =  `You Lose ! Scissors beats Paper.`
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result =  `You Lose ! Rock beats Scissors.`
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result =  `You Win ! Scissors beats Paper.`
    } else {
        result = 'Draw';
    }

    return (result == 'Draw') ? `It's a draw!` : result;
  }
  
let playerSelection;
let computerSelection;

function game () {
    let winner;
    let score;
    let playerCounter = 0;
    let computerCounter = 0;

    const statusWin = 'Win';
    const statusLose = 'Lose';

    for (let i = 0; i < 5; i++) {
       
        playerSelection = prompt(`Enter 'rock', 'paper' or 'scissors':`).toLocaleLowerCase();
        computerSelection = computerPlay();
        let status = playRound(playerSelection, computerSelection);
       
        if (status.includes(statusWin)) {
            playerCounter += 1;
        } else if (status.includes(statusLose)) {
            computerCounter += 1;
        }
    }

    return score = `Player: ${playerCounter} - Computer: ${computerCounter}`;
}
alert(game());