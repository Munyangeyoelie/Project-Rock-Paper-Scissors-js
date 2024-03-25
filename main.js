function getComputerChoice(rock, paper, scissors) {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return rock;
      break;
    case 1:
      return paper;
      break;
    case 2:
      return scissors;
      break;
    default:
      break;
  }
  return 0;
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (playerSelection === 0 && computerSelection === 1) {
    console.log("You win!");
  } else if (playerSelection === 1 && computerSelection === 2) {
    console.log("You win!");
  } else if (playerSelection === 2 && computerSelection === 0) {
    console.log("You win!");
  } else if (playerSelection === 0 && computerSelection === 2) {
    console.log("You lose!");
  } else if (playerSelection === 1 && computerSelection === 0) {
    console.log("You lose!");
  } else if (playerSelection === 2 && computerSelection === 1) {
    console.log("You lose!");
  } else {
    console.log("You lose!");
  }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function playGame() {
  let playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  let playAgain = prompt("Would you like to play again?").toLowerCase();
  if (playAgain === "yes" || playAgain === "y") {
    playGame();
  } else if (playAgain === "no" || playAgain === "n") {
    console.log("Thanks for playing!");
  } else {
    console.log("Please enter either 'yes' or 'no'.");
    playGame();
  }
}
const form = document.querySelector("#game-form");
const message = document.querySelector(".game-message");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const move = document.querySelector('input[name="move"]:checked').value;
  const response = playRound(move);
  message.innerHTML = response;
});

function playRound(move) {
  const responses = {
    rock: "Computer chose rock.",
    paper: "Computer chose paper.",
    scissors: "Computer chose scissors.",
  };
  const computerMove =
    Math.random() < 0.33 ? "rock" : move === "rock" ? "scissors" : "paper";
  const winner = movesTie(move, computerMove)
    ? "It's a tie!"
    : responses[move] + " You lose!";
  return winner;
}

function movesTie(playerMove, computerMove) {
  return playerMove === computerMove;
}
