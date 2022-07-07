let result = "";
const container = document.querySelector('#container');

const start = document.createElement('button');
start.classList.add('start');
start.textContent = 'start';

container.appendChild(start);

const rock = document.createElement('button');
rock.textContent = 'rock';

const paper = document.createElement('button');
paper.textContent = 'paper';

const scissors = document.createElement('button');
scissors.textContent = 'scissors';

let playerScore = 0;
let computerScore = 0;

start.addEventListener('click', () => {
    container.removeChild(start);
    console.log('started game!');
    container.appendChild(rock);
    container.appendChild(paper);
    container.appendChild(scissors);
    playerScore = 0;
    computerScore = 0;
});

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

const gameWinner = document.createElement('p');

function scoreKeeper() {
    if (result=='win') {
        playerScore++;
    }
    else if (result =='lose') {
        computerScore++;
    }
    else {

    }
    if (playerScore==5) {
        gameWinner.classList.add('gameWinner');
        gameWinner.textContent = 'You Win! ' + playerScore + '-' + computerScore;

        container.removeChild(rock);
        container.removeChild(paper);
        container.removeChild(scissors);    
        container.appendChild(gameWinner);

    }
    else if (computerScore==5) {
        gameWinner.classList.add('gameWinner');
        gameWinner.textContent = 'You Lose. ' + computerScore + '-' + playerScore;
        container.appendChild(gameWinner);

        container.removeChild(rock);
        container.removeChild(paper);
        container.removeChild(scissors);   
    }
}

const roundWinner = document.createElement('p');

rock.addEventListener('click', () => { 
    roundWinner.classList.add('roundWinner');
    roundWinner.textContent = playRound("rock", computerPlay()) + "\nScore: " + computerScore + '-' + playerScore;

    container.appendChild(roundWinner);
    scoreKeeper();
});

paper.addEventListener('click', () => {
    roundWinner.classList.add('roundWinner');
    roundWinner.textContent = playRound("paper", computerPlay()) + "\nScore: " + computerScore + '-' + playerScore;

    container.appendChild(roundWinner);
    scoreKeeper();
});

scissors.addEventListener('click', () => {
    roundWinner.classList.add('roundWinner');
    roundWinner.textContent = playRound("scissors", computerPlay()) + "\nScore: " + computerScore + '-' + playerScore;

    container.appendChild(roundWinner);
    scoreKeeper();
});
