
let newGameButton = document.querySelector("#newGameButton");

newGameButton.addEventListener("click", gameReset);

let playerScoreContainer = document.querySelector("#player-score");

let playerScore = 0;

playerScoreContainer.innerText = playerScore;

let computerScoreContainer = document.querySelector("#computer-score");

let computerScore = 0;

computerScoreContainer.innerText = computerScore;  

let choices = document.querySelector("#icon-container");

choices.addEventListener("click", (event) => {
  
  let target = event.target;

  if(target.id === "rock-icon"){
    playRound("rock");
  }
  else if(target.id === "paper-icon"){
    playRound("paper");
  }
  else if(target.id === "scissors-icon"){
    playRound("scissors");
  }

});


function gameReset(){
  playerScore = 0;

  playerScoreContainer.innerText = playerScore;

  computerScore = 0;

  computerScoreContainer.innerText = computerScore;
}


function getComputerChoice() {

  let options = ["rock", "paper", "scissors"];

  let selection = Math.floor(Math.random() * 3);

  return options[selection];
}


function playRound(playerSelection) {

  computerSelection = getComputerChoice();

  if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("You win, rock beats scissors");
    playerScore++;
  }
  else if ((playerSelection == "rock" && computerSelection == "paper")) {
    console.log("You lose, paper beats rock");
    computerScore++;
  }
  else if ((playerSelection == "rock" && computerSelection == "rock")) {
    console.log("It's a draw");
  }
  else if ((playerSelection == "paper" && computerSelection == "rock")) {
    console.log("You win, paper beats rock");
    playerScore++;
  }
  else if ((playerSelection == "paper" && computerSelection == "paper")) {
    console.log("It's a draw");
  }
  else if ((playerSelection == "paper" && computerSelection == "scissors")) {
    console.log("You lose, scissors beats paper");
    computerScore++;
  }
  else if ((playerSelection == "scissors" && computerSelection == "rock")) {
    console.log("You lose, rock beats scissors");
    computerScore++;
  }
  else if ((playerSelection == "scissors" && computerSelection == "paper")) {
    console.log("You win, scissors beats paper");
    playerScore++;
  }
  else if ((playerSelection == "scissors" && computerSelection == "scissors")) {
    console.log("It's a draw");
  }

  playerScoreContainer.innerText = playerScore;

  computerScoreContainer.innerText = computerScore;

}


function game() {
  if (playerScore > computerScore) {
    return "Player is the overall winner";
  }
  else if (computerScore > playerScore) {
    return "Computer is the overall winner"
  }
  else if (computerScore == playerScore)
    return "It's a draw";
}






  
 





