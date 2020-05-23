const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0,
};

// Play Game
function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

// Get Computers choice
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return 'rock';
  } else if (rand <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Get game winner
function getWinner(p, c) {
  if (p === c) {
    return 'draw';
  } else if (p === 'rock') {
    return c === 'paper' ? 'computer' : 'player';
  } else if (p === 'paper') {
    return c === 'scissors' ? 'computer' : 'player';
  } else if (p === 'scissors') {
    return c === 'rock' ? 'computer' : 'player';
  }
}

function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    // Inc player score
    scoreboard.player++;
    console.log(scoreboard.player);
    // Show model result
    result.innerHTML = `<h1 class="text-win">You Win</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.replace(/^\S/, (s) =>
          s.toUpperCase()
        )}</strong></p>
    `;
  } else if (winner === 'draw') {
    result.innerHTML = `<h1>It's A Draw</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.replace(/^\S/, (s) =>
          s.toUpperCase()
        )}</strong></p>
    `;
  } else {
    // Inc computer score
    scoreboard.computer++;
    result.innerHTML = `<h1 class="text-lose">You lose</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.replace(/^\S/, (s) =>
          s.toUpperCase()
        )}</strong></p>
    `;
  }
  // Show Score
  score.innerHTML = `<p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p>
  `;

  modal.style.display = 'block';
}

// Clear modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// Restart Game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
  <p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p>
  `;
}

// Event listeners
choices.forEach((choice) => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
