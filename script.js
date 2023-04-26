let options = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  var computerSelection = options[Math.floor(Math.random() * options.length)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock") {
    if (computerSelection == "Rock") {
      return "It's a Draw! You both picked Rock!";
    } else if (computerSelection == "Paper") {
      return "You Lost! Paper beats Rock!";
    } else if (computerSelection == "Scissors") {
      return "You won! Rock beats Scissors!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "Paper") {
      return "It's a Draw! You both picked Paper!";
    } else if (computerSelection == "Scissors") {
      return "You Lost! Scissors beats Paper!";
    } else if (computerSelection == "Rock") {
      return "You won! Paper beats Rock!";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "Scissors") {
      return "It's a Draw! You both picked Scissors!";
    } else if (computerSelection == "Rock") {
      return "You Lost! Rock beats Scissors!";
    } else if (computerSelection == "Paper") {
      return "You won! Scissors beats Paper!";
    }
  }
}

function game() {
  var yourScore = 0;
  var computerScore = 0;

  for (let i = 0; i < 5; i++) {
    var computerSelection = getComputerChoice();
    var playerSelection = prompt("Pick between Rock, Paper and Scissors");
    playRound(playerSelection, computerSelection);
    if (
      playRound(playerSelection, computerSelection) ==
        "It's a Draw! You both picked Rock!" ||
      playRound(playerSelection, computerSelection) ==
        "It's a Draw! You both picked Paper!" ||
      playRound(playerSelection, computerSelection) ==
        "It's a Draw! You both picked Scissors!"
    ) {
      console.log(
        playRound(playerSelection, computerSelection) +
          "\n" +
          `Your Score is ${yourScore}` +
          "\n" +
          `The Computer score is ${computerScore}`
      );
    } else if (
      playRound(playerSelection, computerSelection) ==
        "You Lost! Paper beats Rock!" ||
      playRound(playerSelection, computerSelection) ==
        "You Lost! Scissors beats Paper!" ||
      playRound(playerSelection, computerSelection) ==
        "You Lost! Rock beats Scissors!"
    ) {
      computerScore += 1;
      console.log(
        playRound(playerSelection, computerSelection) +
          "\n" +
          `Your Score is ${yourScore}` +
          "\n" +
          `The Computer score is ${computerScore}`
      );
    } else if (
      playRound(playerSelection, computerSelection) ==
        "You won! Rock beats Scissors!" ||
      playRound(playerSelection, computerSelection) ==
        "You won! Paper beats Rock!" ||
      playRound(playerSelection, computerSelection) ==
        "You won! Scissors beats Paper!"
    ) {
      yourScore += 1;
      console.log(
        playRound(playerSelection, computerSelection) +
          "\n" +
          `Your Score is ${yourScore}` +
          "\n" +
          `The Computer score is ${computerScore}`
      );
    }
  }
  if (yourScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > yourScore) {
    console.log("You lost... Better luck next time!");
  } else {
    console.log("It's a draw! What a great game!");
  }
}

console.log(game());
