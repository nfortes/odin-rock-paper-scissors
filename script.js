let result = "";

function computerPlay() {
    const weapons = ["Rock", "Paper", "Scissors"];
    let choose;
    choose = parseInt(Math.random() * weapons.length);
    return weapons[choose];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        if (computerSelection == "Rock") {
            result = "tie";
            return "Tie! Rock vs Rock";
        }
        else if (computerSelection == "Paper") {
            result = "lose";
            return "You lose! Paper beats Rock";
        }
        else if (computerSelection == "Scissors") {
            result = "win";
            return "You win! Rock beats Scissors";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "Rock") {
            result = "win";
            return "You win! Paper beats Rock";
        }
        else if (computerSelection == "Paper") {
            result = "tie";
            return "Tie! Paper vs Paper";
        }
        else if (computerSelection == "Scissors") {
            result = "lose";
            return "You lose! Scissors beats Paper";
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "Rock") {
            result = "lose";
            return "You lose! Rock beats Scissors";
        }
        else if (computerSelection == "Paper") {
            result = "win";
            return "You win! Scissors beats Paper";
        }
        else if (computerSelection == "Scissors") {
            result = "tie";
            return "Tie! Scissors vs Scissors";
        }
    }
    else {
        throw new Error("not a valid choice!");
    }
}

function game() {
    let playerChoice;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Rock, Paper, or Scissors?");
        console.log(playRound(playerChoice, computerPlay()));
        if (result == "win") {
            playerScore++;
        }
        else if (result == "lose") {
            computerScore++;
        }
    }
    if (playerScore>computerScore) {
        return "You win!";
    }
    else if (computerScore>playerScore) {
        return "You lose.";
    }
    else {
        return "Tie";
    }
}

console.log(game());