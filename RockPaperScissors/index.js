let humanScore = 0;
let computerScore = 0;

document.querySelector('#rock').addEventListener('click', () => {
  playRound('Rock', getComputerChoice());
});

document.querySelector('#paper').addEventListener('click', () => {
  playRound('Paper', getComputerChoice());
});

document.querySelector('#scissors').addEventListener('click', () => {
  playRound('Scissors', getComputerChoice());
});

function getComputerChoice() {
  const computerChoice = ['Rock', 'Paper', 'Scissors'];
  let randomChoice = Math.floor(Math.random() * 3);
  return computerChoice[randomChoice];
}

const resultContainer = document.querySelector('#resultContainer');
resultContainer.setAttribute(
  'style',
  'margin-top: 10px; font-size: 25px; font-family: "Raleway", sans-serif;'
);
const roundResult = document.createElement('div');
roundResult.setAttribute(
  'style',
  'textAlign: center; padding: 10px; font-size: 25px'
);

resultContainer.appendChild(roundResult);

function tieChoice(humanChoice, computerChoice) {
  roundResult.textContent = `It is a tie! Player: ${humanChoice} v Computer: ${computerChoice}`;
}

function playerWin(humanChoice, computerChoice) {
  roundResult.textContent = `Computer win! Player: ${humanChoice} v Computer: ${computerChoice}`;
}

function computerWin(humanChoice, computerChoice) {
  roundResult.textContent = `Computer win! Player: ${humanChoice} v Computer: ${computerChoice}`;
}

function playRound(humanChoice, computerChoice) {
  const result = document.querySelector('#result');
  result.style.textAlign = 'center';

  if (humanChoice === computerChoice) {
    tieChoice(humanChoice, computerChoice);
  } else if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    humanScore++;
    playerWin(humanChoice, computerChoice);
  } else {
    computerScore++;
    computerWin(humanChoice, computerChoice);
  }

  result.textContent = `\nYour score: ${humanScore} v Computer score: ${computerScore}.`;
  if (humanScore === 5) {
    result.textContent = `\nCongratulations! You won the game!`;
    setTimeout(resetGame, 3000);
  } else if (computerScore === 5) {
    result.textContent = `\nNice try! The computer won the game!`;
    setTimeout(resetGame, 3000);
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  const result = document.querySelector('#result');
  result.textContent = "Game reset. Let's play again!";
}
