function getComputerChoice() {

  let options = ["Rock", "Paper", "Scissors"];

  let selection = Math.floor(Math.random() * max);

  return options[selection];
}

function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    player
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection)
  }
}