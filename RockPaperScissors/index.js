//Step 1
console.log('Game!');

//Step 4
let humanScore = 0;
let computerScore = 0;

//Step 2
function getComputerChoice() {
  const computerChoice = ['rock', 'paper', 'scissors'];
  let randomChoice = Math.floor(Math.random() * 3);
  return computerChoice[randomChoice];
}

//Step 3
function getHumanChoice() {
  let humanChoice = prompt('Rock, Paper, Scissors?').toLowerCase();
  const validHumanChoice = ['rock', 'paper', 'scissors'];

  while (!validHumanChoice.includes(humanChoice)) {
    humanChoice = prompt(
      'Invalid choice. Please enter Rock, Paper, Scissors'
    ).toLowerCase();
  }
  return humanChoice;
}

//Step 5
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log('It is a tie!');
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    console.log('Player win!');
  } else {
    computerScore++;
    console.log('Computer win!');
  }
}

//Step 6
function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Scores: Player: ${humanScore} v Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log('The player wins the game!');
  } else if (computerScore > humanScore) {
    console.log('The computer wins the game!');
  } else {
    console.log('The BO5 game results are tied!');
  }

  console.log(
    `Final score: Player: ${humanScore} v Computer: ${computerScore}`
  );
}

playGame();
