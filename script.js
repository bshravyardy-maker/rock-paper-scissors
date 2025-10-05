const choices = document.querySelectorAll('.choice');
const resultMsg = document.getElementById('resultMsg');
const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const resetBtn = document.getElementById('reset');

let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    updateScore(winner);
    showResult(playerChoice, computerChoice, winner);
  });
});

resetBtn.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  resultMsg.textContent = "Make your move!";
});

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

function getWinner(player, computer) {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

function updateScore(winner) {
  if (winner === 'player') playerScore++;
  if (winner === 'computer') computerScore++;
  playerScoreEl.textContent = `Player: ${playerScore}`;
  computerScoreEl.textContent = `Computer: ${computerScore}`;
}

function showResult(player, computer, winner) {
  if (winner === 'draw') {
    resultMsg.textContent = `It's a Draw! You both chose ${player}.`;
  } else if (winner === 'player') {
    resultMsg.textContent = `You Win! ${player} beats ${computer}.`;
  } else {
    resultMsg.textContent = `You Lose! ${computer} beats ${player}.`;
  }
}
