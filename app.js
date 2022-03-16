const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "Rock";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_SELECTION = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function () {
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

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
