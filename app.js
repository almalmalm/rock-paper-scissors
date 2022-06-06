function computerPlay() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

   let value = getRandomInt(3);

   if(value===0){
        return('rock');
   }else if(value===1){
        return('paper');
   }else {
        return('scissors');
   }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return('You Lose! Paper beats Rock.');
    }else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return('You Win! Rock beats Scissors.');
    }else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return("It's a draw! Rock vs Rock.");
    }else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return("It's a draw! Paper vs Paper.");
    }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return('You Lose! Scissors beats Paper.');
    }else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return('You Win! Paper beats Rock!');
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return('You Win! Scissors beats Paper!');
    }else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return("It's a draw! Scissors vs Scissors.");
    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return('You Lose! Rock beats scissors.');
    }
  }
  
  const playerSelection = prompt('Choose rock, paper or scissors:').toLocaleLowerCase();
  const computerSelection = computerPlay();
  //console.log(playRound(playerSelection, computerSelection));

function game() {
    score = 0;
    for (let i = 0; i < 5; i++) {
        const res = playRound(playerSelection, computerSelection);
    }
}
