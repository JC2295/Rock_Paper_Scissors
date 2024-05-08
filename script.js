function getComputerChoice() {

  let options = ["rock", "paper", "scissors"];

  let selection = Math.floor(Math.random() * 3);

  return options[selection];
}

function playRound(playerSelection, computerSelection) {
  // your code here!
  let playerSelectionLower = playerSelection.toLowerCase();

  if (playerSelectionLower == "rock" && computerSelection == "scissors") {
    console.log("You win, rock beats scissors");
    return "won";
  }
  else if ((playerSelectionLower == "rock" && computerSelection == "paper")) {
    console.log("You lose, paper beats rock");
    return "lost";
  }
  else if ((playerSelectionLower == "rock" && computerSelection == "rock")) {
    console.log("It's a draw");
    return "drew";
  }
  else if ((playerSelectionLower == "paper" && computerSelection == "rock")) {
    console.log("You win, paper beats rock");
    return "won";
  }
  else if ((playerSelectionLower == "paper" && computerSelection == "paper")) {
    console.log("It's a draw");
    return "drew";
  }
  else if ((playerSelectionLower == "paper" && computerSelection == "scissors")) {
    console.log("You lose, scissors beats paper");
    return "lost";
  }
  else if ((playerSelectionLower == "scissors" && computerSelection == "rock")) {
    console.log("You lose, rock beats scissors");
    return "lost";
  }
  else if ((playerSelectionLower == "scissors" && computerSelection == "paper")) {
    console.log("You win, scissors beats paper");
    return "won";
  }
  else if ((playerSelectionLower == "scissors" && computerSelection == "scissors")) {
    console.log("It's a draw");
    return "drew";
  }
}

function game() {

  let gameNumber = 0;

  let gameNumberContainer = document.querySelector("#gameNumberConatiner");

  let playerScore = 0;

  let playerScoreContainer = document.querySelector("#playerScoreContainer");

  playerScoreContainer.innerText = playerScore;

  let computerScore = 0;

  let computerScoreContainer = document.querySelector("#computerScoreContainer");

  computerScoreContainer.innerText = computerScore;

  for (let i = 0; i < 5; i++) {

    gameNumber++;

    gameNumberContainer.innerText = gameNumber;

    playerSelection = prompt("Enter Option: ");

    computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);

    if (result == "won") {
      playerScore++;

      playerScoreContainer.innerText = playerScore;
    }
    else if (result == "lost") {
      computerScore++;

      computerScoreContainer.innerText = computerScore;
    }
  }

  if (playerScore > computerScore) {
    return "Player is the overall winner";
  }
  else if (computerScore > playerScore) {
    return "Computer is the overall winner"
  }
  else if (computerScore == playerScore)
    return "It's a draw";
}

game();

