const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_SELECTION = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! we chose ${DEFAULT_SELECTION} for you`);
    return DEFAULT_SELECTION;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  const playerSelection = getPlayerChoice();
  const computerChoice = getPlayerChoice();
  const winner = getWinner(computerChoice, playerSelection);
  let message = `You picked ${playerSelection}, computer picked ${computerChoice}, therefore you  `;
  if (winner === RESULT_DRAW) {
    message = message + "had a Draw.";
  } else if (winner === RESULT_COMPUTER_WINS) {
    message = message + "lost.";
  } else {
    message = message + "won.";
  }
  alert(message);
  gameIsRunning = false;
});
