const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restart');
const board = document.getElementById('board');

let currentPlayer = 'X';
let gameActive = true;
let state = Array(9).fill("");

const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

cells.forEach((cell, i) => {
  cell.addEventListener('click', () => play(cell, i));
});

function play(cell, index) {
  if (!gameActive || state[index]) return;

  state[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkWin()) return;
  if (state.every(c => c)) return draw();

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusText.textContent = `Player ${currentPlayer}'s Turn`;
}

function checkWin() {
  for (let combo of wins) {
    const [a,b,c] = combo;
    if (state[a] && state[a] === state[b] && state[a] === state[c]) {
      combo.forEach(i => cells[i].classList.add('win'));
      statusText.textContent = `Player ${currentPlayer} Wins! `;
      gameActive = false;
      return true;
    }
  }
  return false;
}

function draw() {
  statusText.textContent = "It's a Draw";
  board.classList.add('draw');
  gameActive = false;
}

restartBtn.addEventListener('click', () => {
  state.fill("");
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove('win');
  });
  board.classList.remove('draw');
  currentPlayer = 'X';
  gameActive = true;
  statusText.textContent = "Player X's Turn";
});
